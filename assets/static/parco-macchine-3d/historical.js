// Ruston-Bucyrus 22-RB face shovel, reconstructed from the supplied three-quarter
// photograph. Rounded post-1955 house, box boom, spoked sheaves, sliding crowd
// handle and pinned outward-facing dipper. All working surfaces are meshes.
// Working finishes sampled by eye from the unmarked panels in the reference.
// Each map consists of genuinely different paint, oxidized iron and burnished
// exposed metal. No photograph or manufacturer artwork is used as geometry.
function periodFinish(T,name,settings) {
  const size=256, colour=new Uint8Array(size*size*4), physical=new Uint8Array(size*size*4);
  const mix=(a,b,t)=>a+(b-a)*t;
  const smooth=(a,b,x)=>{const k=Math.max(0,Math.min(1,(x-a)/(b-a))); return k*k*(3-2*k);};
  function hash(x,y,seed){
    let n=Math.imul(x^seed,0x27d4eb2d)^Math.imul(y+17,0x165667b1);n=Math.imul(n^(n>>>15),0x85ebca6b);
    return ((n^(n>>>13))>>>0)/4294967295;
  }
  const noise=(u,v,nx,ny,seed)=>{
    const x=u*nx,y=v*ny,ix=Math.floor(x),iy=Math.floor(y);
    const at=(a,b)=>hash((a%nx+nx)%nx,(b%ny+ny)%ny,seed);
    const fx=smooth(0,1,x-ix),fy=smooth(0,1,y-iy);
    return mix(mix(at(ix,iy),at(ix+1,iy),fx),mix(at(ix,iy+1),at(ix+1,iy+1),fx),fy);
  };
  for(let j=0;j<size;j++)for(let i=0;i<size;i++){
    const u=i/size,v=j/size,k=(j*size+i)*4,seed=settings.seed;
    const macro=noise(u,v,4,3,seed),mid=noise(u,v,14,11,seed+4),grain=hash(i,j,seed+7);
    const feather=noise(u,v,49,27,seed+2),scrape=noise(u,v,73,6,seed+19);
    const level=macro*.41+mid*.23+feather*.17+scrape*.15+grain*.04;
    const exposed=smooth(settings.cut-.07,settings.cut+.045,level);
    const bloom=smooth(.49,.71,macro*.37+feather*.32+mid*.20+grain*.11);
    const strike=smooth(.72,.93,scrape)*(.25+.75*mid);
    for(let c=0;c<3;c++){
      const coat=settings.paint[c]*(.84+.20*mid+.09*grain);
      const bare=mix(settings.metal[c],settings.oxide[c],bloom)*(.88+.16*feather+.08*grain);
      colour[k+c]=Math.min(255,mix(mix(coat,bare,exposed),settings.metal[c],strike*.17));
    }
    colour[k+3]=255;physical[k]=Math.round(255*(.56+.04*grain+.035*feather-.095*exposed+.04*bloom));
    physical[k+1]=Math.round(255*mix(.60+.085*mid,.39+.40*bloom+.10*feather,exposed));
    physical[k+2]=Math.round(255*mix(.11,.72-.40*bloom,exposed));physical[k+3]=255;
  }
  function texture(data,col){
    const map=new T.DataTexture(data,size,size,T.RGBAFormat);map.wrapS=map.wrapT=T.RepeatWrapping;
    map.magFilter=T.LinearFilter;map.minFilter=T.LinearMipmapLinearFilter;map.generateMipmaps=true;
    if(col)map.colorSpace=T.SRGBColorSpace;map.anisotropy=3;map.needsUpdate=true;return map;
  }
  const albedo=texture(colour,true),packed=texture(physical,false);
  return new T.MeshStandardMaterial({name,map:albedo,bumpMap:packed,roughnessMap:packed,metalnessMap:packed,
    bumpScale:.021,metalness:1,roughness:1,envMapIntensity:.98});
}

export function buildCableExcavator(T, h, materials) {
  const {V, box, bar, rod, plate, disc, pin, ring, bolts, machineScrew, append, round, cache,
    identity, quad, conduit, parts} = h;
  const oz = -.37;
  const coat = (material, name, color) => {
    const finish=material.clone(); finish.color.set(color); finish.name=name; return finish;
  };
  const ochre=periodFinish(T,'Ocra industriale invecchiato',{seed:53,paint:[211,158,48],metal:[130,123,101],oxide:[96,75,54],cut:.675});
  const lower=periodFinish(T,'Rosso ossidato e lamiera scoperta',{seed:71,paint:[124,44,46],metal:[125,111,96],oxide:[98,73,57],cut:.663});
  const boomMetal=periodFinish(T,'Cassone del braccio in acciaio antracite',{seed:12,paint:[46,47,44],metal:[101,99,90],oxide:[87,65,49],cut:.63});
  const crowdMetal=periodFinish(T,'Asta di spinta e guide brunite',{seed:24,paint:[51,54,52],metal:[114,111,96],oxide:[90,68,43],cut:.605});
  const bucketMetal=periodFinish(T,'Fusione consumata della benna',{seed:39,paint:[117,113,96],metal:[111,109,96],oxide:[133,98,75],cut:.467});
  const insideMetal=periodFinish(T,'Interno della benna segnato dalla terra',{seed:46,paint:[48,50,45],metal:[73,75,66],oxide:[83,64,53],cut:.470});
  const shoeMetal=periodFinish(T,'Pattini ossidati',{seed:44,paint:[75,69,59],metal:[124,118,100],oxide:[121,89,61],cut:.563});
  const rail=periodFinish(T,'Acciaio fuso del telaio',{seed:14,paint:[103,108,100],metal:[135,137,124],oxide:[111,83,66],cut:.518});
  const edgeIron=coat(materials.iron,'Battute di acciaio esposto',0xc2c3b4);
  const roofMetal=ochre;
  const touchGlass=materials.glass.clone(); touchGlass.name='Vetro storico neutro';
  touchGlass.color.set(0x445259);touchGlass.opacity=.49;touchGlass.metalness=.13;touchGlass.clearcoat=.58;touchGlass.envMapIntensity=.76;
  const rivet=(x,y,z,side=1,r=.019)=>{
    disc(x,y,z,r,.010,'iron','bulloneria',10);
    disc(x,y,z+side*.007,r*.81,.012,'bolt','bulloneria',10);
  };
  const vlist=(coords,z)=>coords.map(([x,y])=>V(x,y,z));
  const sheetBetween=(id,xa,za,xb,zb,y0,y1a,y1b,mat,group='lamierati')=>
    quad(id,[V(xa,y0,za),V(xb,y0,zb),V(xb,y1b,zb),V(xa,y1a,za)],mat,group);
  const beam=(a,b,r,mat,group='telaio')=>rod(a,b,r,mat,group,10);

  const centeredPlate=(outer,holes,z,depth,mat,group)=>{
    const contour=new T.Shape(outer.map(([x,y])=>new T.Vector2(x,y)));
    contour.closePath();
    holes.forEach(points=>{const hole=new T.Path(points.map(([x,y])=>new T.Vector2(x,y)));hole.closePath();contour.holes.push(hole);});
    const geometry=new T.ExtrudeGeometry(contour,{depth,bevelEnabled:false,curveSegments:3});
    geometry.computeBoundingBox();
    const pivot=geometry.boundingBox.getCenter(V());
    geometry.translate(-pivot.x,-pivot.y,-pivot.z);
    append(geometry,mat,V(pivot.x,pivot.y,z),identity,V(1,1,1),group);
  };
  // Wide, pitted one-piece shoes with the paired relief holes seen around
  // the idlers. One perforated casting is instanced around both track loops.
  const singleShoe=cache('perforated-period-shoe',()=>{
    const sh=new T.Shape();
    const points=[[-.50,-.40],[-.43,-.50],[.42,-.50],[.5,-.42],[.5,.42],[.42,.50],[-.43,.50],[-.50,.40]];
    points.forEach(([x,z],i)=>i?sh.lineTo(x,z):sh.moveTo(x,z));sh.closePath();
    for(const z of [-.275,.275]){
      const hp=new T.Path();hp.absellipse(.04,z,.115,.052,0,2*Math.PI,true,0); sh.holes.push(hp);
    }
    const g=new T.ExtrudeGeometry(sh,{depth:.76,bevelEnabled:true,bevelSize:.011,bevelThickness:.04,bevelSegments:1,curveSegments:6});
    g.translate(0,0,-.38);g.rotateX(Math.PI*.5);return g;
  });
  for(const p of parts){
    if(p.group==='cingoli' && p.scale.z>.53 && p.scale.z<.56) {
      if(p.scale.y>.064){
        p.geometry=singleShoe;p.material=shoeMetal;p.scale.z*=1.22;p.scale.x*=1.055;
      }else{p.scale.z*=1.16;p.scale.y*=.57;p.material=shoeMetal;}
    }
  }
  // The face of the old crawler frame screens the small road wheels on the
  // original machine. Two longitudinal pressed sections flank the slewing race.
  for (const s of [-1,1]) {
    const z=s*1.112;
    const frame=[[-3.56,.58],[-3.37,.78],[-2.91,.814],[-.33,.807],[-.064,.715],[.17,.642],[.12,.49],[-.18,.399],[-2.71,.340],[-3.46,.435]];
    const holes=[-2.44,-1.43].map(x=>Array.from({length:16},(_,i)=>[x+.059*Math.cos(i*Math.PI/8),.663+.057*Math.sin(i*Math.PI/8)]));
    centeredPlate(frame,holes,z,.074,rail,'telaio');
    for (const x of [-3.17,-2.93,-.39,-.16]) {
      bar(V(x,.60,z+s*.032),V(x+.25,.60,z+s*.032),.027,'edge','telaio',.044);
    }
    bar(V(-3.20,.402,z+s*.041),V(-.375,.402,z+s*.041),.039,rail,'telaio',.057);
  }

  const runningGearCount=parts.length;

  // The counterweight follows a rounded rear plan and projects beyond the
  // near-vertical machine-house walls. Stepped seams continue around the stern.
  const rearProfile=[[-2.88,-1.16],[-3.19,-1.135],[-3.46,-1.025],[-3.65,-.85],[-3.76,-.64],
    [-3.8,-.38],[-3.8,.38],[-3.76,.64],[-3.65,.85],[-3.46,1.025],[-3.19,1.135],[-2.88,1.16]];
  // The pressed roof rises towards the glazed nose. Its longitudinal arch and
  // rolled eaves are visible above the door in the original 22-RB photograph.
  const roofArch=[[-3.81,3.33],[-3.55,3.40],[-3.20,3.51],[-2.89,3.59],[-2.32,3.72],[-1.70,3.79],[-1.10,3.82],[-.51,3.77],[-.17,3.64],[.02,3.48]];
  function roofY(x){
    const i=roofArch.findIndex(p=>p[0]>=x);
    if(i<=0)return roofArch[i===0?0:roofArch.length-1][1];
    const [a,b]=[roofArch[i-1],roofArch[i]];
    return a[1]+(b[1]-a[1])*(x-a[0])/(b[0]-a[0]);
  }
  const deckTop=1.48, beltY=2.34, gutterY=3.27;
  box(-1.55,1.39,0,3.59,.18,2.39,rail,'telaio');
  box(-3.18,1.35,0,1.15,.24,1.93,'iron','telaio');
  rearProfile.slice(0,-1).forEach(([xa,za],i)=>{
    const [xb,zb]=rearProfile[i+1];
    const px=(xa+xb)/2;
    sheetBetween('rb-stern-deck-'+i,xa-.105,za*1.04,xb-.105,zb*1.04,1.25,1.49,1.49,rail,'telaio');
    sheetBetween('rb-stern-low-'+i,xa,za,xb,zb,deckTop,beltY,beltY,lower);
    sheetBetween('rb-stern-upper-'+i,xa,za,xb,zb,beltY,gutterY,gutterY,ochre);
    sheetBetween('rb-stern-rim-'+i,xa,za*1.005,xb,zb*1.005,gutterY,roofY(xa),roofY(xb),roofMetal);
    const topA=V(xa,roofY(xa),za),topB=V(xb,roofY(xb),zb);
    quad('rb-rear-roof-'+i,[topA,topB,V(-2.88,roofY(-2.88)+.035,0),V(px,(roofY(xa)+roofY(xb))*.5+.016,(za+zb)*.3)],roofMetal,'lamierati');
  });
  const cover=(id,x1,x2,y1,y2,z,m)=>plate(id,[[x1,y1],[x2,y1],[x2,y2],[x1,y2]],z,.035,m,'lamierati',.006);
  for(const s of [-1,1]){
    const z=s*1.16;
    // Horizontal ventilator louvers run uninterrupted across the two-tone paint.
    box(-2.69,2.38,z-s*.021,.6,1.78,.049,'interior','motore');
    for(let k=0;k<16;k++){
      const y=1.52+k*.113;
      box(-2.69,y,z,.556,.053,.085,y<beltY?lower:ochre,'motore');
      for(const edge of [-1,1]) if(k%5===0)rivet(-2.69+edge*.307,y,z+s*.043,s,.014);
    }
    for(const dx of [-.325,.327])box(-2.69+dx,2.39,z,.037,1.81,.048,rail,'lamierati');
    const panels=[[-2.34,-1.84],[-1.824,-1.18]];
    if(s<0)panels.push([-1.16,-.50],[-.48,.01]);
    for(const [xa,xb] of panels){
      cover('rb-plate-low'+xa,xa,xb,deckTop,beltY,z,lower);
      cover('rb-plate-high'+xa,xa,xb,beltY+.006,gutterY,z,ochre);
      if(s===1 && xa===-2.34)parts[parts.length-1].captionPoint=V(xa+.125,gutterY-.115,z+.025);
      for(const x of [xa+.03,xb-.035])for(const y of [1.57,2.28,2.77,3.17])rivet(x,y,z+s*.027,s);
    }
    if(s<0) {
      box(-1.78,2.76,z-.037,.35,.25,.014,'interior','motore');
      for(let k=0;k<7;k++)box(-1.78,2.66+k*.035,z-.051,.32,.014,.028,ochre,'motore');
    }
    const xs=[-2.89,-2.31,-1.66,-.93,-.37,-.17];
    for(let i=0;i<xs.length-1;i++){
      const xa=xs[i],xb=xs[i+1];
      sheetBetween('rb-gutter'+s+'-'+i,xa,z+s*.009,xb,z+s*.009,gutterY,roofY(xa),roofY(xb),roofMetal);
      for(const x of [xa+.052,xb-.048])rivet(x,roofY(x)-.054,z+s*.023,s,.015);
    }
  }
  const stations=[-2.89,-2.32,-1.7,-1.1,-.51,-.17];
  for(let k=0;k<stations.length-1;k++){
    const x1=stations[k],x2=stations[k+1];
    // The front-middle roof opening admits the reeved drum cables.
    const stationsZ=k>=3?[[-1.165,-1.145,-1.095,-.99,-.65],[.095,.99,1.095,1.145,1.165]]:
      [[-1.165,-1.145,-1.095,-.99,0,.99,1.095,1.145,1.165]];
    const spans=stationsZ.flatMap(path=>path.slice(1).map((v,i)=>[path[i],v]));
    for(let j=0;j<spans.length;j++){
      const [z1,z2]=spans[j],crown=z=>.108*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(z)/1.165,12)))+.025*(1-Math.abs(z)/1.165);
      quad('rb-crown-'+k+'-'+j,[V(x1,roofY(x1)+crown(z1),z1),V(x2,roofY(x2)+crown(z1),z1),
        V(x2,roofY(x2)+crown(z2),z2),V(x1,roofY(x1)+crown(z2),z2)],roofMetal,'lamierati');
    }
  }
  // The rolled nose closes the roof and shades the top of the windscreen.
  const visor=[[-.205,3.297],[-.205,3.648],[-.157,3.617],[-.099,3.556],[-.019,3.432],[.036,3.385],[.046,3.350],[-.069,3.338],[-.104,3.297]];
  plate('rb-rolled-windscreen-brow',visor,.635,1.097,roofMetal,'lamierati',.009);
  for(const c of [-2.31,-1.66,-1.03,-.47]){
    const h=roofY(c);
    const strap=[V(c,h-.02,-1.135),V(c,h+.057,-1.058),V(c,h+.092,-.88),V(c,h+.103,0),V(c,h+.092,.88),V(c,h+.057,1.058),V(c,h-.02,1.135)];
    if(c<-1.05)conduit('22rb-roof-hoop-'+c,strap,.021,rail,'telaio',26);
    for(const s of [-1,1])rod(V(c,h-.054,s*1.116),V(c,h+.027,s*1.097),.018,'iron','bulloneria',10);
  }
  // A broad D-shaped opening in the sliding operator door, with an unbroken
  // curved rear edge and an inclined front pillar. The hole is actually open.
  const frameZ=1.161;
  const outer=[[-1.17,deckTop],[.21,deckTop],[.21,2.32],[-.13,3.29],[-1.17,3.29]];
  const fullPane=[[-1.105,2.66],[-1.01,2.53],[-.845,2.46],[-.65,2.435],[-.02,2.395],[.061,2.427],
    [.071,2.51],[-.155,3.15],[-.22,3.207],[-.39,3.223],[-.68,3.20],[-.865,3.144],[-1.018,3.046],[-1.09,2.91],[-1.116,2.77]];
  const pane=fullPane.map(([x,y])=>[.071+(x-.071)*.18,y]);
  function piercedPlate(){
    const sh=new T.Shape(vlist(outer,0).map(p=>new T.Vector2(p.x,p.y)));
    sh.closePath();
    const hole=new T.Path(vlist(pane,0).map(p=>new T.Vector2(p.x,p.y)));hole.closePath();sh.holes.push(hole);
    const geo=new T.ExtrudeGeometry(sh,{depth:.026,bevelEnabled:false,curveSegments:2});
    geo.computeBoundingBox();const center=geo.boundingBox.getCenter(V());geo.translate(-center.x,-center.y,-center.z);
    append(geo,ochre,V(center.x,center.y,frameZ),identity,V(1,1,1),'cabina');
  }
  const doorStart=parts.length;
  piercedPlate();
  plate('rb-door-lower',[[-1.16,1.488],[.20,1.488],[.20,2.315],[.192,beltY],[-1.16,beltY]],frameZ+.021,.028,lower,'cabina',.006);
  plate('rb-cab-sideglass',pane,frameZ-.019,.014,touchGlass,'vetri',.001);
  for(let i=0;i<pane.length;i++){
    const a=pane[i],b=pane[(i+1)%pane.length];
    beam(V(a[0],a[1],frameZ+.025),V(b[0],b[1],frameZ+.025),.023,'edge','cabina');
  }
  for(const [a,b] of [[[-1.165,1.50],[-1.165,3.29]],[[.205,1.5],[.205,2.34]],[[.205,2.34],[-.14,3.29]]])beam(V(...a,frameZ+.035),V(...b,frameZ+.035),.018,rail,'cabina');
  box(.124,2.18,frameZ+.05,.052,.119,.028,'iron','cabina');
  beam(V(.13,2.13,frameZ+.075),V(.13,2.22,frameZ+.075),.015,'edge','cabina');
  const doorTravel=1.00;
  for(const piece of parts.slice(doorStart)){
    piece.position=piece.position.clone().add(V(-doorTravel,0,.047));
  }
  const runnerZ=frameZ+.052;
  for(const y of [deckTop+.018,3.292]){
    bar(V(-2.235,y,runnerZ),V(.002,y,runnerZ),.032,rail,'cabina',.037);
  }
  for(const x of [-2.05,-1.02]){
    disc(x,1.538,runnerZ+.012,.044,.046,'iron','trasmissione',16);
    bolts(x,1.538,runnerZ+.036,.016);
  }
  // The doorway looks into the operating bay. Glazing sits only in the
  // stationary front frame and in the sliding door parked behind the opening.
  box(-1.139,2.30,.69,.055,1.62,.96,'interior','cabina');
  box(-.53,1.483,.70,1.29,.062,.93,rail,'cabina');
  const step=V(-.41,1.344,1.236);
  for(const sx of [-.23,.23])bar(V(step.x+sx,step.y,step.z),V(step.x+sx,1.49,1.089),.034,'iron','cabina',.043);
  bar(V(step.x-.26,step.y,step.z),V(step.x+.27,step.y,step.z),.050,rail,'cabina',.097);
  // Hairline paint bands end at the door seal; the trademark area is left bare.
  for(const [xa,xb] of [[-2.34,-2.19],[-2.14,-.88]]){
    for(let i=0;i<3;i++)box((xa+xb)/2,2.362+i*.048,frameZ+(xa>=-2.14?.100:.027),xb-xa,.022,.009,lower,'lamierati');
  }
  const frontBand=(id,u,v,b,t,mat)=>{
    const xa=.24-Math.max(0,b-2.31)*.36,xb=.24-Math.max(0,t-2.31)*.36;
    quad(id,[V(xa,b,u),V(xa,b,v),V(xb,t,v),V(xb,t,u)],mat,'vetri');
  };
  frontBand('rb-front-main',.16,1.104,2.35,3.25,touchGlass);
  frontBand('rb-front-low',.20,1.07,1.91,2.24,touchGlass);
  box(.236,1.677,.631,.061,.379,1.045,lower,'cabina');
  for(const z of [.168,1.097]){
    beam(V(.274,1.89,z),V(.274,2.258,z),.013,'edge','cabina');
    beam(V(.274,2.353,z),V(-.077,3.242,z),.015,'edge','cabina');
  }
  for(const y of [1.898,2.26,2.347])beam(V(.265,y,.162),V(.265,y,1.108),.013,'edge','cabina');
  for(const z of [.12,1.136]) {
    beam(V(.25,1.53,z),V(.25,2.31,z),.035,ochre,'cabina');
    beam(V(.25,2.31,z),V(-.11,3.31,z),.036,ochre,'cabina');
  }
  for(const y of [1.62,2.295,3.29]){const x=.25-Math.max(0,y-2.31)*.36;beam(V(x,y,.11),V(x,y,1.14),.037,ochre,'cabina');}
  box(-.14,3.31,.63,.12,.10,1.05,ochre,'cabina');
  const lamp=V(-.21,3.41,1.05);
  box(lamp.x,lamp.y,.63,.36,.048,.85,'interior','cabina',-.04);
  // Small rectangular roof hatch, horizontal silencer and rear tubular grab.
  box(-2.55,roofY(-2.55)+.151,-.33,.82,.045,.47,roofMetal,'lamierati');
  beam(V(-2.80,roofY(-2.80)+.185,-.46),V(-2.29,roofY(-2.29)+.185,-.46),.019,rail,'cabina');
  rod(V(-2.86,3.61,-.58),V(-2.03,3.61,-.58),.076,'iron','motore',18);
  conduit('rb-exhaust-tail',[V(-2.9,3.57,-.58),V(-2.92,3.65,-.58),V(-3.04,3.72,-.58)],.044,'track','motore',9);
  box(-.63,2.02,.126,1.12,.93,.036,'interior','cabina');
  plate('rb-driver-bulkhead',[[-1.15,2.485],[-.035,2.485],[-.20,3.18],[-1.15,3.235]],.126,.032,'interior','cabina',.004);
  box(-.91,1.82,.79,.23,.42,.23,'track','cabina');
  box(-.81,2.045,.79,.53,.12,.47,'interior','cabina');
  box(-1.029,2.294,.79,.101,.494,.429,'interior','cabina',.09);
  for(let k=0;k<4;k++){
    const z=.32+k*.17;
    const top=V(-.36+(k%2)*.04,2.37+(k%2)*.075,z);
    beam(V(-.46,1.64,z),top,.019,'iron','cabina');
    beam(top,top.clone().add(V(-.027,.096,0)),.030,'interior','cabina');
    box(-.23,1.56,z,.161,.039,.075,'track','cabina');
  }
  // Short console on the bulkhead, and its ammeter, brake and clutch controls.
  plate('rb-dash-side',[[-.58,2.36],[-.42,2.365],[-.28,2.51],[-.31,2.576],[-.57,2.55]],.235,.117,'track','cabina',.014);
  for(const x of [-.515,-.429]){disc(x,2.49,.304,.035,.013,'iron','cabina',22);disc(x,2.49,.315,.026,.006,'light','cabina',16);}
  rod(V(-.16,1.561,.96),V(-.19,2.435,.88),.018,edgeIron,'cabina',14);
  const knob=cache('rb-lever-knob',()=>new T.SphereGeometry(1,14,9));
  append(knob,materials.rubber,V(-.19,2.435,.88),identity,V(.047,.058,.046),'cabina');
  const endHouse=parts.length;
  for(const [x,z] of [[-2.21,-.16],[-2.42,-.39],[-2.69,-.16],[-2.91,-.39]]){
    box(x,2.08,z,.23,.56,.26,'iron','motore');
    box(x,2.39,z,.20,.125,.238,'track','motore');
  }

  // Two independently reeved winches. The visible layers of wound cable and
  // brake bands are separate pieces for the exploded view.
  for(const [i,x,r] of [[0,-.57,.24],[1,-1.36,.31]]) {
    const y=2.02+i*.21;
    disc(x,y,oz,r,.76,'iron','trasmissione');
    for(let j=0;j<14;j++)ring(x,y,oz-.306+j*.047,r,.015,'edge','trasmissione');
    for(const s of [-1,1]){
      disc(x,y,oz+s*.377,r*1.21,.051,'track','trasmissione');
      disc(x,y,oz+s*.413,r*.45,.083,'iron','trasmissione');
    }
    ring(x,y,oz-.43,r*.99,.032,'rust','trasmissione');
  }
  // The reference shows a rope face shovel. A rack handle runs through a
  // pivoted saddle in the boom; the dipper is physically pinned to that handle.
  const foot=V(-.10,1.38,oz), tip=V(4.84,5.99,oz);
  const guide=tip.clone().sub(foot).normalize(), across=V(-guide.y,guide.x,0);
  const onBoom=(t,depth=0)=>foot.clone().lerp(tip,t).addScaledVector(across,depth*1.27);
  const sideProfile=pts=>pts.map(([t,offset])=>{const p=onBoom(t,offset);return [p.x,p.y];});
  const ellipse=(c,along,rAlong,rAcross,n=20)=>{
    const perp=V(-along.y,along.x,0);
    return Array.from({length:n},(_,i)=>{
      const a=i*2*Math.PI/n;
      return [c.x+along.x*rAlong*Math.cos(a)+perp.x*rAcross*Math.sin(a),
        c.y+along.y*rAlong*Math.cos(a)+perp.y*rAcross*Math.sin(a)];
    });
  };
  // Two tapered cheeks, open at the head for the spoked sheaves. The lower
  // tracks are solid welded webs. The cable exits above the closed top skin.
  const outside=sideProfile([[-.023,.12],[.025,.28],[.22,.385],[.47,.369],[.60,.27],[.82,.19],
    [.97,.148],[1.004,.08],[1.018,-.042],[.973,-.145],[.797,-.195],[.603,-.242],[.46,-.322],[.20,-.347],[.027,-.29],[-.023,-.184]]);
  for(const s of [-1,1]){
    plate('rb-solid-boom-cheek',outside,oz+s*.277,.071,boomMetal,'braccio',.012);
    const bottomFlange=sideProfile([[.015,-.28],[.21,-.332],[.46,-.305],[.6,-.22],[.82,-.166],[.979,-.119],
      [.983,-.143],[.81,-.204],[.601,-.256],[.46,-.349],[.21,-.375],[.016,-.32]]);
    plate('face-bottom-longitudinal-flange',bottomFlange,oz+s*.323,.092,edgeIron,'braccio',.007);
    const topFlange=sideProfile([[.045,.258],[.22,.369],[.46,.351],[.588,.267],[.82,.178],[.962,.15],[.964,.169],
      [.82,.205],[.589,.30],[.461,.394],[.222,.408],[.047,.299]]);
    plate('face-top-longitudinal-flange',topFlange,oz+s*.323,.086,edgeIron,'braccio',.006);
    const sideStrip=sideProfile([[.065,.155],[.347,.228],[.488,.232],[.502,.18],[.344,.161],[.069,.099]]);
    plate('face-web-doubler',sideStrip,oz+s*.349,.031,boomMetal,'braccio',.007);
    for(const t of [.07,.17,.28,.392,.48,.615,.731,.825,.919]){
      const p=onBoom(t,.124); bolts(p.x,p.y,oz+s*.371,.027,s);
    }
  }
  const boomSkin=(id,stations)=>{
    for(let i=1;i<stations.length;i++){
      const a=onBoom(...stations[i-1]),b=onBoom(...stations[i]);
      quad(id+i,[a.clone().add(V(0,0,-.275)),b.clone().add(V(0,0,-.275)),
        b.clone().add(V(0,0,.275)),a.clone().add(V(0,0,.275))],boomMetal,'braccio');
    }
  };
  boomSkin('rb-closed-upper-web',[[.024,.255],[.22,.367],[.47,.35],[.60,.255],[.82,.175],[.958,.124]]);
  boomSkin('rb-closed-lower-web',[[.025,-.273],[.20,-.332],[.46,-.304],[.603,-.225],[.797,-.181],[.973,-.129]]);
  for(const t of [.13,.229,.327,.575,.678,.775,.876,.951]){
    const c=onBoom(t,-.17);
    rod(c.clone().add(V(0,0,-.295)),c.clone().add(V(0,0,.295)),.043,edgeIron,'braccio',14);
  }
  for(const s of [-1,1]){
    plate('face-main-cheek',[[foot.x-.31,1.26],[foot.x+.33,1.23],[foot.x+.30,1.48],[foot.x+.12,1.66],[foot.x-.17,1.65],[foot.x-.33,1.50]],
      oz+s*.39,.102,boomMetal,'telaio',.026);
  }
  pin(foot.x,foot.y,oz,.156,1.04);
  // Deep radial spokes and an annular groove replace opaque head discs.
  const sheaveRadius=.49;
  function spokedSheave(center,r,width,index) {
    const annulus=(outerR,innerR,thick,offset,mat)=>{
      const key='face-rim-'+outerR+'-'+innerR+'-'+thick;
      const geometry=cache(key,()=>{
        const sh=new T.Shape();sh.absarc(0,0,outerR,0,2*Math.PI,false);
        const hole=new T.Path();hole.absarc(0,0,innerR,0,2*Math.PI,true);sh.holes.push(hole);
        const g=new T.ExtrudeGeometry(sh,{depth:thick,bevelEnabled:true,bevelSize:.004,bevelThickness:.004,bevelSegments:1,curveSegments:22});
        g.translate(0,0,-thick*.5);return g;
      });
      append(geometry,mat,V(center.x,center.y,center.z+offset),identity,V(1,1,1),'trasmissione');
    };
    annulus(r*.95,r*.81,width,0,boomMetal);
    for(const s of [-1,1])annulus(r,r*.88,.026,s*width*.49,edgeIron);
    disc(center.x,center.y,center.z,r*.235,width*1.65,boomMetal,'trasmissione',28);
    for(let j=0;j<5;j++){
      const a=j*Math.PI*2/5+index*.124+.18;
      const cos=Math.cos(a),sin=Math.sin(a),px=-sin,py=cos;
      const point=(rad,tan)=>[center.x+rad*cos+tan*px,center.y+rad*sin+tan*py];
      plate('head-spoke-'+index+'-'+j,[point(r*.16,-r*.099),point(r*.88,-r*.060),
        point(r*.88,r*.076),point(r*.18,r*.126)],center.z,width*.57,boomMetal,'trasmissione',.009);
    }
    disc(center.x,center.y,center.z+width*.88,r*.092,.052,'bolt','trasmissione',18);
  }
  const faceSheaves=[-.371,.371];
  faceSheaves.forEach((z,i)=>spokedSheave(tip.clone().add(V(0,0,z)),sheaveRadius,.125,i));
  disc(tip.x,tip.y,oz,.103,1.045,edgeIron,'trasmissione',24);
  // Sliding dipper handle with corners rounded by wear and a visible crowd rack.
  const saddle=onBoom(.535,-.014);
  const armDir=V(.963,.269,0).normalize(), armNorm=V(-armDir.y,armDir.x,0);
  const alongArm=t=>saddle.clone().addScaledVector(armDir,t);
  const reach=4.51,topHandle=alongArm(-.79),handleEnd=alongArm(reach);
  const hprofile=(ts)=>ts.map(([t,off])=>{const p=alongArm(t).addScaledVector(armNorm,off);return [p.x,p.y];});
  const stick=hprofile([[-.81,-.077],[-.78,-.135],[reach-.23,-.15],[reach,-.09],[reach+.02,.082],[reach-.21,.155],[-.75,.125],[-.81,.072]]);
  plate('crowd-handle-rack',stick,oz,.279,crowdMetal,'braccio',.014);
  const stripe=hprofile([[-.71,.055],[reach-.2,.086],[reach-.2,.111],[-.71,.085]]);
  for(const s of [-1,1])plate('crowd-handle-rubbed-edge',stripe,oz+s*.148,.013,edgeIron,'braccio',.003);
  for(let k=0;k<20;k++){
    const p=alongArm(-.71+k*.20).addScaledVector(armNorm,-.146);
    box(p.x,p.y,oz,.059,.052,.214,edgeIron,'trasmissione',Math.atan2(armDir.y,armDir.x));
  }
  const endCap=topHandle.clone().addScaledVector(armDir,.014);
  disc(endCap.x,endCap.y,oz,.103,.298,edgeIron,'trasmissione',20);
  // Crowd pinion and its saddle straddle the main boom; the handle passes
  // cleanly through, with sliding wear liners above and below.
  for(const s of [-1,1]){
    const b=hprofile([[-.29,-.269],[.24,-.267],[.348,-.155],[.34,.117],[.18,.237],[-.20,.237],[-.33,.09]]);
    const hp=ellipse(saddle,armDir,.193,.118,16);
    centeredPlate(b,[hp],oz+s*.343,.081,boomMetal,'trasmissione');
    const pivot=onBoom(.53,.192);
    disc(pivot.x,pivot.y,oz+s*.421,.147,.071,boomMetal,'trasmissione',24);
    bolts(pivot.x,pivot.y,oz+s*.466,.063,s);
  }
  for(const d of [-1,1]){
    const p=alongArm(-.20).addScaledVector(armNorm,d*.196),q=alongArm(.23).addScaledVector(armNorm,d*.196);
    bar(p,q,.085,edgeIron,'trasmissione',.38);
  }

  // The face shovel digs outwards and upwards. Its cast teeth stand on the
  // high leading rim. The rounded heel sits at the handle joint; the drop
  // door underneath discharges the load while the attachment is raised.
  const width=1.49,baseX=handleEnd.x,baseY=handleEnd.y;
  const profile=points=>points.map(([x,y])=>[baseX+x,baseY+y]);
  const bucket=(x,y,depth=0)=>V(baseX+x,baseY+y,oz+depth);
  const sidePlate=(id,points,depth,thickness,mat,bevel=.008)=>
    plate(id,profile(points),oz+depth,thickness,mat,'benna',bevel);
  const skin=(id,a,b,z0,z1,mat)=>{
    quad(id,[bucket(...a,z0),bucket(...b,z0),bucket(...b,z1),bucket(...a,z1)],mat,'benna');
  };
  const side=[[-.21,-.15],[-.169,.005],[-.046,.12],[.216,.191],[.57,.16],[.974,.095],
    [1.302,.016],[1.373,-.044],[1.322,-.284],[1.26,-.61],[1.22,-.867],[1.188,-1.011],
    [1.056,-1.099],[.631,-1.071],[.237,-1.015],[-.030,-.906],[-.201,-.715],[-.272,-.499],[-.294,-.317]];
  const bridleSeat=[-.04,-.42];
  const casting=[[-.192,-.403],[-.148,-.245],[-.038,-.195],[.119,-.24],[.224,-.40],
    [.392,-.517],[.793,-.619],[1.165,-.658],[1.208,-.748],[.968,-.761],[.585,-.695],
    [.293,-.607],[.113,-.538],[-.038,-.562],[-.151,-.522]];
  for(const sign of [-1,1]){
    const flank=sign*(width*.5-.04);
    sidePlate('rb-dipper-side',side,flank,.092,bucketMetal,.023);
    sidePlate('rb-dipper-brace',casting,flank+sign*.062,.056,bucketMetal,.012);
    sidePlate('rb-dipper-edge-strip',[[1.251,-.003],[1.361,-.048],[1.29,-.394],[1.19,-.941],[1.104,-.987],[1.133,-.752]],
      flank+sign*.06,.042,edgeIron,.008);
    sidePlate('rb-dipper-welded-wear-pad',[[.878,-.114],[.98,-.136],[.839,-.633],[.762,-.608]],flank+sign*.059,.044,bucketMetal,.013);
    const bottom=[[.007,-.863],[.305,-.986],[.681,-1.024],[1.137,-1.027],[1.16,-.924],[.653,-.911],[.291,-.885],[.064,-.798]];
    sidePlate('rb-dipper-door-side',bottom,flank+sign*.066,.056,edgeIron);
    for(const [x,y] of [[-.053,-.386],[.200,-.461],[.895,-.203],[.794,-.536],[1.23,-.225],[1.12,-.843]])
      bolts(baseX+x,baseY+y,oz+flank+sign*.104,.032,sign);
  }
  // Rolled back sheet and curved door are real cross-bucket plates. The
  // front sheet climbs towards the teeth; the upper mouth remains open.
  const heel=[[-.293,-.308],[-.278,-.497],[-.209,-.69],[-.04,-.867],[.23,-.981]];
  for(let i=0;i<heel.length-1;i++)skin('rb-heel-bend-'+i,heel[i],heel[i+1],-width*.473,width*.473,bucketMetal);
  const door=[[.1,-.906],[.3,-1.077],[.71,-1.177],[1.097,-1.189],[1.203,-1.023]];
  for(let i=0;i<door.length-1;i++)skin('rb-drop-door-'+i,door[i],door[i+1],-width*.47,width*.47,insideMetal);
  const front=[[1.166,-1.028],[1.23,-.815],[1.274,-.562],[1.326,-.26],[1.375,-.030],[1.405,.022]];
  for(let i=0;i<front.length-1;i++)skin('rb-dipper-front-'+i,front[i],front[i+1],-width*.49,width*.49,bucketMetal);
  bar(bucket(1.362,-.037,-width*.5),bucket(1.362,-.037,width*.5),.094,edgeIron,'benna',.101);
  // Four replaceable upward-facing cutting points with cast adapters.
  for(let i=0;i<4;i++){
    const u=i/3,at=width*(-.43+.86*u),length=.59+.115*(1-Math.sin(u*Math.PI));
    const tooth=[[1.22,-.099],[1.403,-.10],[1.514,.147],[1.554,length*.65],[1.584,length],
      [1.544,length-.011],[1.399,length*.68],[1.245,.179]];
    sidePlate('rb-dipper-upturned-tooth-'+i,tooth,at,.183,edgeIron,.014);
    disc(baseX+1.36,baseY+.023,oz+at+.101,.037,.043,'iron','bulloneria',14);
  }
  for(const sign of [-1,1]){
    const far=sign*.411;
    const clevis=[[.116,.127],[.016,.199],[-.127,.157],[-.234,.021],[-.252,-.070],
      [-.188,-.156],[-.07,-.209],[.13,-.179],[.212,-.068],[.214,.024]];
    sidePlate('rb-open-back-socket',clevis,far,.124,boomMetal,.016);
    const left=alongArm(reach-.38);left.z=oz+far;
    const right=bucket(.31,-.401,far);
    bar(left,right,.078,boomMetal,'benna',.099);
  }
  pin(handleEnd.x,handleEnd.y,oz,.121,.995,'benna');
  rod(bucket(-.04,-.425,-width*.55),bucket(-.04,-.425,width*.55),.085,boomMetal,'benna',22);
  for(const s of [-1,1])disc(baseX+bridleSeat[0],baseY+bridleSeat[1],oz+s*width*.557,.124,.047,edgeIron,'benna',26);
  const lowerCenter=bucket(.285,.375);
  for(const sign of [-1,1]){
    // Forked bail lifts on lugs beside the shell, leaving the mouth clear.
    const points=[[-.04,-.42],[-.108,-.244],[.018,.081],[.20,.353]];
    const bail=points.map(([x,y],i)=>bucket(x,y,sign*(width*.51-i*.171)));
    for(let j=1;j<bail.length;j++)bar(bail[j-1],bail[j],.096,bucketMetal,'benna',.075);
    const block=[[-.263,.093],[-.208,.128],[.113,.130],[.238,.062],[.258,-.016],[.172,-.105],[-.158,-.118],[-.267,-.033]];
    plate('rb-horizontal-hoist-block',block.map(([x,y])=>[lowerCenter.x+x,lowerCenter.y+y]),
      oz+sign*.116,.061,boomMetal,'trasmissione',.014);
    disc(lowerCenter.x,lowerCenter.y,oz+sign*.165,.065,.050,edgeIron,'trasmissione',20);
  }
  disc(lowerCenter.x,lowerCenter.y,oz,.121,.208,'iron','trasmissione',22);
  // A rope running over a wheel starts and ends at a tangent, rather
  // than piercing the hub. Twin falls return to the swivelled hoist block.
  function ropeTangent(c,r,target,side) {
    const vx=target.x-c.x,vy=target.y-c.y,d2=vx*vx+vy*vy;
    const a=r*r/d2,b=side*r*Math.sqrt(Math.max(0,d2-r*r))/d2;
    return V(c.x+a*vx-b*vy,c.y+a*vy+b*vx,c.z);
  }
  const reeve=(a,b,r=.014)=>beam(a,b,r,'track','tubazioni');
  const leadCentre=V(.205,3.78,oz+.08);
  bar(V(-.24,3.39,oz+.08),leadCentre,.092,boomMetal,'telaio',.103);
  spokedSheave(leadCentre,.213,.079,3);
  const drum=V(-.76,2.55,oz+.11),leadEntry=ropeTangent(leadCentre,.209,drum,-1);
  reeve(drum,leadEntry);
  for(const side of [-1,1]){
    const hc=tip.clone().add(V(0,0,side*.371)),lc=lowerCenter.clone().add(V(0,0,side*.107));
    const leftTangent=ropeTangent(hc,sheaveRadius-.027,leadCentre,-1);
    const fairlead=ropeTangent(leadCentre,.206,leftTangent,1);
    reeve(fairlead,leftTangent);
    const tangent=ropeTangent(hc,sheaveRadius-.027,lc,1);
    const fallEnd=ropeTangent(lc,.148,tangent,side);
    reeve(tangent,fallEnd,.016);
    const anchor=V(-2.02,3.50,oz+side*.245);
    const pinPoint=onBoom(.952,.152);pinPoint.z=oz+side*.338;
    reeve(anchor,pinPoint,.014);
  }
  // Cast-machine maintenance features visible at the front of the house.
  plate('face-fairlead-cover',[[.11,1.48],[.95,1.45],[.88,1.63],[.57,2.51],[.22,2.69],[-.17,2.755]],oz-.41,.165,ochre,'lamierati',.012);
  const faceStart=V(.12,2.7,oz-.65),faceEnd=V(.55,2.48,oz-.65);
  bar(faceStart,faceEnd,.043,ochre,'lamierati',.64);
  // Machine house and track frames correspond to the same full-size casting.
  // The near-side doorway is large enough for the operator to stand in.
  const stretchCache=new Map();
  const scaledGeometry=(geometry,matrix)=>{
    const key=geometry.uuid+'|'+matrix.elements.map(n=>Math.round(n*1e7)).join(',');
    if(stretchCache.has(key))return stretchCache.get(key);
    const copy=geometry.clone();copy.applyMatrix4(matrix);stretchCache.set(key,copy);
    return copy;
  };
  const liftHouse=new T.Matrix4().makeScale(1,1.075,1);
  const toWorld=new T.Matrix4(),toLocal=new T.Matrix4(),localGain=new T.Matrix4();
  for(const p of parts.slice(runningGearCount,endHouse)){
    p.position=p.position.clone();
    p.position.y=deckTop+(p.position.y-deckTop)*1.075;
    if(p.captionPoint)p.captionPoint.y=deckTop+(p.captionPoint.y-deckTop)*1.075;
    const upright=Math.abs(p.quaternion.x)+Math.abs(p.quaternion.y)+Math.abs(p.quaternion.z)<.00001;
    if(upright){p.scale=p.scale.clone();p.scale.y*=1.075;continue;}
    toWorld.compose(V(),p.quaternion,p.scale);toLocal.copy(toWorld).invert();
    localGain.copy(toLocal).multiply(liftHouse).multiply(toWorld);
    p.geometry=scaledGeometry(p.geometry,localGain);
  }
  // Give the cabin a single physical paint scale. Curves, roof bays and access
  // panels otherwise repeat an identical rust spot at the centre of each sheet.
  const enamelSurfaces=new Set([ochre,lower,roofMetal,bucketMetal,boomMetal,crowdMetal]);
  const point=V(),direction=V();
  for(const part of parts){
    if(!enamelSurfaces.has(part.material) || !['lamierati','cabina','benna','braccio'].includes(part.group))continue;
    const g=part.geometry.clone();
    const vertices=g.getAttribute('position'),normals=g.getAttribute('normal'),uv=g.getAttribute('uv');
    for(let k=0;k<vertices.count;k++){
      point.fromBufferAttribute(vertices,k).multiply(part.scale).applyQuaternion(part.quaternion).add(part.position);
      direction.fromBufferAttribute(normals,k).applyQuaternion(part.quaternion);
      const ax=Math.abs(direction.x),ay=Math.abs(direction.y),az=Math.abs(direction.z);
      const u=ax>ay&&ax>az?point.z:point.x;
      const v=ay>ax&&ay>az?point.z:point.y;
      uv.setXY(k,u*.71+.143,v*.67+.323);
    }
    part.geometry=g;
  }
  // A common visual scale per complete machine preserves relative dimensions
  // when the detachable parts are captured by the camera and the motion rig.
  const scale=.826;
  const bearing=new T.Quaternion().setFromAxisAngle(V(0,1,0),-.135);
  // The crawler in the reference is broadside to the camera; the independent
  // house is slewed towards it. Keep the common race axis stationary.
  const carriageRotation=new T.Quaternion().setFromAxisAngle(V(0,1,0),.345);
  const race=V(-1.565,0,0),trackStretch=1.19;
  const trackScale=new T.Matrix4().makeScale(trackStretch,1,1);
  for(const p of parts.slice(0,runningGearCount)){
    // Scale the footprint in the track axis before slewing it relative to
    // the cab. This preserves the curvature of each shoe around its idler.
    const dx=p.position.x-race.x;
    p.position=p.position.clone();p.position.x=race.x+dx*trackStretch+.32;
    toWorld.compose(V(),p.quaternion,p.scale);toLocal.copy(toWorld).invert();
    localGain.copy(toLocal).multiply(trackScale).multiply(toWorld);
    p.geometry=scaledGeometry(p.geometry,localGain);
    p.position.sub(race).applyQuaternion(carriageRotation).add(race);
    p.quaternion=carriageRotation.clone().multiply(p.quaternion);
  }
  for(const p of parts){
    p.position.applyQuaternion(bearing).multiplyScalar(scale);
    p.quaternion=bearing.clone().multiply(p.quaternion);
    p.scale.multiplyScalar(scale);
    if(p.captionPoint)p.captionPoint.applyQuaternion(bearing).multiplyScalar(scale);
  }
}
