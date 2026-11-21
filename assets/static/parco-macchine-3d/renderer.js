import {createGroundContact} from './ground-contact.js';
import {createLightProbes} from './lighting.js';
import {createPhotographicFinish,createPartTexture,partTextureSize} from './photographic-finish.js';
import {gpuTier,densityFor} from './densita.js';
// Depth of field is applied to the machine pass only. The photographs and type
// live in a different layer and remain sharp throughout the change of era.
// Densità di pixel della vista: tetti, pavimento e riconoscimento della scheda stanno in densita.js
// (giro 20/11, terzo e quarto passaggio). Una misura del fotogramma al caricamento è stata provata e
// scartata: con la GPU occupata dal caricamento la stessa Intel dava da 3,7 a 20 ms e la RTX fino a 6.
export function createMachineView(T, host, machines, createTransition, lightSamples, options={}) {
  const onOrbit=options.onOrbit||(()=>{});
  const small = innerWidth <= 760;
  const renderer = new T.WebGLRenderer({alpha:true, antialias:false, powerPreference:'high-performance', premultipliedAlpha:true});
  renderer.setClearColor(0,0);
  // In produzione three non rilegge il log di ogni shader: quella lettura obbliga il browser a compilare
  // in modo sincrono (1,4 s di blocco misurati su D3D11). Gli shader si compilano in parallelo con
  // compileAsync prima del primo fotogramma (warm) e prima dei passaggi (prepareTransitions).
  renderer.debug.checkShaderErrors=false;
  let warmed=false;
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .89;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate=false;
  renderer.domElement.setAttribute('aria-hidden','true');
  // ramo della scheda (densita.js): integrate note a bilancio ridotto, tutte le altre al pieno
  const gpuName=(()=>{
    try{const gl=renderer.getContext(),info=gl.getExtension('WEBGL_debug_renderer_info');
      return info?String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)):'';}catch{return '';}
  })();
  const tier=gpuTier(gpuName);
  const quality={tier,integrated:tier==='ridotto',pixelRatio:null};
  host.appendChild(renderer.domElement);
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(30,1,.16,110);
  performance.mark('r:gl');const lightProbes=createLightProbes(T,renderer,lightSamples);performance.mark('r:probes');
  scene.environment=lightProbes[0].texture;
  const hemi=new T.HemisphereLight(0xdce8f4,0x92764e,.53);scene.add(hemi);
  const key=new T.DirectionalLight(0xffebca,2.42);key.position.set(-7,10,4.5);key.castShadow=true;
  const shadowSize=small?768:1536;
  key.shadow.mapSize.set(shadowSize,shadowSize);
  Object.assign(key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.3,far:38});
  key.shadow.camera.updateProjectionMatrix();key.shadow.bias=-.00019;key.shadow.normalBias=.014;key.shadow.radius=3;
  scene.add(key);scene.add(key.target);
  const rim=new T.DirectionalLight(0xd4e4f0,1.15);rim.position.set(4,4,-7);scene.add(rim);
  const floor=new T.Mesh(new T.PlaneGeometry(120,120),new T.ShadowMaterial({color:0x171710,opacity:.31,depthWrite:false}));
  floor.rotation.x=-Math.PI/2;floor.position.y=-.018;floor.receiveShadow=true;floor.renderOrder=-2;scene.add(floor);
  const contact=createGroundContact(T,scene);
  // Una sola chiamata di disegno per materiale e per macchina (giro 20/11). Prima ogni coppia
  // geometria-materiale era un InstancedMesh a sé: 350 maglie per la macchina del 1960, 700 chiamate con
  // le ombre, e su una GPU integrata il costo del fotogramma andava quasi tutto in quelle chiamate
  // (misurato: dimezzando le maglie il fotogramma scendeva del 40%). Ora le geometrie dei pezzi con lo
  // stesso materiale stanno in un solo buffer; ogni vertice porta l'indice del suo pezzo (batchId) e la
  // posa di ogni pezzo sta in una texture di matrici condivisa da tutti i materiali della macchina, lo
  // schema di BatchedMesh di three (stessi shader, ombre comprese). Ogni pezzo resta indipendente.
  // I pezzi fuori scena si saltano con il disegno multiplo (WEBGL_multi_draw); senza l'estensione si
  // disegna tutto il buffer e un pezzo nascosto ha matrice nulla (nessun pixel).
  function applyFinish(material,finish) {
    material.onBeforeCompile=(s)=>{
      s.vertexShader=s.vertexShader.replace('#include <uv_vertex>',`#include <uv_vertex>
        vec2 surfaceOffset=partData(3).xy;
        #ifdef USE_MAP
          vMapUv+=surfaceOffset;
        #endif
        #ifdef USE_BUMPMAP
          vBumpMapUv+=surfaceOffset;
        #endif
        #ifdef USE_ROUGHNESSMAP
          vRoughnessMapUv+=surfaceOffset;
        #endif
        #ifdef USE_METALNESSMAP
          vMetalnessMapUv+=surfaceOffset;
        #endif`);
      finish.configure(s,material);
    };
    material.customProgramCacheKey=()=> 'tedeschi-photographic-part-v3';
  }
  const multiDraw=renderer.extensions.has('WEBGL_multi_draw');
  // geometria unita dei pezzi di un materiale: posizione, normale, uv e indice del pezzo
  function mergeParts(machine,indices){
    let vertices=0,elements=0;
    for(const i of indices){
      const g=machine.parts[i].geometry,count=g.attributes.position.count;
      vertices+=count;elements+=g.index?Math.min(g.index.count-g.drawRange.start,g.drawRange.count):count;
    }
    const position=new Float32Array(vertices*3),normal=new Float32Array(vertices*3),uv=new Float32Array(vertices*2);
    const batchId=new Float32Array(vertices),index=new Uint32Array(elements);
    const starts=new Int32Array(indices.length),counts=new Int32Array(indices.length);
    let v=0,e=0;
    indices.forEach((partIndex,k)=>{
      const g=machine.parts[partIndex].geometry,a=g.attributes,count=a.position.count;
      position.set(a.position.array.subarray(0,count*3),v*3);
      if(a.normal)normal.set(a.normal.array.subarray(0,count*3),v*3);
      if(a.uv)uv.set(a.uv.array.subarray(0,count*2),v*2);
      batchId.fill(partIndex,v,v+count);
      starts[k]=e;
      if(g.index){
        const from=g.drawRange.start,to=Math.min(g.index.count,from+g.drawRange.count),src=g.index.array;
        for(let j=from;j<to;j++)index[e++]=src[j]+v;
      }else for(let j=0;j<count;j++)index[e++]=v+j;
      counts[k]=e-starts[k];
      v+=count;
    });
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.BufferAttribute(position,3));
    geometry.setAttribute('normal',new T.BufferAttribute(normal,3));
    geometry.setAttribute('uv',new T.BufferAttribute(uv,2));
    geometry.setAttribute('batchId',new T.BufferAttribute(batchId,1));
    geometry.setIndex(new T.BufferAttribute(index,1));
    return {geometry,starts,counts,elements};
  }
  const models=machines.map((machine,modelIndex)=>{
    const n=machine.parts.length,size=partTextureSize(n);
    const poses=new T.DataTexture(new Float32Array(size*size*4),size,size,T.RGBAFormat,T.FloatType);
    const finish=createPhotographicFinish(T,modelIndex,renderer.toneMappingExposure,createPartTexture(T,machine));
    // Several machines share the same bare steel. Its photographic appearance
    // belongs to one assembly, while the underlying PBR maps remain shared.
    const byMaterial=new Map();
    machine.parts.forEach((p,i)=>{
      let list=byMaterial.get(p.material);if(!list)byMaterial.set(p.material,list=[]);list.push(i);
    });
    const root=new T.Group();root.visible=false;scene.add(root);
    const groups=[],groupOf=new Int32Array(n);
    byMaterial.forEach((indices,source)=>{
      const {geometry,starts,counts,elements}=mergeParts(machine,indices);
      const material=source.clone();
      applyFinish(material,finish);
      const mesh=new T.Mesh(geometry,material);
      // per three è un BatchedMesh: stessi shader (USE_BATCHING) e disegno multiplo, liste nostre
      mesh.isBatchedMesh=true;mesh._matricesTexture=poses;
      mesh._multiDrawStarts=new Int32Array(indices.length);mesh._multiDrawCounts=new Int32Array(indices.length);mesh._multiDrawCount=0;
      mesh.frustumCulled=false;mesh.matrixAutoUpdate=false;
      mesh.castShadow=!source.transparent;mesh.receiveShadow=!source.transparent;
      root.add(mesh);
      const group={mesh,parts:Int32Array.from(indices),starts,counts,elements,changed:true};
      indices.forEach(i=>{groupOf[i]=groups.length;});
      groups.push(group);
    });
    return {root,groups,groupOf,poses,data:poses.image.data,shown:new Uint8Array(n),seen:new Uint32Array(n),pose:new Array(n),frame:0,dirty:false,finish};
  });
  performance.mark('r:batches');let yaw=0,elevation=0,orbitYaw=0,orbitElevation=0,distance=19;
  const focus=new T.Vector3(0,2.1,0);
  let viewW=0,viewH=0,viewDpr=0, first=0, second=0, phase=0;
  const motion=createTransition(T,machines,camera);performance.mark('r:transition');
  // Firma di motion.sample: (macchina, pezzo, matrice, opacità, sfocatura, posa stabile). La sfocatura
  // per pezzo non serve (la profondità di campo è un passaggio di schermo). Una posa «stabile» (riposo,
  // pezzo staccato in attesa) è sempre lo stesso oggetto Matrix4: se il pezzo era già lì non si riscrive.
  function writePart(mi,pi,matrix,opacity,blur,stable=false){
    if(opacity<=.0001)return;
    const m=models[mi];
    m.seen[pi]=m.frame;
    if(stable&&m.shown[pi]&&m.pose[pi]===matrix)return;
    matrix.toArray(m.data,pi*16);
    m.pose[pi]=stable?matrix:null;
    if(!m.shown[pi]){m.shown[pi]=1;m.groups[m.groupOf[pi]].changed=true;}
    m.dirty=true;
  }
  // Dopo motion.sample: i pezzi non scritti in questo fotogramma escono di scena; per ogni materiale si
  // rifà la lista dei tratti da disegnare (pezzi visibili contigui fusi in un tratto solo).
  function settleModel(m){
    for(let pi=0;pi<m.seen.length;pi++){
      if(m.shown[pi]&&m.seen[pi]!==m.frame){
        m.shown[pi]=0;m.pose[pi]=null;m.groups[m.groupOf[pi]].changed=true;
        if(!multiDraw){m.data.fill(0,pi*16,pi*16+16);m.dirty=true;}
      }
    }
    let any=false;
    for(const g of m.groups){
      if(g.changed){
        g.changed=false;
        const mesh=g.mesh,starts=mesh._multiDrawStarts,counts=mesh._multiDrawCounts;
        let k=0,open=-1,end=0,live=0;
        for(let j=0;j<g.parts.length;j++){
          if(!m.shown[g.parts[j]]){open=-1;continue;}
          live++;
          if(!multiDraw)continue;
          if(open>=0&&g.starts[j]===end){counts[open]+=g.counts[j];}
          else{open=k++;starts[open]=g.starts[j]*4;counts[open]=g.counts[j];}
          end=g.starts[j]+g.counts[j];
        }
        if(!multiDraw&&live){starts[0]=0;counts[0]=g.elements;k=1;}
        mesh._multiDrawCount=live?k:0;
        mesh.visible=live>0;
      }
      any=any||g.mesh.visible;
    }
    m.root.visible=any;
    if(m.dirty){m.poses.needsUpdate=true;m.dirty=false;}
  }
  function machineTarget(samples){
    const buffer=new T.WebGLRenderTarget(1,1,{
      type:renderer.extensions.has('EXT_color_buffer_float')?T.HalfFloatType:T.UnsignedByteType,
      format:T.RGBAFormat,depthBuffer:true,stencilBuffer:false
    });
    buffer.depthTexture=new T.DepthTexture(1,1,T.UnsignedIntType);
    if(renderer.capabilities.isWebGL2){
      buffer.samples=Math.min(samples,renderer.capabilities.maxSamples);
      buffer.texture.generateMipmaps=true;buffer.texture.minFilter=T.LinearMipmapLinearFilter;
    }
    return buffer;
  }
  const target=machineTarget(4);
  const blurTarget=new T.WebGLRenderTarget(1,1,{type:target.texture.type,depthBuffer:false,stencilBuffer:false});
  const postScene=new T.Scene(),postCamera=new T.OrthographicCamera(-1,1,1,-1,0,1);
  const uniforms={colorTex:{value:target.texture},depthTex:{value:target.depthTexture},blurTex:{value:blurTarget.texture},
    pixel:{value:new T.Vector2()},focal:{value:distance},nearZ:{value:camera.near},farZ:{value:camera.far},strength:{value:0},maxRadius:{value:16}};
  const vertexShader='varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}';
  const lensPrelude=`varying vec2 vUv; uniform sampler2D colorTex,depthTex,blurTex; uniform vec2 pixel;
    uniform float focal,nearZ,farZ,strength,maxRadius;
    float viewDepth(float depth){return nearZ*farZ/(farZ-(farZ-nearZ)*depth);}
    float circle(float depth){return smoothstep(.075,.70,(focal-viewDepth(depth))/focal)*maxRadius*strength;}`;
  // Sample the edge-aware near field at half resolution. The final composite
  // keeps sharply focused surfaces, windows and fine wires at native resolution.
  const blurMat=new T.ShaderMaterial({uniforms,vertexShader,depthTest:false,depthWrite:false,toneMapped:false,
    fragmentShader:lensPrelude+`
      void main(){
        // Gather only defocused foreground radiance. Sampling radius uniformly
        // gives thin wires and thread heads samples even at small blur radii.
        // The disk-area weight preserves coverage at a silhouette against sky.
        vec4 foreground=vec4(0.);
        float aperture=maxRadius*strength;
        for(int i=0;i<24;i++){
          float tap=float(i)+.5;
          float r=aperture*tap/24.;
          float angle=tap*2.39996323;
          vec2 uv=clamp(vUv+vec2(cos(angle),sin(angle))*r*pixel,0.,1.);
          float coc=circle(texture2D(depthTex,uv).r);
          float area=max(1.5,coc);
          float contribution=smoothstep(.55,2.6,coc)*(1.-smoothstep(area-1.,area+1.,r));
          float weight=(2.*r*aperture/24.)/(area*area);
          float lod=clamp(log2(1.+r*.20),0.,2.8);
          foreground+=texture2D(colorTex,uv,lod)*(weight*contribution);
        }
        gl_FragColor=foreground/max(1.,foreground.a);
      }`});
  const postMat=new T.ShaderMaterial({uniforms,depthTest:false,depthWrite:false,transparent:true,premultipliedAlpha:true,toneMapped:true,vertexShader,
    fragmentShader:lensPrelude+`
    void main(){
      float rawDepth=texture2D(depthTex,vUv).r;
      vec4 col=texture2D(colorTex,vUv);
      if(strength>.001){
        vec4 nearLayer=texture2D(blurTex,vUv);
        float nearField=smoothstep(.55,2.6,circle(rawDepth));
        col=nearLayer+col*(1.-max(nearField,nearLayer.a));
      }
      // Contact occlusion at small scales gives depth to wheels, grilles and mounts.
      if(rawDepth<.9999 && col.a>.35){
        float here=nearZ*farZ/(farZ-(farZ-nearZ)*rawDepth);float occ=0.;
        for(int j=0;j<6;j++){
          float ang=float(j)*2.39996323, rr=2.+float(j)*2.25;
          float d=texture2D(depthTex,clamp(vUv+vec2(cos(ang),sin(ang))*pixel*rr,0.,1.)).r;
          float there=nearZ*farZ/(farZ-(farZ-nearZ)*d);
          float diff=here-there;
          occ+=smoothstep(.022,.16,diff)*(1.-smoothstep(.38,.98,diff));
        }
        col.rgb*=1.-.044*occ;
      }
      if(col.a>.0001)col.rgb/=col.a;
      gl_FragColor=col;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      gl_FragColor.rgb*=gl_FragColor.a;
    }`});
  const quad=new T.Mesh(new T.PlaneGeometry(2,2),postMat);postScene.add(quad);
  const blurScene=new T.Scene();blurScene.add(new T.Mesh(quad.geometry,blurMat));
  // Tight per-part support points, not a single eight-corner box around a
  // long angled boom. Keep actual vertices for large irregular components;
  // the corners of tiny hardware add at most a sub-pixel safety margin.
  const framing=machines.map(machine=>{
    const bounds=new T.Box3(),v=new T.Vector3(),mat=new T.Matrix4(),extent=new T.Vector3();
    const pts=[],seen=new Set();
    function push(){
      v.applyMatrix4(mat);bounds.expandByPoint(v);
      // Merge duplicated flat-shading and bevel vertices to 2 mm precision.
      const key=(Math.round(v.x*500)+16384)*1073741824+(Math.round(v.y*500)+16384)*32768+Math.round(v.z*500)+16384;
      if(!seen.has(key)){seen.add(key);pts.push(v.x,v.y,v.z);}
    }
    for(const p of machine.parts){
      const g=p.geometry;if(!g.boundingBox)g.computeBoundingBox();
      const box=g.boundingBox;box.getSize(extent).multiply(p.scale);
      mat.compose(p.position,p.quaternion,p.scale);
      if(Math.max(extent.x,extent.y,extent.z)>.72){
        const position=g.attributes.position;
        for(let j=0;j<position.count;j++){v.fromBufferAttribute(position,j);push();}
      }else{
        for(let j=0;j<8;j++){v.set(j&1?box.max.x:box.min.x,j&2?box.max.y:box.min.y,j&4?box.max.z:box.min.z);push();}
      }
    }
    return {bounds,points:Float32Array.from(pts),center:bounds.getCenter(new T.Vector3()),focus:new T.Vector3(),distance:1,yaw:0,elevation:0};
  });
  const worldBounds=framing.map(f=>f.bounds);performance.mark('r:framing');
  // Operator-side views leave the open bucket, tracks and cab visible together.
  const sideViews=[.18,-.40,-.755,-.42],heights=[.035,.105,.038,.108];
  const frameFill=[.955,.920,.924,.923];
  let frameRevision=0;
  function frameModel(index){
      const f=framing[index];
      if(f.revision===frameRevision)return f;
      f.revision=frameRevision;
      const halfField=Math.tan(camera.fov*Math.PI/360);
      const ky=halfField*frameFill[index],kx=ky*camera.aspect;
      f.yaw=(sideViews[index]??0)+orbitYaw;f.elevation=T.MathUtils.clamp((heights[index]??.10)+orbitElevation,-.025,.66);
      const sy=Math.sin(f.yaw),cy=Math.cos(f.yaw),se=Math.sin(f.elevation),ce=Math.cos(f.elevation);
      let xhi=-Infinity,xlo=Infinity,yhi=-Infinity,ylo=Infinity;
      const p=f.points,c=f.center;
      for(let i=0;i<p.length;i+=3){
        const x=p[i]-c.x,y=p[i+1]-c.y,z=p[i+2]-c.z;
        const flat=sy*x+cy*z,back=ce*flat+se*y;
        const right=cy*x-sy*z,up=ce*y-se*flat;
        xhi=Math.max(xhi,right+kx*back);xlo=Math.min(xlo,right-kx*back);
        yhi=Math.max(yhi,up+ky*back);ylo=Math.min(ylo,up-ky*back);
      }
      // Solve the left/right and top/bottom perspective-frustum inequalities.
      const ox=(xhi+xlo)*.5,oy=(yhi+ylo)*.5;
      f.distance=Math.max((xhi-xlo)/(2*kx),(yhi-ylo)/(2*ky))+.03;
      f.focus.set(c.x+ox*cy-oy*sy*se,c.y+oy*ce,c.z-ox*sy-oy*cy*se);
      return f;
  }
  function setCamera(){
    const blend=T.MathUtils.smootherstep(phase,0,1),a=frameModel(first),b=frameModel(second);
    // A small retreat opens space for the exploded assemblies. Both camera
    // velocity and the offset reach zero where a machine seats in its bearings.
    const opening=first===second?0:16*phase*phase*(1-phase)*(1-phase);
    focus.copy(a.focus).lerp(b.focus,blend);
    distance=T.MathUtils.lerp(a.distance,b.distance,blend)*(1+.067*opening);
    yaw=T.MathUtils.lerp(a.yaw,b.yaw,blend)+.033*opening;
    elevation=T.MathUtils.lerp(a.elevation,b.elevation,blend)+.027*opening;
    camera.position.set(focus.x+Math.sin(yaw)*Math.cos(elevation)*distance,focus.y+Math.sin(elevation)*distance,focus.z+Math.cos(yaw)*Math.cos(elevation)*distance);
    camera.lookAt(focus);camera.updateMatrixWorld();uniforms.focal.value=distance;
  }
  let lastShadow=NaN, lastShadowYaw=NaN, lastShadowElevation=NaN;
  let lastSeated=-1;
  const activeModels=[];
  function updateParts(){
    const seated=first===second||phase===0?first:phase===1?second:-1;
    // Panning an assembled machine changes the camera, not the part matrices.
    if(seated>=0&&seated===lastSeated)return;
    lastSeated=seated;
    activeModels.length=0;
    for(let i=0;i<models.length;i++){
      if(i===first||i===second){activeModels.push(models[i]);models[i].frame++;}
      else models[i].root.visible=false;
    }
    motion.sample(first,second,phase,writePart,camera,true);
    for(const m of activeModels)settleModel(m);
  }
  function draw(){
    if(!warmed)return;
    updateParts();
    const pose=first+(second-first)*phase;
    const needsShadow=!Number.isFinite(lastShadow) || Math.abs(lastShadow-pose)>1/120 ||
      (Number.isInteger(pose)&&pose!==lastShadow) || (!Number.isInteger(pose)&&(yaw!==lastShadowYaw||elevation!==lastShadowElevation));
    if(needsShadow){renderer.shadowMap.needsUpdate=true;lastShadow=pose;lastShadowYaw=yaw;lastShadowElevation=elevation;}
    const moving=first!==second&&phase>.002&&phase<.998;
    const lensEnvelope=moving?T.MathUtils.smootherstep(phase,.22,.40)*(1-T.MathUtils.smootherstep(phase,.62,.78)):0;
    uniforms.strength.value=lensEnvelope;
    const focusPull=moving?T.MathUtils.smootherstep(phase,.28,.46)*(1-T.MathUtils.smootherstep(phase,.55,.72)):0;
    uniforms.focal.value=distance*(1-.47*focusPull);
    // Airborne hardware casts a softer, lighter shadow than the seated tracks.
    const cast=contact.update(first,second,phase);
    floor.material.opacity=cast*(.22-.10*lensEnvelope);
    floor.visible=floor.material.opacity>.0001;
    // Una sola qualità, sempre la stessa (giro 20/11). Prima, dopo cinque fotogrammi lenti la scena
    // passava a un buffer ridotto (76%, senza antialiasing) e tornava piena 160 ms dopo l'ultimo
    // movimento: due cambi di nitidezza visibili come «scatti» (misurati nello screencast) senza un
    // guadagno di tempo misurabile su Intel UHD.
    // Le mipmap del colore restano generate a ogni fotogramma: three alloca i livelli solo se
    // generateMipmaps è vero quando il buffer nasce (anche dopo ogni ridimensionamento), e spegnerle
    // a lente chiusa lasciava il buffer incompleto, cioè un fotogramma nero all'accendersi della lente.
    const lens=lensEnvelope>.001;
    renderer.setRenderTarget(target);renderer.render(scene,camera);
    if(lens){renderer.setRenderTarget(blurTarget);renderer.render(blurScene,postCamera);}
    renderer.setRenderTarget(null);
    renderer.render(postScene,postCamera);
  }
  function resize(){
    const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
    const dpr=devicePixelRatio||1;
    if(w===viewW&&h===viewH&&dpr===viewDpr)return;
    viewW=w;viewH=h;viewDpr=dpr;
    // densità decisa qui, al ridimensionamento o al cambio di schermo, mai durante la corsa (densita.js)
    renderer.setPixelRatio(densityFor({dpr,w,h,small,tier}));
    quality.pixelRatio=+renderer.getPixelRatio().toFixed(3);
    renderer.setSize(w,h,false);
    const pr=renderer.getPixelRatio(),pw=Math.round(w*pr),ph=Math.round(h*pr);
    target.setSize(pw,ph);
    blurTarget.setSize(Math.max(1,Math.ceil(pw*.5)),Math.max(1,Math.ceil(ph*.5)));
    uniforms.pixel.value.set(1/pw,1/ph);uniforms.maxRadius.value=small?9*pr:15*pr;
    camera.aspect=w/h;camera.updateProjectionMatrix();frameRevision++;setCamera();draw();
  }
  new ResizeObserver(resize).observe(host);
  // Finestra portata su uno schermo con un'altra densità senza cambiare misura: il ResizeObserver non
  // scatta. Si ascolta la densità attuale (la domanda si rifà a ogni cambio); se il cambio arriva a corsa
  // in atto lo si applica a scena ferma, mai a metà di un movimento.
  let densityQuery=null,densityPending=false,lastShowAt=0;
  function watchDensity(){
    densityQuery?.removeEventListener?.('change',onDensity);
    try{densityQuery=matchMedia('(resolution: '+(devicePixelRatio||1)+'dppx)');densityQuery.addEventListener('change',onDensity);}catch{densityQuery=null;}
  }
  function onDensity(){
    watchDensity();
    densityPending=true;applyDensityWhenStill();
  }
  function applyDensityWhenStill(){
    if(!densityPending)return;
    // «ferma» = nessun fotogramma nuovo da 300 ms (non la fase: a riposo lo scroll lascia la scena a 1,001
    // e una condizione sulla fase rimandava il ricalcolo per sempre, misurato 20/11)
    if(performance.now()-lastShowAt<300){setTimeout(applyDensityWhenStill,200);return;}
    densityPending=false;resize();
  }
  watchDensity();
  // rete di sicurezza: l'evento change della query non arriva in ogni caso (misurato 20/11: con il DPR
  // emulato da CDP non scatta né nella pagina né nell'iframe). Un confronto al secondo, una lettura sola.
  setInterval(()=>{if(!densityPending&&viewW&&(devicePixelRatio||1)!==viewDpr)onDensity();},1000);
  // Contesto WebGL perso (driver ripartito, scheda che si spegne): si chiede di riaverlo e, quando
  // torna, si rifanno le cose che vivono solo sulla GPU e non si ricaricano da sole. Three ricrea
  // programmi, buffer, texture (anche le matrici dei pezzi) e render target al primo disegno; le sonde
  // di luce (render target riempiti una volta) si rigenerano, ombre e pose si ricalcolano. I fondali sono
  // CSS e non sono toccati.
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();},false);
  renderer.domElement.addEventListener('webglcontextrestored',()=>{
    const fresh=createLightProbes(T,renderer,lightSamples);
    lightProbes.splice(0,lightProbes.length,...fresh);
    scene.environment=lightProbes[phase<.5?first:second].texture;
    for(const m of models)m.poses.needsUpdate=true;
    lastShadow=NaN;lastSeated=-2;viewW=0;resize();draw();
  },false);
  function rotate(dx,dy){
    orbitYaw=T.MathUtils.clamp(orbitYaw+dx,-1.15,1.15);orbitElevation=T.MathUtils.clamp(orbitElevation+dy,-.10,.52);
    frameRevision++;setCamera();draw();onOrbit(orbitYaw,orbitElevation);
  }
  let goalYaw=0,goalElevation=0,orbitFrame=0,lastOrbit=0;
  let reduceOrbit=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function orbitStep(now){
    orbitFrame=0;
    const dt=lastOrbit?Math.min(80,now-lastOrbit):16.7;
    const dx=goalYaw-orbitYaw,dy=goalElevation-orbitElevation;
    const settled=reduceOrbit||Math.max(Math.abs(dx),Math.abs(dy))<.0005;
    const gain=settled?1:-Math.expm1(-dt/(pointer!==null?39:95));
    rotate(gain*dx,gain*dy);
    lastOrbit=settled?0:now;
    if(!settled)orbitFrame=requestAnimationFrame(orbitStep);
  }
  function pointCamera(yaw,elevation){
    goalYaw=T.MathUtils.clamp(yaw,-1.15,1.15);
    goalElevation=T.MathUtils.clamp(elevation,-.10,.52);
    if(!orbitFrame)orbitFrame=requestAnimationFrame(orbitStep);
  }
  // Rotazione con inerzia: rilasciando il modello il giro prosegue per poco e si posa,
  // come una torretta che rallenta. Mai oltre i limiti dell'inquadratura.
  let pointer=null,lastX=0,lastY=0,velX=0,velY=0,lastMove=0;
  host.addEventListener('pointerdown',e=>{if(e.button!==0||pointer!==null)return;pointer=e.pointerId;lastX=e.clientX;lastY=e.clientY;velX=velY=0;lastMove=performance.now();host.setPointerCapture(e.pointerId);host.classList.add('dragging');});
  host.addEventListener('pointermove',e=>{if(e.pointerId!==pointer)return;
    const now=performance.now(),dt=Math.max(1,now-lastMove);lastMove=now;
    const dx=e.clientX-lastX,dy=e.clientY-lastY;
    velX=velX*.6+(dx/dt)*.4;velY=velY*.6+(dy/dt)*.4;
    pointCamera(goalYaw-dx*.005,goalElevation+dy*.003);lastX=e.clientX;lastY=e.clientY;});
  function endDrag(){pointer=null;host.classList.remove('dragging');}
  host.addEventListener('lostpointercapture',endDrag);host.addEventListener('pointercancel',endDrag);
  host.addEventListener('pointerup',e=>{if(host.hasPointerCapture(e.pointerId))host.releasePointerCapture(e.pointerId);
    if(!reduceOrbit&&performance.now()-lastMove<90&&Math.abs(velX)+Math.abs(velY)>.05)
      pointCamera(goalYaw-velX*.005*190,goalElevation+velY*.003*120);
    endDrag();});
  host.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();pointCamera(goalYaw+(e.key==='ArrowLeft'?-.09:.09),goalElevation);}});
  // Start shader compilation for the other eras before the first wheel gesture.
  // No preview frames are rendered and the displayed pose is left untouched.
  // compileAsync visita solo gli oggetti visibili: per preparare le altre epoche si accendono
  // per un attimo tutte le maglie (nessun fotogramma viene disegnato) e poi si rimette tutto com'era.
  function compileAll(all){
    const previous=renderer.getRenderTarget();
    const saved=[];
    if(all)for(const m of models){saved.push([m.root,m.root.visible]);m.root.visible=true;for(const g of m.groups){saved.push([g.mesh,g.mesh.visible]);g.mesh.visible=true;}}
    const pending=[];
    try {
      renderer.setRenderTarget(target);
      pending.push(renderer.compileAsync(scene,camera));
      renderer.setRenderTarget(blurTarget);
      pending.push(renderer.compileAsync(blurScene,postCamera));
      renderer.setRenderTarget(null);
      pending.push(renderer.compileAsync(postScene,postCamera));
    } finally {
      renderer.setRenderTarget(previous);
      for(const [o,v] of saved)o.visible=v;
    }
    return Promise.all(pending);
  }
  // compileAsync collega i programmi, ma con ANGLE su Direct3D (Chrome su Windows) la traduzione finale
  // degli shader, i buffer e le texture si preparano al primo disegno vero. Qui ogni epoca si disegna una
  // volta fuori schermo, tutta, montata, ombre comprese, un'epoca per fotogramma, a scena ferma: il quadro
  // a schermo non cambia (il prossimo disegno rifà buffer e ombre) e le pose si rimettono com'erano.
  function primeModel(index){
    const m=models[index],machine=machines[index];
    const saved=[[floor,floor.visible]],environment=scene.environment,data=m.data.slice();
    floor.visible=true; // l'ombra a terra si accende solo a metà passaggio: va preparata anche lei
    for(const other of models){saved.push([other.root,other.root.visible]);other.root.visible=other===m;}
    const lists=m.groups.map(g=>[g.mesh.visible,g.mesh._multiDrawCount,g.mesh._multiDrawStarts[0],g.mesh._multiDrawCounts[0]]);
    const matrix=new T.Matrix4();
    machine.parts.forEach((p,i)=>matrix.compose(p.position,p.quaternion,p.scale).toArray(m.data,i*16));
    for(const g of m.groups){g.mesh.visible=true;g.mesh._multiDrawCount=1;g.mesh._multiDrawStarts[0]=0;g.mesh._multiDrawCounts[0]=g.elements;}
    m.poses.needsUpdate=true;
    const previous=renderer.getRenderTarget();
    try{
      scene.environment=lightProbes[index].texture;
      renderer.shadowMap.needsUpdate=true;
      renderer.setRenderTarget(target);renderer.render(scene,camera);
      renderer.setRenderTarget(blurTarget);renderer.render(blurScene,postCamera);
    }finally{
      renderer.setRenderTarget(previous);scene.environment=environment;
      for(const [o,v] of saved)o.visible=v;
      m.groups.forEach((g,k)=>{[g.mesh.visible,g.mesh._multiDrawCount,g.mesh._multiDrawStarts[0],g.mesh._multiDrawCounts[0]]=lists[k];});
      m.data.set(data);m.poses.needsUpdate=true;
      lastShadow=NaN; // la mappa delle ombre ora contiene la prova: si rifà al prossimo disegno
    }
  }
  async function prepareTransitions(){
    await compileAll(true);
    for(let i=0;i<models.length;i++){
      await new Promise(requestAnimationFrame);
      primeModel(i);
    }
  }
  // primo fotogramma: shader dell'epoca di partenza compilati in parallelo, poi il disegno
  async function warm(){
    lastSeated=-2;updateParts();setCamera();
    await compileAll(false);
    warmed=true;lastSeated=-2;draw();
  }
  // Nella scena non si muove nessun oggetto: si muovono solo le istanze (matrici nei buffer) e la
  // camera, che three aggiorna da sé. Le matrici del grafo si calcolano una volta qui invece che
  // per ognuna delle ~700 maglie a ogni fotogramma (profilo su telefono emulato: ~3% del disegno).
  scene.updateMatrixWorld(true);
  scene.matrixWorldAutoUpdate=false;
  resize();performance.mark('r:primo-disegno');
  // L'epoca da cui si parte arriva per prima, le altre in fila in sottofondo; ogni texture
  // si carica sulla GPU appena arriva, così il primo passaggio non ha singhiozzi.
  const order=[options.first??0,0,1,2,3].filter((v,i,a)=>a.indexOf(v)===i);
  const loads=new Array(models.length);
  async function loadFinish(index){
    try {
      const textures=await models[index].finish.load();
      for(const t of textures)renderer.initTexture(t);
      if(index===first||index===second){lastSeated=-2;draw();}
      return true;
    } catch {
      return false;
    }
  }
  loads[order[0]]=loadFinish(order[0]);
  const firstFinish=loads[order[0]];
  let chain=firstFinish;
  for(const index of order.slice(1))chain=loads[index]=chain.then(()=>loadFinish(index));
  const finishReady=Promise.all(loads);
  // Rettangolo della macchina a riposo sullo schermo (coordinate della finestra), dai punti di
  // inquadratura della macchina in vista: serve alla pagina ospite per allineare il segnaposto alla
  // scena prima della dissolvenza (parco-3d.js), così le due macchine coincidono e non si sdoppiano.
  function machineRect(){
    const f=framing[first],p=f.points,v=new T.Vector3(),r=host.getBoundingClientRect();
    let l=Infinity,t=Infinity,rr=-Infinity,b=-Infinity;
    camera.updateMatrixWorld();
    for(let i=0;i<p.length;i+=3){
      v.set(p[i],p[i+1],p[i+2]).project(camera);
      const x=(v.x+1)/2*r.width,y=(1-v.y)/2*r.height;
      if(x<l)l=x;if(x>rr)rr=x;if(y<t)t=y;if(y>b)b=y;
    }
    return {left:r.left+l,top:r.top+t,right:r.left+rr,bottom:r.top+b};
  }
  return {quality,machineRect,canvas:renderer.domElement,bounds:worldBounds,view:renderer,draw,prepareTransitions,warm,finishReady,firstFinish,groundReady:contact.ready,
    show(a,b,t){
      if(a===first&&b===second&&t===phase)return;
      lastShowAt=performance.now();first=a;second=b;phase=t;scene.environment=lightProbes[t<.5?a:b].texture;setCamera();draw();},
    setReducedMotion(value){reduceOrbit=Boolean(value);},
    reset(animate=false){
      if(animate&&!reduceOrbit){pointCamera(0,0);return;}
      if(orbitFrame)cancelAnimationFrame(orbitFrame);
      orbitFrame=lastOrbit=goalYaw=goalElevation=orbitYaw=orbitElevation=0;
      frameRevision++;setCamera();draw();
    }
  };
}
