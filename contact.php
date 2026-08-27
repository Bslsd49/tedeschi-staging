<?php
/**
 * contact.php — gestore form Impresa Tedeschi (hosting classico con PHP + mail()).
 * Config: tenere allineato $DESTINATARIO con site.json → email.
 */

declare(strict_types=1);

$DESTINATARIO = 'info@impresatedeschi.it';
$MITTENTE_DOMINIO = $_SERVER['SERVER_NAME'] ?? 'impresatedeschi.it';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /', true, 303);
    exit;
}

// --- anti-spam: honeypot + time-trap
if (!empty($_POST['_hp'] ?? '')) {
    header('Location: /grazie/', true, 303); // bot: finta accettazione
    exit;
}
$t = (int) ($_POST['_t'] ?? 0);
if ($t > 0 && (time() - $t) < 3) {
    header('Location: /grazie/', true, 303);
    exit;
}

function pulisci(string $v): string
{
    $v = trim($v);
    $v = str_replace(["\r", "\n", '%0a', '%0d'], ' ', $v); // no header injection
    return mb_substr(strip_tags($v), 0, 2000);
}

$modulo = pulisci((string) ($_POST['modulo'] ?? 'contatto'));
$nome = pulisci((string) ($_POST['nome'] ?? ''));
$email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL) ?: '';
$consenso = ($_POST['consenso'] ?? '') !== '';

// --- validazione minima server-side per modulo
$errori = [];
if ($nome === '') $errori[] = 'nome';
if ($email === '') $errori[] = 'email';
if (!$consenso) $errori[] = 'consenso';

$campiTesto = [];
foreach ($_POST as $chiave => $valore) {
    if (in_array($chiave, ['_hp', '_t'], true)) continue;
    if (is_string($valore)) $campiTesto[$chiave] = pulisci($valore);
}
if ($modulo === 'intervento') {
    foreach (['telefono', 'descrizione'] as $obbligatorio) {
        if (($campiTesto[$obbligatorio] ?? '') === '') $errori[] = $obbligatorio;
    }
}
if ($modulo === 'informazioni' && ($campiTesto['messaggio'] ?? '') === '') {
    $errori[] = 'messaggio';
}

if ($errori) {
    $ritorno = pulisci((string) ($_POST['_ritorno'] ?? '/contatti/'));
    if (!str_starts_with($ritorno, '/')) $ritorno = '/contatti/';
    header('Location: ' . $ritorno . '?errore=' . rawurlencode(implode(',', $errori)), true, 303);
    exit;
}

$oggetti = [
    'intervento' => 'Nuova richiesta di intervento dal sito',
    'informazioni' => 'Richiesta informazioni dal sito',
    'candidatura' => 'Nuova candidatura dal sito',
];
$oggetto = $oggetti[$modulo] ?? 'Nuovo messaggio dal sito';

$righe = ["Modulo: {$modulo}", ''];
foreach ($campiTesto as $chiave => $valore) {
    if (in_array($chiave, ['modulo', '_ritorno'], true)) continue;
    $righe[] = ucfirst($chiave) . ': ' . $valore;
}
$righe[] = '';
$righe[] = 'Inviato: ' . date('d/m/Y H:i');
$corpo = implode("\n", $righe);

$headers = [
    'From: sito@' . $MITTENTE_DOMINIO,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$inviata = @mail($DESTINATARIO, '=?UTF-8?B?' . base64_encode($oggetto) . '?=', $corpo, implode("\r\n", $headers));

header('Location: /grazie/' . ($inviata ? '' : '?stato=errore-invio'), true, 303);
exit;
