<?php
/**
 * contact.php — gestore moduli Impresa Tedeschi (hosting classico con PHP + mail()).
 *
 * Campi attesi (macros.njk → moduloContatto): modulo, nome*, email, telefono, impresa,
 * richiesta*, riferimento, _ritorno, _t, _hp. Regola: almeno un recapito tra email e telefono.
 * Moduli: intervento, materiali, collaborazione, candidatura (più informazioni/contatto per compatibilità).
 * Nessun consenso generico nel modulo: c'è solo il rimando alla Privacy Policy.
 *
 * Risposta:
 *  - con "Accept: application/json" (invio da main.js) JSON con codice HTTP vero (200 / 422 / 500),
 *    così il sito non mostra mai un falso "inviato";
 *  - senza JavaScript redirect 303 verso /grazie/ (o ?stato=errore-invio) oppure, se i dati non
 *    sono validi, di nuovo sul modulo con ?errore=campi.
 * Config: tenere $DESTINATARIO allineato con src/_data/site.json → email.
 */

declare(strict_types=1);

$DESTINATARIO = 'info@impresatedeschi.it';
$dominio = strtolower(preg_replace('/^www\./i', '', (string) ($_SERVER['SERVER_NAME'] ?? 'impresatedeschi.it')));
if (!preg_match('/^[a-z0-9.-]+$/', $dominio)) $dominio = 'impresatedeschi.it';
$MITTENTE = 'sito@' . $dominio;

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

function pulisci(string $v, int $max = 2000): string
{
    $v = str_replace("\0", '', $v);
    $v = trim(strip_tags($v));
    return mb_substr($v, 0, $max);
}
function riga(string $v): string
{
    return trim(str_replace(["\r", "\n", '%0a', '%0d', '%0A', '%0D'], ' ', $v)); // niente header injection
}

// ritorno sempre locale (mai //host o URL assoluti)
$ritorno = riga(pulisci((string) ($_POST['_ritorno'] ?? '/contatti/'), 200));
if ($ritorno === '' || $ritorno[0] !== '/' || str_starts_with($ritorno, '//') || str_contains($ritorno, '\\')) {
    $ritorno = '/contatti/';
}
$ritorno = explode('?', explode('#', $ritorno)[0])[0];

// anti-spam: honeypot e time-trap (finta accettazione, i bot non imparano nulla)
if (!empty($_POST['_hp'] ?? '')) {
    rispondi($vuoleJson, 200, 'ok', '/grazie/');
}
$t = (int) ($_POST['_t'] ?? 0);
$trascorsi = time() - $t;
if ($t > 0 && $trascorsi >= 0 && $trascorsi < 3) { // t nel futuro = orologio del visitatore sballato, non è un bot
    rispondi($vuoleJson, 200, 'ok', '/grazie/');
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
    rispondi($vuoleJson, 422, 'non-valido', $ritorno . '?errore=' . rawurlencode(implode(',', array_unique($errori))));
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
rispondi($vuoleJson, 500, 'errore-invio', '/grazie/?stato=errore-invio');
