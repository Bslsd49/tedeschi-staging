// Fasi, curve e tempi della corsa fra due epoche: l'unico posto dove si decidono (giro 20/11).
// «Avanzamento» è la posizione nella corsa (0-3, guidata dallo scroll, dai tasti o da Riproduci);
// «fase» è il punto della coreografia di Mattia dentro un passaggio (0-1). Fra le due c'è RITMO.

// Inseguimento dello scroll: costante di tempo dell'avanzamento che insegue la pagina (ms).
export const SEGUI_MS = 78;
// Oltre questa distanza (epoche) l'avanzamento salta invece di inseguire (ancore, ritorni).
export const SALTO_EPOCHE = 1.6;
// Un passaggio di una sola epoca dopo un clic (Riproduci, frecce): la durata scelta da Mattia.
export const PASSAGGIO_MS = 4600;
// Tendina del fondale: parte a fase .33 e dura .38, inclinata come i tagli del sito (LAMA punti
// percentuali fra bordo alto e basso), con una corsa finale oltre il bordo (USCITA) perché il filo
// giallo esca intero.
export const TENDINA_INIZIO = .33, TENDINA_DURATA = .38, LAMA = 16, USCITA = 2;

// curva dei tagli del sito (--ease-lama, cubic-bezier(.7,0,.2,1)), risolta in x
export function easeLama(x) {
  if (x <= 0) return 0; if (x >= 1) return 1;
  const p1x = .7, p1y = 0, p2x = .2, p2y = 1;
  const cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx;
  let t = x;
  for (let i = 0; i < 6; i++) {
    const fx = ((ax * t + bx) * t + cx) * t - x, d = (3 * ax * t + 2 * bx) * t + cx;
    if (Math.abs(fx) < 1e-5 || !d) break; t -= fx / d;
  }
  t = Math.max(0, Math.min(1, t));
  const cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by;
  return ((ay * t + by) * t + cy) * t;
}

// RITMO: quanto della coreografia corrisponde a ogni tratto di scroll. Misurato sulla scena (differenza
// fra immagini consecutive a passo fisso, media delle tre transizioni): il movimento visibile si
// concentra attorno a fase .38 e .61 (le lamiere grandi che passano davanti all'obiettivo), dove un
// piccolo scroll produceva un salto 3,2 volte la media. Qui lo scroll si distribuisce in proporzione
// alla radice di quella velocità: dove la scena corre, lo stesso scroll porta meno avanti, dove è quasi
// ferma porta più avanti. Picco ridotto a 2,2 volte la media. Fase a metà scroll ~.507 (il cambio dei
// testi resta a metà). Valori della fase ogni 5% di scroll; curva cubica monotona (C1), stessa
// pendenza ai due capi, quindi continua anche attraversando un'epoca.
const RITMO = [0, .0967, .1580, .2112, .2785, .3284, .3624, .3918, .4221, .4588, .5069,
  .5511, .5843, .6124, .6395, .6697, .7104, .7794, .8390, .9023, 1];
const PASSI = RITMO.length - 1;
const TANGENTI = (() => {
  // Fritsch-Carlson: tangenti che non creano oscillazioni (la fase non torna mai indietro)
  const h = 1 / PASSI, d = RITMO.slice(1).map((v, i) => (v - RITMO[i]) / h), m = new Array(RITMO.length);
  m[0] = d[0]; m[PASSI] = d[PASSI - 1];
  for (let i = 1; i < PASSI; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < PASSI; i++) {
    if (d[i] === 0) { m[i] = m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const t = 3 / Math.sqrt(s); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
  }
  // capi uguali: l'uscita da un passaggio e l'entrata nel successivo hanno la stessa velocità
  m[0] = m[PASSI] = (m[0] + m[PASSI]) / 2;
  return m;
})();
export function fase(s) {
  if (s <= 0) return 0; if (s >= 1) return 1;
  const x = s * PASSI, i = Math.min(PASSI - 1, Math.floor(x)), t = x - i, h = 1 / PASSI;
  const t2 = t * t, t3 = t2 * t;
  return (2 * t3 - 3 * t2 + 1) * RITMO[i] + (t3 - 2 * t2 + t) * h * TANGENTI[i]
    + (-2 * t3 + 3 * t2) * RITMO[i + 1] + (t3 - t2) * h * TANGENTI[i + 1];
}
