import {createGroundContact} from './ground-contact.js';
import {createLightProbes} from './lighting.js';
import {createPhotographicFinish,createRestBuffer} from './photographic-finish.js';
// Depth of field is applied to the machine pass only. The photographs and type
// live in a different layer and remain sharp throughout the change of era.
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
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.35 : 1.65));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .89;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate=false;
  renderer.domElement.setAttribute('aria-hidden','true');
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
  // All mechanical pieces sharing a primitive and finish are submitted together.
  // Separate batch geometries hold the per-instance fade without leaking it into other materials.
  function applyFinish(material,finish) {
    material.onBeforeCompile=(s)=>{
      s.vertexShader='attribute vec2 surfaceOffset;\n'+s.vertexShader;
      s.vertexShader=s.vertexShader.replace('#include <uv_vertex>',`#include <uv_vertex>
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
    material.customProgramCacheKey=()=> 'tedeschi-photographic-part-v2';
  }
  const models=machines.map((machine,modelIndex)=>{
    const finish=createPhotographicFinish(T,modelIndex,renderer.toneMappingExposure);
    // Several machines share the same bare steel. Its photographic appearance
    // belongs to one assembly, while the underlying PBR maps remain shared.
    const finishMaterials=new Map();
    const groups=new Map(),refs=new Array(machine.parts.length);
    machine.parts.forEach((p,i)=>{
      const k=p.geometry.uuid+'|'+p.material.uuid;
      let group=groups.get(k);if(!group){group={p,indices:[]};groups.set(k,group);}group.indices.push(i);
    });
    const root=new T.Group();root.visible=false;scene.add(root);
    const batches=[];
    groups.forEach(({p,indices})=>{
      // Reuse the immutable vertex/index buffers across material batches.
      const geometry=new T.InstancedBufferGeometry();
      geometry.setIndex(p.geometry.index);
      for(const [name,attribute] of Object.entries(p.geometry.attributes))geometry.setAttribute(name,attribute);
      geometry.setDrawRange(p.geometry.drawRange.start,p.geometry.drawRange.count);
      // A bolted joint retains its surface pattern while moving. Repeated panels
      // and tread shoes sample different places in the same physical finish.
      const offsets=new Float32Array(indices.length*2);
      indices.forEach((id,i)=>{
        const a=(id+1)*.61803398875,b=(id+1)*.41421356237;
        offsets[2*i]=a-Math.floor(a);offsets[2*i+1]=b-Math.floor(b);
      });
      const surfaceOffset=new T.InstancedBufferAttribute(offsets.slice(),2).setUsage(T.DynamicDrawUsage);
      geometry.setAttribute('surfaceOffset',surfaceOffset);
      const rest=createRestBuffer(T,machine,indices,geometry);
      let material=finishMaterials.get(p.material);
      if(!material){
        material=p.material.clone();
        applyFinish(material,finish);
        finishMaterials.set(p.material,material);
      }
      const mesh=new T.InstancedMesh(geometry,material,indices.length);
      mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
      mesh.frustumCulled=false;
      mesh.castShadow=!p.material.transparent;mesh.receiveShadow=!p.material.transparent;
      root.add(mesh);
      const batch={mesh,surfaceOffset,rest,live:0,identities:Int32Array.from(indices),poses:Array(indices.length),min:Infinity,max:-1,restMin:Infinity,restMax:-1};
      batches.push(batch);
      indices.forEach((partIndex,i)=>refs[partIndex]={batch,restOffset:12*i,u:offsets[2*i],v:offsets[2*i+1]});
    });
    return {root,refs,batches,finish};
  });
  performance.mark('r:batches');let yaw=0,elevation=0,orbitYaw=0,orbitElevation=0,distance=19;
  const focus=new T.Vector3(0,2.1,0);
  let viewW=0,viewH=0, first=0, second=0, phase=0;
  const motion=createTransition(T,machines,camera);performance.mark('r:transition');
  function writeVisible(mi,pi,matrix,opacity,stable=false){
    if(opacity<=.0001)return;
    const {batch,restOffset,u,v}=models[mi].refs[pi];
    const slot=batch.live++, changed=batch.identities[slot]!==pi;
    if(changed){
      batch.identities[slot]=pi;
      batch.surfaceOffset.setXY(slot,u,v);
      const rest=batch.rest;
      for(let j=0;j<12;j++)rest.buffer.array[slot*12+j]=rest.positions[restOffset+j];
      batch.restMin=Math.min(batch.restMin,slot);batch.restMax=Math.max(batch.restMax,slot);
    }
    if(!stable || changed || batch.poses[slot]!==matrix){
      batch.mesh.setMatrixAt(slot,matrix);
      batch.poses[slot]=stable?matrix:null;
      batch.min=Math.min(batch.min,slot);batch.max=slot;
    }
  }
  function writePart(mi,pi,matrix,opacity,blur,stable){
    writeVisible(mi,pi,matrix,opacity,stable);
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
  const target=machineTarget(4), lightTarget=machineTarget(0);
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
  let slowFrames=0,previousFrame=0,recoveryFrames=0,economy=false,settleTimer=0;
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
    // Panning an assembled machine changes the camera, not the instance matrices.
    if(seated>=0&&seated===lastSeated)return;
    lastSeated=seated;
    activeModels.length=0;
    for(let i=0;i<models.length;i++){
      if(i===first||i===second)activeModels.push(models[i]);
      else models[i].root.visible=false;
    }
    for(const m of activeModels)for(const b of m.batches){
      b.live=0;b.min=Infinity;b.max=-1;b.restMin=Infinity;b.restMax=-1;
    }
    motion.sample(first,second,phase,writePart,camera,true);
    for(const m of activeModels){
      m.root.visible=false;
      for(const b of m.batches){
        const mesh=b.mesh;
        mesh.visible=b.live>0;mesh.count=b.live;
        if(!mesh.visible)continue;
        m.root.visible=true;
        if(b.min<=b.max){
          const attr=mesh.instanceMatrix;
          attr.clearUpdateRanges();attr.addUpdateRange(b.min*16,(b.max-b.min+1)*16);attr.needsUpdate=true;
        }
        if(b.restMin<=b.restMax){
          const count=b.restMax-b.restMin+1;
          b.surfaceOffset.clearUpdateRanges();b.surfaceOffset.addUpdateRange(b.restMin*2,count*2);b.surfaceOffset.needsUpdate=true;
          const rest=b.rest.buffer;rest.clearUpdateRanges();rest.addUpdateRange(b.restMin*12,count*12);rest.needsUpdate=true;
        }
      }
    }
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
    const buffer=moving&&economy?lightTarget:target;
    uniforms.colorTex.value=buffer.texture;uniforms.depthTex.value=buffer.depthTexture;
    renderer.setRenderTarget(buffer);renderer.render(scene,camera);
    if(lensEnvelope>.001){renderer.setRenderTarget(blurTarget);renderer.render(blurScene,postCamera);}
    renderer.setRenderTarget(null);
    renderer.render(postScene,postCamera);
    renderer.autoClear=true;
  }
  function trackCadence(hint){
    // Only continuous input establishes a frame budget. Isolated seeks stay at
    // full quality, as do every assembled pose and all idle frames.
    clearTimeout(settleTimer);
    if(!hint){previousFrame=0;slowFrames=0;economy=false;return;}
    const now=performance.now(),dt=now-previousFrame;previousFrame=now;
    if(dt<5||dt>180){slowFrames=0;recoveryFrames=0;}
    else {
    slowFrames=dt>26?slowFrames+1:0;
    recoveryFrames=dt<19?recoveryFrames+1:0;
    if(slowFrames>=5)economy=true;
    if(recoveryFrames>=48)economy=false;
    }
    if(economy){
      settleTimer=setTimeout(()=>{economy=false;slowFrames=recoveryFrames=0;draw();},160);
    }
  }
  function resize(){
    const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
    if(w===viewW&&h===viewH)return;
    viewW=w;viewH=h;renderer.setSize(w,h,false);
    const pr=renderer.getPixelRatio(),pw=Math.round(w*pr),ph=Math.round(h*pr);
    target.setSize(pw,ph);
    lightTarget.setSize(Math.max(1,Math.round(pw*.76)),Math.max(1,Math.round(ph*.76)));
    blurTarget.setSize(Math.max(1,Math.ceil(pw*.5)),Math.max(1,Math.ceil(ph*.5)));
    uniforms.pixel.value.set(1/pw,1/ph);uniforms.maxRadius.value=small?9*pr:15*pr;
    camera.aspect=w/h;camera.updateProjectionMatrix();frameRevision++;setCamera();draw();
  }
  new ResizeObserver(resize).observe(host);
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
    if(all)for(const m of models){saved.push([m.root,m.root.visible]);m.root.visible=true;for(const b of m.batches){saved.push([b.mesh,b.mesh.visible]);b.mesh.visible=true;}}
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
  function prepareTransitions(){return compileAll(true);}
  // primo fotogramma: shader dell'epoca di partenza compilati in parallelo, poi il disegno
  async function warm(){
    lastSeated=-2;updateParts();setCamera();
    await compileAll(false);
    warmed=true;lastSeated=-2;draw();
  }
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
  return {canvas:renderer.domElement,bounds:worldBounds,view:renderer,draw,prepareTransitions,warm,finishReady,firstFinish,groundReady:contact.ready,
    show(a,b,t){
      if(a===first&&b===second&&t===phase)return;
      trackCadence(a!==b&&t>0&&t<1);
      first=a;second=b;phase=t;scene.environment=lightProbes[t<.5?a:b].texture;setCamera();draw();},
    setReducedMotion(value){reduceOrbit=Boolean(value);},
    reset(animate=false){
      if(animate&&!reduceOrbit){pointCamera(0,0);return;}
      if(orbitFrame)cancelAnimationFrame(orbitFrame);
      orbitFrame=lastOrbit=goalYaw=goalElevation=orbitYaw=orbitElevation=0;
      frameRevision++;setCamera();draw();
    }
  };
}
