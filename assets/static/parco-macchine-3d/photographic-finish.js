import {calibrations} from './finish-calibration.js';

// Finiture: i WebP di Mattia, con una variante a metà misura per i telefoni (la vista è larga
// al massimo ~600 px fisici). Profondità: la sua mappa RGBA a 32 bit ricodificata come distanza
// lineare a 16 bit (R alto, G basso, 8–24 unità) in WebP senza perdita, vedi tools/parco-3d/media.py.
// Le macchine stanno fra 10,1 e 16,9 unità: il passo è 0,00024 unità, cento volte sotto la
// tolleranza di 0,042 usata qui sotto.
const years = ['1960', '1980', '2000', '2026'];
const surfaces = years.map(y => [() => 'media/finitura-' + y + (innerWidth <= 760 ? '-960' : '') + '.webp', 'media/profondita-' + y + '.webp']);

// Projection is evaluated in the assembled coordinate system of each part.
// The model's animated transform cannot slide the photographic patina along it.
const vertexDeclarations = `
attribute vec4 restRow0, restRow1, restRow2;
uniform mat4 finishProjector;
uniform vec3 finishEye;
varying vec4 vFinishClip;
varying vec2 vFinishView;
`;

const vertexProjection = `
vec4 localPoint = vec4(transformed, 1.);
vec3 restPoint = vec3(dot(restRow0,localPoint),dot(restRow1,localPoint),dot(restRow2,localPoint));
vFinishClip = finishProjector * vec4(restPoint, 1.);
mat3 restBasis = mat3(
  normalize(vec3(restRow0.x,restRow1.x,restRow2.x)),
  normalize(vec3(restRow0.y,restRow1.y,restRow2.y)),
  normalize(vec3(restRow0.z,restRow1.z,restRow2.z)));
mat4 liveModel = modelMatrix * instanceMatrix;
mat3 liveBasis = mat3(normalize(liveModel[0].xyz),normalize(liveModel[1].xyz),normalize(liveModel[2].xyz));
vec3 referenceRay = normalize(finishEye - restPoint) * restBasis;
vec3 livePoint = (liveModel * localPoint).xyz;
vec3 liveRay = normalize(cameraPosition - livePoint) * liveBasis;
vFinishView = vec2(dot(referenceRay,liveRay),length(livePoint-restPoint));
`;

const fragmentDeclarations = `
uniform sampler2D finishPhoto, finishDepth;
uniform vec2 finishPlanes;
uniform float finishAvailable, finishExposure, finishClearPane;
varying vec4 vFinishClip;
varying vec2 vFinishView;

// The machine target is scene-linear. Invert its final ACES display transform
// once, so a photographed grey card retains the measured display luminance.
vec3 finishToScene(vec3 displayLinear) {
  const mat3 toScenePrimaries = mat3(
    vec3(1.764741,-.147028,-.036337), vec3(-.675778,1.160252,-.162436), vec3(-.088963,-.013224,1.198773));
  const mat3 fromDisplayPrimaries = mat3(
    vec3(.643038,.059269,.005962), vec3(.311187,.931436,.063929), vec3(.045775,.009295,.930118));
  vec3 y = clamp(fromDisplayPrimaries * displayLinear, vec3(0.), vec3(.995));
  vec3 a = 1.-.983729*y, b = .0245786-.432951*y, c = -.000090537-.238081*y;
  vec3 x = (sqrt(max(b*b-4.*a*c,vec3(0.)))-b)/(2.*a);
  return (toScenePrimaries*x)*(.6/finishExposure);
}
`;

const fragmentProjection = `
if(finishAvailable > .5 && vFinishView.x > .46) {
  vec2 projectedUV = .5 * (vFinishClip.xy/vFinishClip.w + 1.);
  if(all(greaterThanEqual(projectedUV,vec2(0.))) && all(lessThanEqual(projectedUV,vec2(1.)))) {
    // This is the depth of the actual visible outer assembly, including glass.
    // Internal faces that emerge during disassembly keep their own lighting.
    vec2 packedDistance = texture2D(finishDepth, projectedUV).rg;
    float savedDistance = 8. + 16. * dot(packedDistance, vec2(65280., 255.)) / 65535.;
    float depthError = abs(savedDistance - vFinishClip.w);
    float surfaceHit = 1. - smoothstep(.042,.135,depthError);
    if(surfaceHit > .001) {
      vec4 surface = texture2D(finishPhoto, projectedUV);
      float weight = surface.a * surfaceHit * smoothstep(.46,.943,vFinishView.x);
      // Photo RGB already includes transmission and reflections of a seated pane.
      // Reveal its actual transparency once the pane leaves the seat behind.
      weight *= 1. - finishClearPane * smoothstep(.025,.25,vFinishView.y);
      diffuseColor.a = mix(diffuseColor.a,1.,weight);
      outgoingLight = mix(outgoingLight,finishToScene(surface.rgb),weight*.992);
    }
  }
}
`;

export function createPhotographicFinish(T, modelIndex, exposure) {
  const c=calibrations[modelIndex];
  const uniforms={
    finishProjector:{value:new T.Matrix4().fromArray(c.matrix)},
    finishEye:{value:new T.Vector3().fromArray(c.camera)},
    finishPlanes:{value:new T.Vector2(c.near,c.far)},
    finishExposure:{value:exposure},
    finishAvailable:{value:0},
    finishPhoto:{value:null}, finishDepth:{value:null}
  };
  return {
    configure(shader,material) {
      Object.assign(shader.uniforms,uniforms);
      shader.uniforms.finishClearPane={value:material.transparent&&material.opacity<1 ? 1 : 0};
      shader.vertexShader=vertexDeclarations+shader.vertexShader.replace(
        '#include <project_vertex>', vertexProjection+'\n#include <project_vertex>');
      shader.fragmentShader=fragmentDeclarations+shader.fragmentShader.replace(
        '#include <opaque_fragment>', fragmentProjection+'\n#include <opaque_fragment>');
    },
    async load() {
      const loader=new T.TextureLoader();
      const [photoURL,depthURL]=surfaces[modelIndex];
      const [photo,depth]=await Promise.all([loader.loadAsync(photoURL()),loader.loadAsync(depthURL)]);
      photo.colorSpace=T.SRGBColorSpace;
      photo.anisotropy=4;
      depth.colorSpace=T.NoColorSpace;
      depth.generateMipmaps=false;
      depth.magFilter=depth.minFilter=T.NearestFilter;
      uniforms.finishPhoto.value=photo;
      uniforms.finishDepth.value=depth;
      uniforms.finishAvailable.value=1;
      return [photo,depth];
    }
  };
}

// Interleaving uses one small GPU upload when a compacted batch changes order.
export function createRestBuffer(T,machine,indices,geometry) {
  const positions=new Float32Array(indices.length*12);
  const transform=new T.Matrix4();
  indices.forEach((partIndex,slot)=>{
    const p=machine.parts[partIndex];
    const e=transform.compose(p.position,p.quaternion,p.scale).elements;
    const at=slot*12;
    for(let row=0;row<3;row++)for(let col=0;col<4;col++)
      positions[at+4*row+col]=e[row+col*4];
  });
  const buffer=new T.InstancedInterleavedBuffer(positions.slice(),12).setUsage(T.DynamicDrawUsage);
  for(let row=0;row<3;row++)
    geometry.setAttribute('restRow'+row,new T.InterleavedBufferAttribute(buffer,4,row*4));
  return {buffer,positions};
}
