<?php
/**
 * contact.php — gestore moduli Impresa Tedeschi (hosting classico con PHP + mail()).
 *
 * Campi attesi (macros.njk → moduloContatto): modulo, nome*, email, telefono, impresa,
 * richiesta*, riferimento, _ritorno, _t, _hp. Regola: almeno un recapito tra email e telefono.
 * Moduli: intervento, materiali, collaborazione, candidatura (più informazioni/contatto per compatibilità).
 * Nessun consenso generico nel modulo: c'è solo il rimando alla Privacy Policy.
 *
 * Ordine dei controlli (il primo che scatta risponde)
 *  1. corpo oltre 64 KB                                  -> 422, KO
 *  2. honeypot _hp compilato                              -> finta accettazione (200, /grazie/)
 *  3. _t assente o vuoto, invio NATIVO (senza Accept: application/json), cioè modulo senza JavaScript
 *                                                         -> 422, KO (mai un "grazie" che non lo è)
 *  4. _t assente o vuoto con Accept JSON (script o bot)    -> finta accettazione
 *     _t presente ma più recente di 2 s, o oltre un giorno nel futuro -> finta accettazione
 *  5. oltre 5 invii in 10 minuti dallo stesso IP           -> 429, KO (Retry-After 600)
 *  6. validazione dei campi (nome, recapito, email, telefono, richiesta) -> 422, KO
 *  7. mail() fallita                                       -> 500, KO
 *  8. tutto in regola                                      -> 200, /grazie/
 *
 * Caso -> risposta (JSON = invio da main.js; nativo = modulo senza JavaScript, redirect 303)
 *  | caso                                  | JSON                       | nativo                          |
 *  | JS, tempo giusto, dati validi         | 200 ok                     | non si presenta (serve JS per _t)|
 *  | JS, invio troppo rapido (_t < 2 s)    | 200 ok finto, nulla parte  | 303 /grazie/ finto, nulla parte |
 *  | honeypot compilato                    | 200 ok finto               | 303 /grazie/ finto              |
 *  | senza JavaScript (_t vuoto)           | 200 ok finto               | 303 /invio-non-riuscito/        |
 *  | oltre il limite di frequenza          | 429                        | 303 /invio-non-riuscito/        |
 *  | campi non validi                      | 422                        | 303 /invio-non-riuscito/        |
 *  | errore di mail()                      | 500                        | 303 /invio-non-riuscito/        |
 * main.js valorizza _t al caricamento e aspetta 3 s prima di inviare: un visitatore con JavaScript
 * non incontra mai la finta accettazione. La finta accettazione resta solo dove serve a non far
 * imparare nulla ai bot.
 *
 * Altre difese (giro del 13/11/2026)
 *  - limite di frequenza per IP senza database: un file temporaneo per visitatore, con lock, il cui
 *    nome è un hash con sale giornaliero (l'IP non viene scritto da nessuna parte), dentro solo i
 *    timestamp degli ultimi invii, 5 ogni 10 minuti, scadenza automatica;
 *  - niente strip_tags: il testo fra < e > resta (il corpo è text/plain, non serve escape HTML);
 *    si tolgono solo caratteri di controllo e UTF-8 non valido;
 *  - header, oggetto e mittente senza a capo né separatori di riga Unicode.
 * Config: tenere $DESTINATARIO allineato con src/_data/site.json → email.
 */

declare(strict_types=1);

date_default_timezone_set('Europe/Rome');

$DESTINATARIO = 'info@impresatedeschi.it';
$dominio = strtolower(preg_replace('/^www\./i', '', (string) ($_SERVER['SERVER_NAME'] ?? 'impresatedeschi.it')));
if (!preg_match('/^[a-z0-9.-]+$/', $dominio)) $dominio = 'impresatedeschi.it';
$MITTENTE = 'sito@' . $dominio;

// pagina statica per ogni esito negativo senza JavaScript (mai un "grazie" che non lo è)
$KO = '/invio-non-riuscito/';

$vuoleJson = stripos((string) ($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json') !== false;

function rispondi(bool $vuoleJson, int $codice, string $stato, string $redirect): never
{
    if ($vuoleJson) {
        http_response_code($codice);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode(['ok' => $codice < 300, 'stato' => $stato], JSON_UNESCAPED_UNICODE);
    } else {
        header('Location: ' . $redirect, true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    header('Location: /', true, 303);
    exit;
}

/** Testo libero: UTF-8 valido, niente caratteri di controllo (a capo e tab ammessi), a capo normalizzati. */
function pulisci(string $v, int $max = 2000): string
{
    if (!mb_check_encoding($v, 'UTF-8')) {
        $v = mb_convert_encoding($v, 'UTF-8', 'UTF-8'); // scarta le sequenze non valide
    }
    $v = str_replace(["\r\n", "\r"], "\n", $v);
    $v = (string) preg_replace('/[\x{2028}\x{2029}\x{0085}]/u', "\n", $v);
    $v = (string) preg_replace('/[^\P{C}\n\t]/u', '', $v); // via tutti i caratteri di controllo (NUL compreso) tranne \n e \t
    return mb_substr(trim($v), 0, $max);
}

/** Valore per una riga o un header: nessun a capo, nessun separatore di riga. */
function riga(string $v): string
{
    $v = str_ireplace(['%0a', '%0d'], ' ', $v);
    $v = (string) preg_replace('/[\p{C}\x{2028}\x{2029}]+/u', ' ', $v);
    return trim($v);
}

/**
 * Limite di frequenza per IP, senza database. Un file per visitatore in una cartella temporanea, il nome
 * è un hash con sale giornaliero (l'IP non viene mai scritto), il contenuto sono solo i timestamp degli
 * ultimi invii. flock evita le gare. Se la cartella non è scrivibile il limite non blocca nessuno.
 */
function troppeRichieste(int $max = 5, int $finestra = 600): bool
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
    if ($ip === '') return false;
    $dir = rtrim(sys_get_temp_dir(), '/\\') . DIRECTORY_SEPARATOR . 'tedeschi-rl';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) return false;

    $fileSegreto = $dir . DIRECTORY_SEPARATOR . 'sale.key';
    if (!is_file($fileSegreto)) {
        @file_put_contents($fileSegreto, bin2hex(random_bytes(16)), LOCK_EX);
        @chmod($fileSegreto, 0600);
    }
    $segreto = (string) @file_get_contents($fileSegreto);
    if ($segreto === '') return false;

    $ora = time();
    $chiave = substr(hash_hmac('sha256', $ip, $segreto . date('Y-m-d', $ora)), 0, 32);
    $file = $dir . DIRECTORY_SEPARATOR . $chiave . '.rl';

    // pulizia a campione: via i file fermi da più di due finestre (scadenza dei dati)
    if (random_int(1, 20) === 1) {
        foreach ((array) @glob($dir . DIRECTORY_SEPARATOR . '*.rl') as $vecchio) {
            if (is_string($vecchio) && (int) @filemtime($vecchio) < $ora - $finestra * 2) @unlink($vecchio);
        }
    }

    $h = @fopen($file, 'c+');
    if ($h === false) return false;
    $troppe = false;
    if (flock($h, LOCK_EX)) {
        $contenuto = (string) stream_get_contents($h);
        $tempi = array_values(array_filter(
            array_map('intval', $contenuto === '' ? [] : explode(',', $contenuto)),
            static fn (int $t): bool => $t > $ora - $finestra
        ));
        if (count($tempi) >= $max) {
            $troppe = true;
        } else {
            $tempi[] = $ora;
        }
        ftruncate($h, 0);
        rewind($h);
        fwrite($h, implode(',', $tempi));
        fflush($h);
        flock($h, LOCK_UN);
    }
    fclose($h);
    return $troppe;
}

// ritorno sempre locale (mai //host o URL assoluti)
$ritorno = riga(pulisci((string) ($_POST['_ritorno'] ?? '/contatti/'), 200));
if ($ritorno === '' || $ritorno[0] !== '/' || str_starts_with($ritorno, '//') || str_contains($ritorno, '\\')) {
    $ritorno = '/contatti/';
}
$ritorno = explode('?', explode('#', $ritorno)[0])[0];

// corpo della richiesta ragionevole (campi di testo, niente allegati)
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) {
    rispondi($vuoleJson, 422, 'non-valido', $KO);
}

// anti-spam: honeypot e time-trap (finta accettazione, i bot non imparano nulla)
if (!empty($_POST['_hp'] ?? '')) {
    rispondi($vuoleJson, 200, 'ok', '/grazie/');
}
$t = (int) ($_POST['_t'] ?? 0);
// modulo inviato senza JavaScript: _t nasce vuoto e lo scrive solo main.js. Esito negativo vero, non la finta
// accettazione (il visitatore deve sapere che la richiesta non è partita).
if ($t <= 0 && !$vuoleJson) {
    rispondi($vuoleJson, 422, 'serve-javascript', $KO);
}
$trascorsi = time() - $t;
// _t obbligatorio: con Accept JSON, se manca vale come invio troppo rapido. Un _t nel futuro è tollerato solo entro un
// giorno (orologio del visitatore sballato), oltre è un valore costruito per aggirare il controllo.
if ($t <= 0 || ($trascorsi >= 0 && $trascorsi < 2) || $trascorsi < -86400) {
    rispondi($vuoleJson, 200, 'ok', '/grazie/');
}

// limite di frequenza per IP
if (troppeRichieste()) {
    header('Retry-After: 600');
    rispondi($vuoleJson, 429, 'troppe-richieste', $KO);
}

$modulo = strtolower(riga(pulisci((string) ($_POST['modulo'] ?? 'contatto'), 40)));
$nome = riga(pulisci((string) ($_POST['nome'] ?? ''), 200));
$emailGrezza = riga(trim((string) ($_POST['email'] ?? '')));
$email = filter_var($emailGrezza, FILTER_VALIDATE_EMAIL) ?: '';
$telefono = riga(pulisci((string) ($_POST['telefono'] ?? ''), 40));
$impresa = riga(pulisci((string) ($_POST['impresa'] ?? ''), 200));
$riferimento = riga(pulisci((string) ($_POST['riferimento'] ?? ''), 200));
// "richiesta" è il campo dei moduli attuali; descrizione/messaggio restano accettati per i moduli vecchi
$richiesta = pulisci((string) ($_POST['richiesta'] ?? ($_POST['descrizione'] ?? ($_POST['messaggio'] ?? ''))), 4000);

// validazione server-side
$errori = [];
if ($nome === '') $errori[] = 'nome';
if ($emailGrezza !== '' && $email === '') $errori[] = 'email';
if ($email === '' && $telefono === '') $errori[] = 'recapito'; // almeno un recapito
if ($telefono !== '' && !preg_match('/^[0-9+().\s\/-]{5,40}$/', $telefono)) $errori[] = 'telefono';
if ($richiesta === '') $errori[] = 'richiesta';

if ($errori) {
    rispondi($vuoleJson, 422, 'non-valido', $KO);
}

$oggetti = [
    'intervento' => 'Nuova richiesta di intervento dal sito',
    'materiali' => 'Richiesta materiali dal sito',
    'collaborazione' => 'Proposta di collaborazione dal sito',
    'candidatura' => 'Nuova candidatura dal sito',
    'informazioni' => 'Richiesta informazioni dal sito',
];
$oggetto = $oggetti[$modulo] ?? 'Nuovo messaggio dal sito';
if ($riferimento !== '') $oggetto .= ' (' . mb_substr($riferimento, 0, 80) . ')';

$righe = [
    'Modulo: ' . $modulo,
    'Nome: ' . $nome,
    'Email: ' . ($email !== '' ? $email : '-'),
    'Telefono: ' . ($telefono !== '' ? $telefono : '-'),
];
if ($impresa !== '') $righe[] = 'Impresa o studio: ' . $impresa;
if ($riferimento !== '') $righe[] = 'Riferimento: ' . $riferimento;
$righe[] = 'Pagina: ' . $ritorno;
$righe[] = '';
$righe[] = 'Richiesta:';
$righe[] = $richiesta;
$righe[] = '';
$righe[] = 'Inviato: ' . date('d/m/Y H:i');
$corpo = implode("\n", $righe);

$headers = [
    'MIME-Version: 1.0',
    'From: Sito Impresa Tedeschi <' . $MITTENTE . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
];
if ($email !== '') $headers[] = 'Reply-To: ' . $email;

$inviata = @mail($DESTINATARIO, '=?UTF-8?B?' . base64_encode($oggetto) . '?=', $corpo, implode("\r\n", $headers), '-f' . $MITTENTE);

if ($inviata) {
    rispondi($vuoleJson, 200, 'ok', '/grazie/');
}
rispondi($vuoleJson, 500, 'errore-invio', $KO);
