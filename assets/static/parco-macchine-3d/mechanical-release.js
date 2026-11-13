// Mechanical release coordinates come from the assembled parts, so the
// corresponding pin and actuator remain coaxial after the machine is turned.
const TAU=Math.PI*2;

function chassisGuides(T,machine,unit) {
  const shoes=[],byPart=new Map();
  // Each main tread plate is followed by its own grousers and guide shoe.
  // Use the structural plate rather than a world-axis assumption: the cable
  // shovel's undercarriage sits at an angle to its upper house.
  let current=null;
  machine.parts.forEach((p,i)=>{
    if(p.group!=='cingoli')return;
    if((p.geometry.type==='BoxGeometry'||p.geometry.type==='ExtrudeGeometry')&&p.scale.x>2.70*p.scale.y&&p.scale.z>6.8*p.scale.y){
      current={p,indices:[]};shoes.push(current);
    }
    if(current)current.indices.push(i);
  });
  const count=Math.floor(shoes.length/2);
  const across=new T.Vector3(0,0,1);
  if(count<3)return {byPart,across};
  const near=shoes[count].p.position,far=shoes[0].p.position;
  across.subVectors(near,far).normalize();
  for(let track=0;track<2;track++){
    const run=shoes.slice(track*count,(track+1)*count), side=track?1:-1;
    const centre=new T.Vector3();
    for(const {p} of run)centre.add(p.position);
    centre.multiplyScalar(1/run.length);
    // Start peeling at the crown; the lower section comes off last.
    let seam=0;
    run.forEach(({p},i)=>{if(p.position.y>run[seam].p.position.y+.0001)seam=i;});
    for(let i=0;i<run.length;i++){
      const {p,indices}=run[i];
      const t=(i-seam+run.length)%run.length/run.length;
      const tangent=new T.Vector3().subVectors(run[(i+1)%run.length].p.position,run[(i+run.length-1)%run.length].p.position).normalize();
      const radial=new T.Vector3().crossVectors(tangent,across).normalize();
      if(radial.dot(p.position.clone().sub(centre))<0)radial.negate();
      const lift=.4+.38*Math.sin(t*Math.PI);
      const extraction=across.clone().multiplyScalar(side*unit*lift)
        .addScaledVector(radial,unit*(.24+.46*Math.sin(t*Math.PI)))
        .addScaledVector(tangent,unit*(.33-.65*t));
      extraction.y=Math.max(-.11*unit,extraction.y)+.13*unit;
      const axis=across.clone().multiplyScalar(side);
      const hinge=p.position.clone().addScaledVector(tangent,-.105*unit);
      const lead=across.clone().multiplyScalar(side*.23*unit);
      for(const index of indices)byPart.set(index,{
        t,side,axis,lead,extraction,offset:machine.parts[index].position.clone().sub(hinge),
        seatTurn:(.11+.45*Math.sin(t*Math.PI))*side,
        featured:track===1&&index===indices[0]&&i===seam
      });
    }
  }
  return {byPart,across};
}

function ramGuides(T,machine) {
  const guides=[];
  for(const p of machine.parts){
    if(p.group!=='pistoni'||p.material.name!=='Stelo cromato'||p.scale.y<=3*p.scale.x)continue;
    const axis=new T.Vector3(0,1,0).applyQuaternion(p.quaternion).normalize();
    guides.push({p,axis,seal:p.position.clone().addScaledVector(axis,-p.scale.y/2)});
  }
  return guides;
}

function closestRam(part,guides) {
  let best=null,score=Infinity;
  for(const g of guides){
    const delta=part.position.clone().sub(g.seal),along=delta.dot(g.axis);
    const perpendicular=delta.addScaledVector(g.axis,-along).length();
    // A near-zero perpendicular error alone is ambiguous for two cylinders
    // at opposite ends of the boom. Penalise distance beyond the actual ram.
    const dist=perpendicular+Math.max(0,Math.abs(along)-g.p.scale.y*1.6)*.8;
    if(dist<score){best=g;score=dist;}
  }
  return best;
}

export function mechanicalGuides(T,machine,unit,center) {
  const {byPart,across}=chassisGuides(T,machine,unit);
  const historical=machine.era===0;
  const rams=ramGuides(T,machine);
  const highest=machine.parts.reduce((y,p)=>Math.max(y,p.position.y),0);
  const hub=historical?machine.parts.find(p=>p.group==='trasmissione'&&p.geometry.type==='CylinderGeometry'&&p.position.y>highest*.88):null;
  const hardware=machine.parts.filter(p=>p.group==='bulloneria'&&p.geometry.type==='BufferGeometry'&&p.position.y>1.3*unit);
  // Pick genuine, recognisable components for the mid-transition focal plane.
  // The projected rail is sparse: each item has its own screen-space station.
  const details=new Map();
  const feature=(p,row,column,depth)=>{if(p)details.set(p,{row,column,depth});};
  const partOf=(group,pred)=>machine.parts.find(p=>p.group===group&&pred(p));
  feature(partOf('trasmissione',p=>p.geometry.type==='LatheGeometry'),.48,.50,.42);
  const gear=partOf('trasmissione',p=>p.geometry.type==='ExtrudeGeometry'&&p.position.y<unit);
  if(gear){
    // Take the actual wheel's neighbouring ring and centre cap, keeping their
    // common axle. The separated layers show what would otherwise be a flat disc.
    const sameAxle=p=>{
      const delta=p.position.clone().sub(gear.position),z=delta.dot(across);
      return Math.abs(z)<.59*unit&&delta.addScaledVector(across,-z).length()<.025*unit;
    };
    const ring=partOf('trasmissione',p=>p.geometry.type==='TorusGeometry'&&sameAxle(p));
    const cap=partOf('trasmissione',p=>p.geometry.type==='CylinderGeometry'&&p.scale.x>.10*unit&&p.scale.x<.24*unit&&sameAxle(p));
    for(const [p,layer] of [[gear,0],[ring,1],[cap,2]]){
      if(p)details.set(p,{row:-.09,column:.31,depth:.48,wheelAxis:across,layer:layer*unit*.22});
    }
  }
  const shoeEntry=[...byPart].find(([,g])=>g.featured);
  if(shoeEntry)feature(machine.parts[shoeEntry[0]],-.56,.54,.29);
  const screw=hardware.reduce((largest,p)=>!largest||p.scale.x>largest.scale.x?p:largest,null);
  feature(screw,.26,.72,.12);
  if(historical){
    feature(partOf('trasmissione',p=>p.position.y>highest*.88&&p.geometry.type==='ExtrudeGeometry'),.13,.61,.50);
  }else{
    feature(rams[rams.length-1]?.p,.07,.61,.56);
  }
  return {byPart,across,historical,rams,hub:hub?.position,details,unit,center};
}

// Refine the initial mechanical action from the generic assembly plan. The
// subsequent camera-space flight is shared by all pieces.
export function planMechanicalRelease(T,p,index,guides,plan) {
  const {unit,across}=guides;
  const pos=p.position,group=p.group,side=plan.side;
  const seatAxis=plan.axis.clone(),lead=new T.Vector3(),offset=new T.Vector3();
  let seatTurn=.028*plan.spin, screwTurn=0, row=plan.row;
  let releaseWindow=.12, headStart=.041, fanStart=.025;
  const shoe=guides.byPart.get(index);
  if(group==='bulloneria'){
    seatAxis.set(0,1,0).applyQuaternion(p.quaternion).normalize();
    if(p.geometry.type!=='BufferGeometry'&&seatAxis.dot(pos.clone().sub(guides.center))<0)seatAxis.negate();
    const extent= Math.max(p.scale.x,p.scale.z);
    lead.copy(seatAxis).multiplyScalar(unit*.16+Math.min(.24,extent*3.2));
    const {threadPitch,threadTurns}=p.geometry.userData;
    screwTurn=(threadTurns||.30)*TAU;
    if(threadPitch){
      // During unthreading, advance one scaled pitch for each full turn.
      plan.threadRise=Math.abs(p.scale.y)*threadPitch*threadTurns;
      plan.clearance=lead.length();
    }
    seatTurn=screwTurn+.2;
    headStart=.076;fanStart=.049;releaseWindow=.15;
  }else if(shoe){
    lead.copy(shoe.lead);plan.extraction.copy(shoe.extraction);
    seatAxis.copy(shoe.axis);offset.copy(shoe.offset);row=shoe.t;
    seatTurn=shoe.seatTurn;
    headStart=.038;fanStart=.017;releaseWindow=.13;
  }else if(group==='pistoni'&&guides.rams.length){
    const ram=closestRam(p,guides.rams);
    seatAxis.copy(ram.axis);
    const stem=p===ram.p;
    const along=pos.clone().sub(ram.seal).dot(ram.axis);
    const movingEnd=along>ram.p.scale.y*.63;
    lead.copy(seatAxis).multiplyScalar(unit*(stem||movingEnd?.83:-.16));
    plan.extraction.copy(across).multiplyScalar(unit*(side*.85+(stem?.28:0)));
    plan.extraction.y+=unit*(.44+row*.41);
    seatTurn=stem?.31:.075;
    headStart=.089;fanStart=.06;releaseWindow=.16;
  }else if(group==='trasmissione'&&guides.hub&&pos.y>guides.hub.y-unit*.63){
    // Both annular rims, all five spokes and the hub initially revolve as a
    // single sheave. Only after release do the two faces move apart.
    seatAxis.copy(across);
    offset.copy(pos).sub(guides.hub);offset.addScaledVector(across,-offset.dot(across));
    const face=pos.clone().sub(guides.hub).dot(across)>.19*unit?1:-1;
    lead.copy(across).multiplyScalar(face*unit*.29);
    plan.extraction.copy(across).multiplyScalar(face*unit*.86);
    plan.extraction.y+=unit*.48;row=.55;
    screwTurn=1.24;seatTurn=1.34;headStart=.095;fanStart=.083;releaseWindow=.18;
  }else if(group==='trasmissione'){
    seatAxis.copy(across);
    lead.copy(across).multiplyScalar(unit*side*.29);
    seatTurn=side*.61;
    plan.extraction.copy(across).multiplyScalar(unit*side*(.56+.26*row));
    plan.extraction.y+=.32*unit;
  }else if(group==='tubazioni'){
    lead.copy(across).multiplyScalar(unit*side*(guides.historical?.34:.21));
    seatTurn=guides.historical?.025:.12;
    if(guides.historical)plan.extraction.y+=unit*.52;
  }else if(group==='vetri'){
    lead.copy(across).multiplyScalar(unit*side*.29);seatTurn=side*.15;
  }else if(group==='benna'||group==='braccio'){
    // Radial pins are built on cylindrical geometry with the local Y-axis
    // normal to the side plates. Pull them along this axis before transport.
    const axis=new T.Vector3(0,1,0).applyQuaternion(p.quaternion).normalize();
    if(p.geometry.type==='CylinderGeometry'&&Math.abs(axis.dot(across))>.89){
      if(axis.dot(across)*side<0)axis.negate();
      lead.copy(axis).multiplyScalar(unit*(.23+Math.min(.41,p.scale.y*.68)));
      seatAxis.copy(axis);screwTurn=.22;seatTurn=.53;
    }else{
      lead.copy(across).multiplyScalar(unit*.11*side);seatTurn=side*.089;
    }
  }else{
    lead.copy(across).multiplyScalar(unit*side*.12);
  }

  // Dense shoes leave in perimeter order; lighter fasteners are exchanged
  // across the middle while the largest structures are already clear.
  const family=plan.family,bulk=plan.bulk;
  const begin=.006+family.order*.105+row*(shoe?.093:group==='bulloneria'?.054:.029)+(side<0?.009:0);
  const seated=begin+releaseWindow;
  const depart=Math.max(seated+.014,.215+family.order*.092+row*(group==='bulloneria'?.144:shoe?.120:.054)+(side<0?.019:0));
  const inspection=guides.details.get(p);
  const end=inspection ? .65 : depart+.192+(group==='bulloneria'?.048:0)-bulk*.027;
  Object.assign(plan,{begin,seated,inspection,departure:inspection?Math.min(.36,depart):depart,end,leadEnd:begin+headStart,fanBegin:begin+fanStart,
    seatAxis,lead,offset,screwTurn,seatTurn,row});
}
