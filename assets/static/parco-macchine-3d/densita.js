// Densità di pixel della vista 3D (giro 20/11, quarto passaggio). Funzioni pure, senza three, così si
// provano con node (scratchpad giro2011/M1/densita-test.mjs).
//
// Il costo del fotogramma su una scheda integrata cresce con i pixel (Intel UHD: 4,3 ms a densità 1, 7 a
// 1,5, 11 a 2). Per le schede integrate NOTE la vista usa al massimo INTEGRATED_BUDGET pixel fisici;
// per tutte le altre il tetto è PIXEL_BUDGET. In ogni caso mai meno della densità 1 (o del dpr dello
// schermo se è più basso): un monitor 4K resta nitido anche oltre il tetto. Cambiano solo i pixel del
// buffer: ombre, antialiasing e materiali restano gli stessi.
export const PIXEL_BUDGET = 2.2e6;       // circa 1716×1282 pixel fisici
export const INTEGRATED_BUDGET = 0.8e6;  // circa densità 1,25 a 1440×900 (vista 857×619)
export const MAX_DENSITY = 1.65, MAX_DENSITY_SMALL = 1.35;

// Stringa del renderer (WEBGL_debug_renderer_info) → ramo. Si elencano le schede da ridurre, non le
// dedicate: una scheda sconosciuta o mascherata resta al bilancio pieno (la resa conta più di una
// supposizione; il tetto PIXEL_BUDGET la protegge comunque).
//
//   stringa (esempi)                                              ramo
//   "Intel(R) UHD Graphics 620/770", "Intel(R) HD Graphics 520"  ridotto  integrata Intel
//   "Intel(R) Iris(R) Xe Graphics", "Intel Iris Plus Graphics"    ridotto  integrata Intel (anche Mac Intel)
//   "Intel(R) Graphics", "Intel(R) Arc(TM) Graphics" (senza A/B)  ridotto  integrata Intel (Meteor/Lunar Lake)
//   "Intel(R) Arc(TM) A750 / B580 Graphics"                       pieno    dedicata
//   "AMD Radeon(TM) Graphics", "AMD Radeon Graphics"              ridotto  integrata AMD
//   "Radeon(TM) Vega 8 Graphics", "AMD Radeon(TM) 780M"           ridotto  integrata AMD
//   "AMD Radeon RX 6600", "Radeon Pro"                            pieno    dedicata
//   "NVIDIA GeForce RTX/GTX …", "Quadro"                          pieno    dedicata
//   "ANGLE Metal Renderer: Apple M1/M2/M3…", "Apple GPU"          pieno    Apple Silicon (e Safari)
//   "Mali-G78", "Adreno (TM) 740", "PowerVR …"                    ridotto  telefoni e tablet
//   "SwiftShader", "llvmpipe", "Microsoft Basic Render"           ridotto  disegno senza GPU
//   "" (estensione assente), stringa ignota o mascherata          pieno
const REDUCED = [
  /Intel(\(R\))?[^,]*\b(UHD|HD) Graphics/i,
  /Intel(\(R\))?[^,]*\bIris\b/i,
  /Intel(\(R\))?[^,]*\bXe Graphics/i,
  /Intel(\(R\))? Graphics\b/i,
  /Intel(\(R\))? Arc(\(TM\))? Graphics/i,          // Arc integrata: senza sigla A/B
  /Radeon(\(TM\))? (Graphics|Vega)\b/i,
  /Radeon(\(TM\))? \d{3}M\b/i,                     // 680M, 760M, 780M integrate
  /\bMali\b/i, /\bAdreno\b/i, /\bPowerVR\b/i,
  /SwiftShader|llvmpipe|Basic Render/i,
];
export function gpuTier(renderer) {
  const name = String(renderer || '');
  return REDUCED.some((r) => r.test(name)) ? 'ridotto' : 'pieno';
}

// densità per una vista w×h (pixel CSS) su uno schermo dpr; small = vista da telefono
export function densityFor({ dpr = 1, w, h, small = false, tier = 'pieno' }) {
  const top = Math.min(dpr || 1, small ? MAX_DENSITY_SMALL : MAX_DENSITY);
  const budget = tier === 'ridotto' ? INTEGRATED_BUDGET : PIXEL_BUDGET;
  const floor = Math.min(1, dpr || 1);
  return Math.max(floor, Math.min(top, Math.sqrt(budget / Math.max(1, w * h))));
}
