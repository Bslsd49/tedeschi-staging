/* Original, deterministic PBR surface maps. No fetched textures or image assets. */
const palette = [
  { enamel: [189, 139, 47], wear: 1.00, rough: .56, coat: .18, coatRough: .38 },
  { enamel: [217, 154, 36], wear: .60, rough: .47, coat: .27, coatRough: .30 },
  { enamel: [235, 169, 28], wear: .32, rough: .42, coat: .35, coatRough: .25 },
  { enamel: [245, 186, 31], wear: .13, rough: .36, coat: .44, coatRough: .21 }
];
const sharedByThree = new WeakMap();
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = v => Math.max(0, Math.min(1, v));
function smooth(a, b, x) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}
function randomSequence(seed) {
  let n = seed >>> 0;
  return () => { n = (Math.imul(1664525, n) + 1013904223) >>> 0; return n / 4294967296; };
}
// Periodic value noise. All four edges meet when a UV chart wraps around a cylinder.
function noiseField(cols, rows, random) {
  const grid = new Float32Array(cols * rows);
  for (let i = 0; i < grid.length; i++) grid[i] = random();
  return (u, v) => {
    const x = u * cols, y = v * rows, ix = Math.floor(x), iy = Math.floor(y);
    const x0 = (ix % cols + cols) % cols, y0 = (iy % rows + rows) % rows;
    const x1 = (x0 + 1) % cols, y1 = (y0 + 1) % rows;
    const fx = x - ix, fy = y - iy, sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    return lerp(lerp(grid[y0 * cols + x0], grid[y0 * cols + x1], sx),
                lerp(grid[y1 * cols + x0], grid[y1 * cols + x1], sx), sy);
  };
}
function raster(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  return {canvas, ctx, pixels: ctx.createImageData(size, size)};
}
function texture(THREE, rasterData, name, color) {
  rasterData.ctx.putImageData(rasterData.pixels, 0, 0);
  const map = new THREE.CanvasTexture(rasterData.canvas);
  map.name = name;
  map.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  return map;
}
function mapPair(THREE, color, surface, name) {
  const albedo = texture(THREE, color, name + ' · colore', true);
  // Three reads red for bump, green for roughness and blue for metalness.
  const packed = texture(THREE, surface, name + ' · altezza / ruvidità / metallo', false);
  return {map: albedo, bumpMap: packed, roughnessMap: packed, metalnessMap: packed};
}
function putRGB(buffer, i, r, g, b) {
  buffer[i] = r; buffer[i + 1] = g; buffer[i + 2] = b; buffer[i + 3] = 255;
}
function wearIslands(size, wear, random) {
  const mask = new Float32Array(size * size);
  const count = Math.round(1 + 11 * wear);
  for (let k = 0; k < count; k++) {
    const cx = random() * size, cy = random() * size;
    const rx = (.012 + random() * .077) * (.43 + wear * .83) * size;
    const ry = rx * (.27 + random() * .74);
    const angle = random() * Math.PI, co = Math.cos(angle), si = Math.sin(angle);
    const extent = Math.ceil(1.65 * Math.max(rx, ry));
    for (let y = Math.floor(cy - extent); y <= cy + extent; y++) {
      for (let x = Math.floor(cx - extent); x <= cx + extent; x++) {
        const dx = x - cx, dy = y - cy;
        const a = (dx * co + dy * si) / rx, b = (-dx * si + dy * co) / ry;
        const field = 1.5 - Math.sqrt(a * a + b * b);
        if (field <= 0) continue;
        const i = ((y + size) % size) * size + ((x + size) % size);
        mask[i] = Math.max(mask[i], field);
      }
    }
  }
  return mask;
}
function abrasionLines(size, wear, random) {
  const mask = new Uint8Array(size * size);
  // Local parallel scratches come from the same physical contact, in short groups.
  for (let k = 0; k < 3 + wear * 16; k++) {
    const x0 = random() * size, y0 = random() * size, angle = (random() - .5) * .92;
    const co = Math.cos(angle), si = Math.sin(angle), count = 1 + Math.floor(random() * 4);
    for (let j = 0; j < count; j++) {
      const offset = j * (.0015 + random() * .0045) * size;
      const start = random() * size * .016, length = (.012 + random() * .095) * size;
      const opacity = Math.round((.28 + random() * .65) * 255);
      for (let along = 0; along < length; along += .67) {
        if (random() < .05) continue;
        const x = Math.floor(x0 + co * (along + start) - si * offset + size) % size;
        const y = Math.floor(y0 + si * (along + start) + co * offset + size) % size;
        const index = y * size + x;
        mask[index] = Math.max(mask[index], opacity * smooth(0, .12, along / length) * smooth(0, .12, 1 - along / length));
      }
    }
  }
  return mask;
}
function paintedSteel(THREE, era, size) {
  const spec = palette[era], age = spec.wear, base = spec.enamel;
  const random = randomSequence(196600 + era * 9701);
  const macro = noiseField(5, 4, random), medium = noiseField(17, 19, random);
  const fleck = noiseField(52, 54, random), trickles = noiseField(48, 3, random);
  const damage = wearIslands(size, age, random), scratches = abrasionLines(size, age, random);
  const strata = noiseField(83, 18, random);
  const color = raster(size), surface = raster(size), cc = color.pixels.data, sc = surface.pixels.data;
  for (let y = 0, p = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++, p++) {
      const u = x / size, a = macro(u, v), b = medium(u, v), d = fleck(u, v), grain = random();
      const edgeDistance = Math.min(u, v, 1 - u, 1 - v);
      const seam = (1 - smooth(0, .018, edgeDistance)) * smooth(.55, .91, b) * age;
      // Preserve broad intact sheets; incomplete clusters build up around the damage.
      const locality = .33 + .67 * Math.max(smooth(.02, .37, damage[p]), smooth(.59, .85, a) * .82);
      const scar = damage[p] + ((b - .5) * .84 + (d - .5) * .69 + (grain - .5) * .13) * (.55 + .45 * age) * locality + seam - (1 - age) * .12;
      const chip = smooth(.47, .55, scar), halo = smooth(.29, .47, scar);
      const rim = (1 - smooth(.03, .13, Math.abs(scar - .56))) * smooth(.41, .68, b * .48 + d * .52);
      const bare = clamp((1 - age) * .56 + smooth(.67, .81, d * .62 + grain * .13 + a * .25) * (.43 + .10 * (1 - age)) + rim * .60);
      const abrasion = scratches[p] / 255 * (.4 + .43 * age);
      const lamina = strata(u + .016 * b, v + .034 * d);
      const seamlet = (1 - smooth(.012, .058, Math.abs(lamina - .48))) * smooth(.38, .65, b);
      const oxide = clamp(.50 + (b - .5) * 1.22 + (d - .5) * .75 + (grain - .5) * .38 + (lamina - .5) * .26 - seamlet * .18);
      const stain = smooth(.69, .96, trickles(u, v)) * age * .075;
      const fade = (a - .5) * (.035 + .10 * age) + (b - .5) * .025 + (grain - .5) * .012 - stain;
      const patina = halo * (.12 + .14 * age);
      let rr = base[0] * (1 + fade) * (1 - patina);
      let gg = base[1] * (1 + fade) * (1 - patina * 1.18);
      let bb = base[2] * (1 + fade) * (1 - patina * .42) + (a - .3) * age * 7;
      rr = lerp(rr, lerp(50 + 103 * oxide, 138, bare), chip);
      gg = lerp(gg, lerp(37 + 45 * oxide, 133, bare), chip);
      bb = lerp(bb, lerp(27 + 21 * oxide, 118, bare), chip);
      putRGB(cc, p * 4, lerp(rr, 136, abrasion), lerp(gg, 133, abrasion), lerp(bb, 115, abrasion));
      const rough = lerp(lerp(spec.rough + (a - .5) * .12 + (grain - .5) * .036, .83 - bare * .52, chip), .49, abrasion);
      const metal = lerp(lerp(.035, .12 + bare * .85, chip), .73, abrasion);
      const height = .60 + (d - .5) * .025 + (grain - .5) * .025 - chip * (.17 - oxide * .07 + seamlet * .02) - abrasion * .055;
      putRGB(sc, p * 4, height * 255, rough * 255, metal * 255);
    }
  }
  return mapPair(THREE, color, surface, 'Smaltatura ' + [1960, 1980, 2000, 2026][era]);
}
function mechanicalFinish(THREE, name, size, mode) {
  const rs = randomSequence(481516 + mode * 779);
  const broad = noiseField(8, 9, rs), fleck = noiseField(39, 33, rs), streak = noiseField(105, 3, rs);
  const color = raster(size), surface = raster(size), cc = color.pixels.data, sc = surface.pixels.data;
  for (let y = 0, i = 0; y < size; y++) for (let x = 0; x < size; x++, i += 4) {
    const u = x / size, v = y / size, a = broad(u, v), b = fleck(u, v), grain = rs();
    let r, g, blue, rough, metal, height;
    if (mode === 0) { // Greased cast steel, rubbed shiny on the outer wear surfaces.
      const polish = smooth(.40, .84, a * .70 + b * .30), lift = 47 * polish + 13 * b + 7 * grain;
      r = 53 + lift; g = 48 + lift; blue = 40 + lift;
      rough = .79 - .39 * polish + (b - .5) * .07; metal = .52 + polish * .42;
      height = .43 + b * .12 + grain * .057;
    } else if (mode === 1) { // Extremely fine axial grind lines along hydraulic piston rods.
      const line = streak(u, v), lift = (line - .5) * 7 + (grain - .5) * 2;
      r = 225 + lift; g = 228 + lift; blue = 228 + lift;
      rough = .126 + line * .047 + a * .024; metal = .99; height = .49 + line * .020;
    } else { // Porous layered oxide, deep brown underneath a finer orange surface.
      const oxidation = clamp(.04 + a * .49 + b * .34 + grain * .12);
      r = 48 + oxidation * 94; g = 30 + oxidation * 42; blue = 22 + oxidation * 20;
      rough = .76 + oxidation * .19; metal = .17 + (1 - oxidation) * .14;
      height = .34 + a * .16 + b * .16 + grain * .105;
    }
    putRGB(cc, i, r, g, blue); putRGB(sc, i, height * 255, rough * 255, metal * 255);
  }
  return mapPair(THREE, color, surface, name);
}
function materialMapCache(THREE) {
  let cache = sharedByThree.get(THREE);
  if (!cache) {
    const mobile = typeof matchMedia === 'function' && matchMedia('(max-width: 760px)').matches;
    cache = {paint: [], size: mobile ? 256 : 512,
      cast: mechanicalFinish(THREE, 'Acciaio colato', 256, 0),
      polished: mechanicalFinish(THREE, 'Cromatura rettificata', 128, 1),
      oxide: mechanicalFinish(THREE, 'Ossido di ferro', 256, 2)};
    sharedByThree.set(THREE, cache);
  }
  return cache;
}
export function createMaterials(THREE, eraIndex) {
  const era = Math.max(0, Math.min(3, eraIndex | 0)), spec = palette[era], cache = materialMapCache(THREE);
  const enamel = cache.paint[era] || (cache.paint[era] = paintedSteel(THREE, era, cache.size));
  const make = (name, props) => new THREE.MeshStandardMaterial({name, ...props});
  const coated = (name, props) => new THREE.MeshPhysicalMaterial({name, ...props});
  const paintProps = {...enamel, roughness: 1, metalness: 1, bumpScale: .022 + spec.wear * .037,
    clearcoat: spec.coat, clearcoatRoughness: spec.coatRough, envMapIntensity: .95};
  const steel = {...cache.cast, roughness: 1, metalness: 1, bumpScale: .025, envMapIntensity: 1.05};
  const paint = coated('Smalto carrozzeria', paintProps);
  const paintDark = coated('Smalto telaio', {...paintProps, color: era === 0 ? 0xc3ad8b : 0xcaba92});
  // The windows use tinted alpha and a reflected clear coat. No transmission prepass,
  // no scene copies, and no dependence on back-face order for instanced pane batches.
  const glass = coated('Vetro cabina', {color: era === 0 ? 0x27302a : 0x26332e,
    transparent: true, opacity: era === 0 ? .48 : .46, depthWrite: false,
    roughness: .075 + spec.wear * .035, metalness: .025, clearcoat: .38, clearcoatRoughness: .055,
    ior: 1.48, specularIntensity: .78, envMapIntensity: .77});
  return {paint, paintDark, glass,
    edge: make('Bordi esposti', {...steel, color: 0xe9e6de, roughness: .79, bumpScale: .012}),
    iron: make('Ghisa scura', {...steel, color: era === 0 ? 0x9e8773 : 0xa8a4a0}),
    track: make('Pattini e ruote', {...steel, roughness: era === 0 ? 1 : .94}),
    rubber: make('Gomma e guaine', {color: 0x242727, roughness: .80, metalness: .018, envMapIntensity: .48}),
    chrome: make('Stelo cromato', {...cache.polished, roughness: 1, metalness: 1, bumpScale: .002, envMapIntensity: 1.18}),
    bolt: make('Bulloneria zincata', {...cache.polished, color: era === 0 ? 0x928875 : 0xb1b2a7, roughnessMap: null, roughness: .31, metalness: .90, bumpScale: .0015}),
    interior: make('Sedile e interno cabina', {color: era === 0 ? 0x42392d : 0x343b3d, roughness: .85, metalness: .02}),
    rust: make('Ossido del ferro', {...cache.oxide, roughness: 1, metalness: 1, bumpScale: .055}),
    black: make('Acciaio verniciato grafite', {color: 0x2c3030, roughness: .47, metalness: .46}),
    light: coated('Vetro proiettore', {color: 0xe7e1c9, emissive: 0xddcfa4, emissiveIntensity: .17, roughness: .22, metalness: .20, clearcoat: .9, clearcoatRoughness: .11}),
    red: coated('Lente di segnalazione', {color: 0x982a18, roughness: .29, metalness: .13, clearcoat: .74, clearcoatRoughness: .19}),
    pale: make('Dettagli avorio', {color: 0xe1d7b5, roughness: .58, metalness: .17})
  };
}
