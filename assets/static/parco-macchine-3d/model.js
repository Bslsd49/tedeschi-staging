import {hydraulicUpper} from './hydraulics.js';
import {buildCableExcavator} from './historical.js';
/**
 * Mechanical assemblies for four illustrative excavators.
 * Y is up and the visible operator side is +Z. The cable excavator faces +X,
 * the three hydraulic excavators face −X as in the photographic references.
 */
export function createMachine(THREE, eraIndex, materials) {
  const era = Math.max(0, Math.min(3, Math.round(eraIndex)));
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const Y = V(0, 1, 0);
  const Z = V(0, 0, 1);
  const identity = new THREE.Quaternion();
  const Zaxis = new THREE.Quaternion().setFromUnitVectors(Y, Z);
  const qz = a => new THREE.Quaternion().setFromAxisAngle(Z, a);
  const parts = [];
  const shared = new Map();
  const cache = (id, builder) => {
    if (!shared.has(id)) shared.set(id, builder());
    return shared.get(id);
  };
  const boxGeo = cache('box', () => new THREE.BoxGeometry(1, 1, 1));
  const round = segments => cache('cyl' + segments, () => new THREE.CylinderGeometry(1, 1, 1, segments, 1, false));
  const append = (geo, mat, pos, quat, scale, group) => {
    const material = typeof mat === 'string' ? materials[mat] : mat;
    if (!material) throw new Error('Missing excavator material: ' + mat);
    parts.push({geometry:geo, material, position:pos, quaternion:quat, scale, group});
  };
  const box = (x,y,z,w,h,d,mat,group,angle=0) =>
    append(boxGeo,mat,V(x,y,z),angle ? qz(angle) : identity,V(w,h,d),group);
  function rod(a,b,radius,mat,group,segs=12,width=radius) {
    const direction=b.clone().sub(a), length=direction.length();
    if (!length) return;
    const q=new THREE.Quaternion().setFromUnitVectors(Y,direction.divideScalar(length));
    append(round(segs),mat,a.clone().lerp(b,0.5),q,V(radius,length,width),group);
  }
  function bar(a,b,size,mat,group,depth=size) {
    const direction=b.clone().sub(a),length=direction.length();
    if (!length) return;
    const q=new THREE.Quaternion().setFromUnitVectors(Y,direction.divideScalar(length));
    append(boxGeo,mat,a.clone().lerp(b,0.5),q,V(size,length,depth),group);
  }
  const disc=(x,y,z,r,h,mat,group,segs=24)=>
    append(round(segs),mat,V(x,y,z),Zaxis,V(r,h,r),group);
  // The UVs follow the physical scale of the plates rather than their bounds.
  function extruded(id,points,depth,bevel) {
    return cache(id,()=>{
      const shape=new THREE.Shape();
      shape.moveTo(points[0][0],points[0][1]);
      points.slice(1).forEach(([x,y])=>shape.lineTo(x,y));
      shape.closePath();
      const geometry=new THREE.ExtrudeGeometry(shape,{depth:Math.max(.003,depth-2*bevel),
        bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:2,curveSegments:3});
      geometry.computeBoundingBox();
      const centre=geometry.boundingBox.getCenter(V());
      geometry.translate(-centre.x,-centre.y,-centre.z);
      const n=geometry.attributes.normal, p=geometry.attributes.position, uv=geometry.attributes.uv;
      for(let i=0;i<p.count;i++){
        const nx=Math.abs(n.getX(i)),ny=Math.abs(n.getY(i)),nz=Math.abs(n.getZ(i));
        const u=nx>nz&&nx>ny?p.getZ(i):p.getX(i);
        const v=ny>nx&&ny>nz?p.getZ(i):p.getY(i);
        uv.setXY(i,u*.42,v*.42);
      }
      return {geometry,centre};
    });
  }
  function plate(id,points,z,depth,mat,group,bevel=.018,xoff=0,yoff=0) {
    const p=extruded(id,points,depth,bevel);
    append(p.geometry,mat,V(xoff+p.centre.x,yoff+p.centre.y,z),identity,V(1,1,1),group);
  }
  function quad(id,vertices,mat,group) {
    const center=vertices.reduce((v,p)=>v.add(p),V()).multiplyScalar(.25);
    const geom=cache(id,()=>{
      const points=vertices.map(p=>p.clone().sub(center));
      const g=new THREE.BufferGeometry();
      g.setAttribute('position',new THREE.Float32BufferAttribute(points.flatMap(p=>[p.x,p.y,p.z]),3));
      g.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,1,1,0,1],2));
      g.setIndex([0,1,2,0,2,3,2,1,0,3,2,0]);
      // Explicit normals retain specular highlights on a thin, two-sided pane.
      const normal=points[1].clone().sub(points[0]).cross(points[2].clone().sub(points[0])).normalize();
      g.setAttribute('normal',new THREE.Float32BufferAttribute(Array.from({length:4},()=>normal.toArray()).flat(),3));
      return g;
    });
    append(geom,mat,center,identity,V(1,1,1),group);
  }
  function pin(x,y,z,r,length,group='braccio') {
    disc(x,y,z,r,length,'iron',group);
    for(const s of [-1,1]){
      disc(x,y,z+s*(length/2+.01),r*.87,.038,'edge',group,20);
      disc(x,y,z+s*(length/2+.038),r*.39,.041,'bolt','bulloneria',6);
    }
  }
  // Fasteners are complete solids: the anchored shank and helical thread become
  // visible when withdrawn. Slotted machine screws also have a recessed drive.
  function fastenerGeometry(isScrew) {
    return cache(isScrew?'slotted-screw':'hex-bolt',()=>{
      const geometries=[];
      function cylinder(top,bottom,height,y,sides) {
        const g=new THREE.CylinderGeometry(top,bottom,height,sides);
        g.translate(0,y,0);geometries.push(g);
      }
      cylinder(.47,.41,1.95,-.965,10);
      const pitch=.36,turns=4,resolution=11, verts=[];
      for(let i=0;i<turns*resolution;i++){
        const at=(j,r,dy)=>{
          const a=j/resolution*Math.PI*2;
          return [Math.cos(a)*r,-1.83+j/resolution*pitch+dy,Math.sin(a)*r];
        };
        const lo=at(i,.45,0),tip=at(i,.55,.075),hi=at(i,.45,.15);
        const nlo=at(i+1,.45,0),ntip=at(i+1,.55,.075),nhi=at(i+1,.45,.15);
        verts.push(...lo,...ntip,...nlo,...lo,...tip,...ntip,...tip,...nhi,...ntip,...tip,...hi,...nhi);
      }
      const thread=new THREE.BufferGeometry();
      thread.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
      thread.computeVertexNormals();geometries.push(thread);
      if(isScrew){
        cylinder(.92,.51,.32,.06,16);
        for(const side of [-1,1]){
          const shape=new THREE.Shape(),R=.90, gap=.15;
          const angle=Math.asin(gap/R);
          for(let i=0;i<=16;i++){
            const a=angle+(Math.PI-2*angle)*i/16,x=R*Math.cos(a),y=side*R*Math.sin(a);
            if(i===0)shape.moveTo(x,y);else shape.lineTo(x,y);
          }
          shape.closePath();
          const driveHead=new THREE.ExtrudeGeometry(shape,{depth:.19,bevelEnabled:false});
          driveHead.rotateX(-Math.PI/2);driveHead.translate(0,.22,0);geometries.push(driveHead);
        }
      } else {
        cylinder(1,1,.51,.182,6);
        cylinder(.89,1,.08,.476,6);
      }
      const xyz=[],normals=[],tex=[];
      for(const original of geometries){
        const g=original.index?original.toNonIndexed():original;
        const a=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;
        for(let j=0;j<a.count;j++){
          xyz.push(a.getX(j),a.getY(j),a.getZ(j));
          normals.push(n.getX(j),n.getY(j),n.getZ(j));tex.push(uv?uv.getX(j):0,uv?uv.getY(j):0);
        }
        if(g!==original)g.dispose();
        original.dispose();
      }
      const result=new THREE.BufferGeometry();
      result.userData.threadPitch=pitch;result.userData.threadTurns=turns;
      result.setAttribute('position',new THREE.Float32BufferAttribute(xyz,3));
      result.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
      result.setAttribute('uv',new THREE.Float32BufferAttribute(tex,2));
      return result;
    });
  }
  const oppositeZ=new THREE.Quaternion().setFromUnitVectors(Y,V(0,0,-1));
  function bolts(x,y,z,r=.029,side=1) {
    disc(x,y,z,r*1.35,.014,'iron','bulloneria',12);
    append(fastenerGeometry(false),'bolt',V(x,y,z+side*.011),side>0?Zaxis:oppositeZ,V(r,r,r),'bulloneria');
  }
  function machineScrew(x,y,z,r,side=1) {
    append(fastenerGeometry(true),'bolt',V(x,y,z),side>0?Zaxis:oppositeZ,V(r,r,r),'bulloneria');
  }
  const torus=(major,minor)=>cache('ring'+major+'-'+minor,()=>new THREE.TorusGeometry(major,minor,6,28));
  const ring=(x,y,z,r,t,mat,group)=>append(torus(r,t),mat,V(x,y,z),identity,V(1,1,1),group);
  function conduit(id,points,r,mat,group,segments=18) {
    const curve=new THREE.CatmullRomCurve3(points);
    const geometry=cache(id,()=>{
      const g=new THREE.TubeGeometry(curve,segments,r,6,false);
      g.computeBoundingBox();const center=g.boundingBox.getCenter(V());
      g.translate(-center.x,-center.y,-center.z);
      return {g,center};
    });
    append(geometry.g,mat,geometry.center.clone(),identity,V(1,1,1),group);
  }

  // Undercarriage. Each individual shoe, grouser, hinge and fastener can detach.
  const rear=[-3.47,-3.57,-3.365,-3.35][era], front=[.04,.28,.285,.31][era];
  const axleY=era<2?.54:.483, radius=era<2?.445:.398, centreX=(rear+front)*.5,straight=front-rear;
  const length=2*straight+2*Math.PI*radius, links=Math.round(length/.214), pitch=length/links;
  function pointOnBelt(d) {
    if(d<straight) return [rear+d,axleY-radius,0];
    d-=straight;
    if(d<Math.PI*radius) {
      const a=d/radius-Math.PI/2;
      return [front+Math.cos(a)*radius,axleY+Math.sin(a)*radius,a+Math.PI/2];
    }
    d-=Math.PI*radius;
    if(d<straight) return [front-d,axleY+radius,Math.PI];
    const a=(d-straight)/radius+Math.PI/2;
    return [rear+Math.cos(a)*radius,axleY+Math.sin(a)*radius,a+Math.PI/2];
  }
  const groundFrame=era>0?materials.track.clone():materials.track;
  if(era>0){
    groundFrame.name=['','Carro brunito e terra asciutta','Fiancata del carro con deposito di polvere','Carro contemporaneo grafite'][era];
    const base=era===1?[99,80,65]:era===2?[127,116,102]:[75,79,78];
    const size=96, pixels=new Uint8Array(size*size*4);
    let seed=919+era*449;
    for(let yy=0;yy<size;yy++)for(let xx=0;xx<size;xx++){
      seed=(Math.imul(seed,1664525)+1013904223)>>>0;
      const u=xx/size*Math.PI*2,v=yy/size*Math.PI*2,i=(yy*size+xx)*4;
      const grain=(seed/4294967296-.5)*6;
      const dust=3.1*Math.cos(2*u+Math.sin(v))+2.9*Math.sin(3*v+Math.sin(2*u))+.8*Math.sin(9*u-4*v);
      for(let k=0;k<3;k++)pixels[i+k]=base[k]+dust+grain;
      pixels[i+3]=255;
    }
    const dust=new THREE.DataTexture(pixels,size,size,THREE.RGBAFormat);dust.wrapS=dust.wrapT=THREE.RepeatWrapping;
    dust.magFilter=THREE.LinearFilter;dust.minFilter=THREE.LinearMipmapLinearFilter;dust.generateMipmaps=true;
    dust.colorSpace=THREE.SRGBColorSpace;dust.needsUpdate=true;
    groundFrame.map=dust;groundFrame.color.setHex(0xffffff);
    groundFrame.metalness=era===2?.23:era===1?.30:.49;
    groundFrame.roughness=era===2?.87:.70;groundFrame.roughnessMap=null;groundFrame.metalnessMap=null;groundFrame.bumpScale=.006;
  }
  // Individual seals and bearing races stay seated inside each idler at rest.
  // Their hollow bores are visible when the drive units are pulled apart.
  const raceGeometry=cache('turned-bearing-race',()=>{
    const profile=[[.62,-.51],[.92,-.51],[1,-.38],[1,.34],[.93,.48],[.71,.48],[.66,.34],[.62,-.31],[.62,-.51]];
    return new THREE.LatheGeometry(profile.map(([r,y])=>new THREE.Vector2(r,y)),28);
  });
  const trackZ=[.82,1.175,1.190,1.195][era], shoe=[.55,.65,.60,.60][era];
  for(const side of [-1,1]) {
    const tz=side*trackZ,outer=tz+side*(shoe/2-(era===0?0:.18));
    plate('hull-carriage',[[rear-.03,.32],[front-.035,.33],[front+.15,.51],[front-.24,.74],[centreX+.24,.84],[rear+.29,.75],[rear-.13,.58]],
      tz,.39,'track','telaio',.055);
    for(let i=0;i<links;i++) {
      const [x,y,a]=pointOnBelt(i*pitch);
      const nx=-Math.sin(a),ny=Math.cos(a);
      box(x,y,tz,pitch*.93,.068,shoe,'track','cingoli',a);
      if(era===0) box(x-nx*.051,y-ny*.051,tz,.046,.058,shoe*.985,'iron','cingoli',a);
      else for(const offset of [-.063,0,.063]){
        box(x+Math.cos(a)*offset-nx*.046,y+Math.sin(a)*offset-ny*.046,tz,.026,.048,shoe*.985,'iron','cingoli',a);
      }
      box(x+nx*.065,y+ny*.065,tz,pitch*.75,.068,shoe*.42,'track','cingoli',a);
      if(i%2===0) disc(x+nx*.036,y+ny*.036,outer-side*.017,.036,.046,'bolt','cingoli',8);
      for(const j of [-1,1]) {
        const bp=V(x-nx*.042,y-ny*.042,tz+j*shoe*.292);
        const normal=V(-nx,-ny,0);
        append(round(6),i%7===0&&era===0?'rust':'bolt',bp,
          new THREE.Quaternion().setFromUnitVectors(Y,normal),V(.026,.025,.026),'bulloneria');
      }
    }
    const roll=(x,y,r,isEnd,drive=false)=>{
      disc(x,y,tz,r,shoe*.66,'iron','trasmissione',32);
      disc(x,y,outer-side*.035,r*.85,.059,'track','trasmissione',28);
      ring(x,y,outer+side*.003,r*.728,r*.049,'track','trasmissione');
      disc(x,y,outer+side*.02,r*.43,.073,'iron','trasmissione',22);
      disc(x,y,outer+side*.077,r*.23,.059,era===0?'rust':'edge','trasmissione',16);
      if(drive&&era>0){
        const zFace=outer+side*.116;
        disc(x,y,zFace,r*.64,.039,groundFrame,'trasmissione',28);
        const n=era===2?14:10;
        for(let j=0;j<n;j++){
          const a=j*Math.PI*2/n,dx=Math.cos(a),dy=Math.sin(a);
          bar(V(x+dx*r*.39,y+dy*r*.39,zFace+side*.028),V(x+dx*r*.63,y+dy*r*.63,zFace+side*.028),.026,groundFrame,'trasmissione',.031);
        }
        disc(x,y,zFace+side*.031,r*.35,.044,groundFrame,'trasmissione',20);
      }
      if(isEnd){
        for(const j of [-1,1]){
          const zz=tz+j*shoe*.218;
          append(raceGeometry,'edge',V(x,y,zz),Zaxis,V(r*.79,.091,r*.79),'trasmissione');
          ring(x,y,zz+j*.050,r*.56,.014,'rubber','trasmissione');
          ring(x,y,zz-j*.045,r*.66,.012,'iron','trasmissione');
        }
      }
      const count=isEnd?8:4;
      for(let i=0;i<count;i++) {
        const a=2*Math.PI*i/count;
        bolts(x+r*.53*Math.cos(a),y+r*.53*Math.sin(a),outer+side*.005,isEnd?.027:.022,side);
      }
      if(drive) {
        const verts=[];
        for(let k=0;k<16;k++)for(const [frac,rel] of [[0,.89],[.17,1],[.48,1],[.72,.89]]){
          const a=(k+frac)*Math.PI*2/16; verts.push([Math.cos(a)*r*rel,Math.sin(a)*r*rel]);
        }
        plate('drive-sprocket',verts,outer-side*.105,.089,'iron','trasmissione',.009,x,y);
      }
    };
    roll(rear,axleY,radius*.93,true,true);roll(front,axleY,radius*.90,true);
    const rollers=era===0?5:7;
    for(let i=0;i<rollers;i++){
      const x=rear+.58+i*(straight-1.16)/(rollers-1);
      roll(x,era<2?.415:.367,era===0?.248:.225,false);
    }
    for(const k of [.27,.7]) disc(rear+k*straight,era<2?.83:.753,tz,.117,.38,'iron','trasmissione',16);
    if(era>0){
      const outside=outer+side*.054, roof=era<2?.74:.70,base=.33;
      const face=era===1?
        [[rear+.24,roof-.09],[rear+.49,roof+.06],[front-.37,roof+.06],[front-.10,roof-.08],[front-.19,base+.082],
         [front-.56,base+.04],[rear+.54,base+.03],[rear+.22,base+.09]]:
        era===2?[[rear+.23,roof-.08],[rear+.43,roof+.067],[front-.28,roof+.067],[front-.15,roof-.12],
         [front-.17,base+.04],[front-.46,base-.017],[rear+.40,base-.017],[rear+.22,base+.045]]:
        [[rear+.22,roof-.13],[rear+.46,roof+.042],[front-.36,roof+.042],[front-.13,roof-.12],
         [front-.24,base+.05],[front-.53,base],[rear+.50,base],[rear+.21,base+.086]];
      plate('track-box-beam',face,outside,.139,groundFrame,'telaio',.022);
      if(era===1){
        // The old crawler has separate roller guard straps and plated ends.
        for(let j=0;j<6;j++){
          const xx=rear+.49+j*(straight-.95)/5;
          box(xx,base+.123,outside+side*.086,.29,.18,.057,groundFrame,'telaio',-.055);
          for(const dx of [-.089,.089])bolts(xx+dx,base+.146,outside+side*.119,.023,side);
        }
      }else if(era===2){
        const idlerGuard=[[front-.28,base-.033],[front+.20,base-.033],[front+.24,base+.075],
          [front+.23,roof-.09],[front+.105,roof+.015],[front-.21,roof+.015],[front-.29,roof-.064]];
        plate('front-guide-guard',idlerGuard,outside+side*.083,.091,groundFrame,'telaio',.026);
        for(const u of [.28,.66]){
          const xx=rear+straight*u;
          box(xx,base+.125,outside+side*.078,.087,.087,.015,'interior','telaio');
        }
        bar(V(rear+.41,base+.015,outside+side*.092),V(front-.25,base+.015,outside+side*.092),.022,'edge','telaio',.03);
      }else{
        for(const u of [.27,.72]){
          const xx=rear+straight*u;
          box(xx,roof-.062,outside+side*.078,.394,.062,.023,'red','telaio');
          box(xx,roof-.026,outside+side*.079,.416,.017,.032,'edge','telaio');
          for(const dx of [-.164,.164])bolts(xx+dx,roof-.061,outside+side*.093,.017,side);
        }
      }
    }
  }
  // Central X frame and slewing ring, visible through the gap above the tracks.
  box(centreX,.70,0,2.74,.44,1.55,'track','telaio');
  for(const sign of [-1,1]) for(const sx of [-1,1]){
    bar(V(centreX,.86,0),V(centreX+sx*1.42,.59,sign*trackZ),.25,'iron','telaio',.28);
  }
  const turret=V(centreX+.15,1.125,0);
  append(round(44),'iron',turret,identity,V(.864,.15,.864),'trasmissione');
  append(round(48),'edge',V(turret.x,1.235,0),identity,V(.832,.08,.832),'trasmissione');
  for(let i=0;i<24;i++){
    const a=i*Math.PI*2/24;
    append(round(6),'bolt',V(turret.x+Math.cos(a)*.756,1.29,Math.sin(a)*.756),
      identity,V(.043,.047,.043),'bulloneria');
  }

  if(era===0){
    buildCableExcavator(THREE,{V,box,bar,rod,plate,disc,pin,ring,bolts,machineScrew,append,round,cache,identity,quad,conduit,parts},materials);
    return {parts,era:eraIndex,name:'Escavatore meccanico a pala frontale'};
  }
  const captionAnchor=hydraulicUpper(THREE,era,{V,parts,materials,cache,append,box,bar,rod,disc,plate,quad,pin,bolts,machineScrew,conduit,round,identity});
  // Mirror the photographed silhouette, retaining the glazed operator side at +Z.
  // Bake the reflection into each shared geometry once. Correct winding and
  // conjugated rotations keep PBR normals, culling and instanced scales valid.
  const mirrored=new Set(),rotations=new WeakMap();
  for(const part of parts){
    const g=part.geometry;
    if(!mirrored.has(g)){
      g.scale(-1,1,1);
      if(!g.index)g.setIndex(Array.from({length:g.attributes.position.count},(_,i)=>i));
      const faces=g.index.array;
      for(let j=0;j<faces.length;j+=3){
        const old=faces[j+1];faces[j+1]=faces[j+2];faces[j+2]=old;
      }
      g.index.needsUpdate=true;g.computeBoundingBox();g.computeBoundingSphere();mirrored.add(g);
    }
    part.position=part.position.clone();part.position.x*=-1;
    const q=part.quaternion;
    if(!rotations.has(q))rotations.set(q,new THREE.Quaternion(q.x,-q.y,-q.z,q.w));
    part.quaternion=rotations.get(q);
  }
  captionAnchor.point.x*=-1;
  return {parts,era:eraIndex,facing:-1,captionAnchor,name:['','Escavatore idraulico anni Ottanta','Escavatore idraulico serie D','Escavatore elettroidraulico contemporaneo'][era]};

}
