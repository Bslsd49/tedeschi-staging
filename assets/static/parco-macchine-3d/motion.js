import {mechanicalGuides,planMechanicalRelease} from './mechanical-release.js';

// Mechanical release order. The joining sequence uses the same paths backwards:
// the frame seats first and the fasteners return last.
const FAMILY = {
  bulloneria:   { order: 0.00, travel: 0.52, turns: 2.30, bulk: 0.00 },
  cingoli:      { order: 0.20, travel: 0.95, turns: 0.84, bulk: 0.12 },
  tubazioni:    { order: 0.28, travel: 0.85, turns: 0.55, bulk: 0.22 },
  vetri:        { order: 0.33, travel: 1.05, turns: 0.37, bulk: 0.43 },
  lamierati:    { order: 0.38, travel: 1.15, turns: 0.43, bulk: 0.49 },
  pistoni:      { order: 0.44, travel: 1.20, turns: 0.49, bulk: 0.27 },
  trasmissione: { order: 0.54, travel: 1.08, turns: 0.64, bulk: 0.35 },
  benna:        { order: 0.61, travel: 1.18, turns: 0.42, bulk: 0.69 },
  motore:       { order: 0.68, travel: 1.18, turns: 0.38, bulk: 0.65 },
  cabina:       { order: 0.75, travel: 1.28, turns: 0.34, bulk: 0.70 },
  braccio:      { order: 0.84, travel: 1.42, turns: 0.29, bulk: 0.85 },
  telaio:       { order: 0.96, travel: 1.20, turns: 0.24, bulk: 1.00 }
};

const TAU = Math.PI * 2;
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(lo, hi, value) {
  const t = clamp((value - lo) / (hi - lo), 0, 1);
  return t * t * (3 - 2 * t);
}

// Seed once per part, never per frame. A paused or reversed transition is
// identical each time the playhead returns to the same point.
function partRandom(partIndex, modelIndex) {
  let seed = Math.imul(partIndex + 1, 0x85ebca77) ^ Math.imul(modelIndex + 1, 0xc2b2ae3d);
  return () => {
    seed += 0x6d2b79f5;
    let n = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    n ^= n + Math.imul(n ^ (n >>> 7), 61 | n);
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}

function prepareModel(THREE, machine, modelIndex) {
  const bounds = new THREE.Box3();
  for (const part of machine.parts) bounds.expandByPoint(part.position);
  const center = bounds.getCenter(new THREE.Vector3());
  const dimensions = bounds.getSize(new THREE.Vector3());
  const width = Math.max(1, dimensions.x);
  const height = Math.max(1, dimensions.y);
  const depth = Math.max(1, dimensions.z);
  const unit = width / 9;
  // Mirror mechanical release axes with the attachment. The transport lanes,
  // in contrast, are in camera space and remain attached to screen edges.
  const bucket = machine.parts.find(part=>part.group==='benna');
  const cab = machine.parts.find(part=>part.group==='cabina');
  const facing = machine.facing === -1 || (bucket && cab && bucket.position.x < cab.position.x) ? -1 : 1;
  // Keep screw flights tied to their row on the machine. Ranking within a row
  // gives adjacent fasteners a small, consistent delay in removal and fitting.
  const hardwareRows = new Map();
  const hardware = new Map();
  machine.parts.forEach((part, index) => {
    if (part.group !== 'bulloneria') return;
    const pos = part.position;
    const under = pos.y < 1.07;
    const zone = under ? 'track' : pos.x*facing < -.8 ? 'hood' : 'arm';
    const face = pos.z >= 0 ? 1 : -1;
    const level = under ? (pos.y < .34 ? 0 : pos.y < .72 ? 1 : 2) : Math.floor(pos.y / .8);
    const key = zone + ':' + face + ':' + level;
    if (!hardwareRows.has(key)) hardwareRows.set(key, []);
    hardwareRows.get(key).push({ index, zone, face, level, x:pos.x*facing, y:pos.y });
  });
  for (const row of hardwareRows.values()) {
    row.sort((a,b)=>a.x-b.x || a.y-b.y || a.index-b.index);
    row.forEach((item,i)=>hardware.set(item.index,{...item, fraction:(i+.5)/row.length}));
  }

  const guides=mechanicalGuides(THREE,machine,unit,center);
  const parts = machine.parts.map((part, index) => {
    const random = partRandom(index, modelIndex);
    const family = FAMILY[part.group] || FAMILY.lamierati;
    const pos = part.position, group = part.group;
    const x = (pos.x-center.x)*facing/width, y = (pos.y-center.y)/height;
    const side = pos.z >= 0 ? 1 : -1;
    const axle = new THREE.Vector3(0,1,0).applyQuaternion(part.quaternion).normalize();
    const out = new THREE.Vector3(x,.2+y*.35,side);
    if(axle.dot(out)<0) axle.negate();
    const extraction = new THREE.Vector3();
    let rowPhase = clamp(x+.5,0,1), lane = x<-.12?-1:1;
    let laneLevel = clamp(y*1.2,-.75,.75);
    const beltCenter=-1.68*unit, beltHeight=.54*unit;
    const beltX=(pos.x*facing-beltCenter)/unit, beltY=(pos.y-beltHeight)/unit;
    const h=hardware.get(index);
    if(h) {
      rowPhase=h.fraction;
      if(h.zone==='track') {
        // Small hardware makes a comb along the two sides of the crawler.
        const seatX=unit*(-4.58+5.83*h.fraction+side*.14);
        const seatY=unit*(-.02 + .25*h.level + (side>0?0:.16) + .15*Math.sin(h.fraction*Math.PI));
        extraction.set(seatX-pos.x*facing,seatY-pos.y,side*unit*(1.49+.23*h.level));
        lane=h.fraction<.60?-1:1; laneLevel=-.80+.24*h.level+(side<0?.10:0);
      } else {
        extraction.set(unit*(h.zone==='hood'?-.97:.64),unit*(.55+.31*h.level),side*unit*(.71+.61*h.fraction));
        lane=h.zone==='hood'?-1:1;laneLevel=.17+.14*h.level;
      }
    } else if(group==='cingoli') {
      // Unroll the pitch gently along its own run; paired links, shoes and
      // grousers keep their pitch rather than radiating toward a common point.
      extraction.set(unit*(beltX*.36-.36+side*.16),
        unit*(beltY*.47+.09+.17*Math.sin((beltX/4.7+.5)*Math.PI)),
        side*unit*(1.05+.11*Math.abs(beltX)));
      rowPhase=clamp(beltX/5+.5,0,1); lane=beltX<0?-1:1;
      laneLevel=-.78+.35*beltY+(side<0?.13:0);
    } else if(group==='trasmissione') {
      extraction.set(unit*(beltX*.16-.15),unit*(beltY*.23+.28),side*unit*.60);
      lane=pos.x*facing>-.62?1:-1; laneLevel=-.52;
    } else if(group==='vetri') {
      extraction.set(unit*(.13+.30*x),unit*(1.24+.22*y),side*unit*.9);
      lane=-1; laneLevel=.78;
    } else if(group==='lamierati') {
      extraction.set(unit*(-1.62+.25*x),unit*(.56+.34*y),side*unit*.8);
      lane=-1; laneLevel=.39;
    } else if(group==='motore') {
      extraction.set(unit*(-1.06+.19*x),unit*(.34+.31*y),-unit*.65);
      lane=-1; laneLevel=.01;
    } else if(group==='cabina') {
      extraction.set(unit*(-.14+.28*x),unit*(.85+.39*y),side*unit*.41);
      lane=-1; laneLevel=.64;
    } else if(group==='pistoni') {
      extraction.copy(axle).multiplyScalar(unit*.58).add(new THREE.Vector3(unit*.54,unit*.39,side*unit*.32));
      lane=1; laneLevel=.52;
    } else if(group==='benna') {
      extraction.set(unit*(1.14+.23*x),unit*(.10+.25*y),side*unit*.52);
      lane=1; laneLevel=-.61;
    } else if(group==='braccio'||group==='tubazioni') {
      extraction.set(unit*(.56+.61*x),unit*((group==='braccio'?.71:1.11)+.35*y),side*unit*.24);
      lane=1; laneLevel=group==='braccio'?.55:.87;
    } else {
      extraction.set(unit*.26*x,unit*.25,side*unit*.16);
      lane=x<0?-1:1;laneLevel=-.24;
    }
    if (group!=='pistoni') extraction.x*=facing;
    const box=part.geometry.boundingBox || (part.geometry.computeBoundingBox(),part.geometry.boundingBox);
    const ext=box.getSize(new THREE.Vector3()).multiply(part.scale);
    const dims=[Math.abs(ext.x),Math.abs(ext.y),Math.abs(ext.z)].sort((a,b)=>b-a);
    const size=smoothstep(.49,1.84,Math.sqrt(dims[0]*dims[1])/unit);
    const bulk=Math.max(family.bulk*.48,size*(group==='tubazioni'?.48:1));
    // Transport large components on a stable axis. They turn principally
    // after reaching the outside of the silhouette, far away from the lens.
    const axis=group==='bulloneria'?axle:new THREE.Vector3(.11+random()*.13,.88+random()*.08,side*(.22+random()*.14)).normalize();
    const boundRadius=ext.length()*.5+box.getCenter(new THREE.Vector3()).multiply(part.scale).length();
    const motion={part,extraction,axis,family,side,row:rowPhase,boundRadius,
      rest:new THREE.Matrix4().compose(pos,part.quaternion,part.scale),
      spin:family.turns*TAU*(h?.79:.62)*(side<0?-1:1)*(1-bulk*.59),bulk,
      lens:.16+.12*rowPhase+bulk*.30,
      laneX:lane*(.72+.37*rowPhase+1.07*bulk),laneY:laneLevel+(rowPhase-.5)*.32,
      arcX:lane*unit*(.67+1.31*bulk),arcY:unit*(.20+.28*laneLevel),
      defocus:.86+random()*.12
    };
    planMechanicalRelease(THREE,part,index,guides,motion);
    const releasedSpin=new THREE.Quaternion().setFromAxisAngle(motion.seatAxis,motion.seatTurn);
    const seatedPosition=pos.clone().add(motion.lead).add(extraction)
      .add(motion.offset.clone().applyQuaternion(releasedSpin)).sub(motion.offset);
    const releasedRotation=releasedSpin.multiply(part.quaternion);
    motion.seatedPosition=seatedPosition;
    motion.releasedRotation=releasedRotation;
    motion.released=new THREE.Matrix4().compose(seatedPosition,releasedRotation,part.scale);
    return motion;
  });
  return {parts,center,width,lastDeparture:Math.max(...parts.map(p=>p.end))};
}

/**
 * sample(from, to, t, writePart[, currentCamera])
 *
 * t is a linear playhead in [0,1], independent of time or input device.
 * writePart(modelIndex, partIndex, matrix, opacity, blur) must copy its matrix
 * immediately (e.g. mesh.setMatrixAt). Opacity and blur are normalized [0,1].
 * Only the nominated machines are written. For a static pose, pass the same
 * index twice. Builders may omit write calls entirely between static frames.
 */
export function createTransition(THREE, machines, camera) {
  const models = machines.map((machine, i) => prepareModel(THREE, machine, i));
  const position = new THREE.Vector3();
  const right = new THREE.Vector3();
  const up = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const eye = new THREE.Vector3();
  const target = new THREE.Vector3();
  const nearTarget = new THREE.Vector3();
  const fromEye = new THREE.Vector3();
  const wheelAxis = new THREE.Vector3();
  const wheelOrientation = new THREE.Quaternion();
  const spin = new THREE.Quaternion();
  const releaseSpin = new THREE.Quaternion();
  const orbitOffset = new THREE.Vector3();
  const rotation = new THREE.Quaternion();
  const matrix = new THREE.Matrix4();
  const hidden = new THREE.Matrix4().makeTranslation(0, -100000, 0);
  let heightFactor = 0.4;
  let aspect = 1;
  let cameraNear = 0.1, tanHorizontal=.5, sphereMargin=1.12;
  function outsideFrame(p,bound){
    fromEye.subVectors(p,eye);
    const z=fromEye.dot(forward);
    return z+bound<cameraNear || Math.abs(fromEye.dot(right))>z*tanHorizontal+bound*sphereMargin+.04;
  }

  function restState(modelIndex, visible, writePart, visibleOnly) {
    if(!visible && visibleOnly)return;
    const parts = models[modelIndex].parts;
    for (let i = 0; i < parts.length; i++) {
      writePart(modelIndex, i, visible ? parts[i].rest : hidden, visible ? 1 : 0, 0, visible);
    }
  }

  function sampleModel(modelIndex, disassembly, hand, writePart, visibleOnly) {
    const model = models[modelIndex];
    if(visibleOnly && disassembly>=model.lastDeparture)return;
    const distance = Math.max(model.width * 0.55,
      (model.center.x - eye.x) * forward.x +
      (model.center.y - eye.y) * forward.y +
      (model.center.z - eye.z) * forward.z
    );

    for (let i = 0; i < model.parts.length; i++) {
      const motion = model.parts[i];
      if(disassembly<=motion.begin) {
        writePart(modelIndex,i,motion.rest,1,0,true);
        continue;
      }
      if(disassembly>=motion.end) {
        if(!visibleOnly)writePart(modelIndex,i,hidden,0,0,false);
        continue;
      }
      if(disassembly>=motion.seated && disassembly<=motion.departure){
        writePart(modelIndex,i,motion.released,1,0,true);
        continue;
      }
      const part=motion.part;
      if(disassembly<motion.seated){
        const axial=smoothstep(motion.begin,motion.leadEnd,disassembly);
        const fan=smoothstep(motion.threadRise?motion.leadEnd:motion.fanBegin,motion.seated,disassembly);
        const withdrawal=motion.threadRise
          ? (motion.threadRise*axial+(motion.clearance-motion.threadRise)*fan)/motion.clearance
          : axial;
        const angle=motion.screwTurn*axial+(motion.seatTurn-motion.screwTurn)*fan;
        releaseSpin.setFromAxisAngle(motion.seatAxis,angle);
        orbitOffset.copy(motion.offset).applyQuaternion(releaseSpin).sub(motion.offset);
        position.copy(part.position).addScaledVector(motion.lead,withdrawal)
          .addScaledVector(motion.extraction,fan).add(orbitOffset);
        rotation.multiplyQuaternions(releaseSpin,part.quaternion);
        matrix.compose(position,rotation,part.scale);
        writePart(modelIndex,i,matrix,1,0,false);
        continue;
      }
      if(motion.inspection){
        const station=motion.inspection;
        const focusDepth=Math.max(cameraNear*3,distance*station.depth);
        const stationHeight=focusDepth*heightFactor;
        const approach=smoothstep(motion.departure,.534,disassembly);
        const crossing=smoothstep(.487,motion.end,disassembly);
        const side=-hand;
        const row=station.row+hand*.11;
        target.copy(eye).addScaledVector(forward,focusDepth)
          .addScaledVector(right,side*station.column*stationHeight*aspect)
          .addScaledVector(up,row*stationHeight);
        const nearDepth=Math.max(cameraNear*3,focusDepth*.42);
        nearTarget.copy(eye).addScaledVector(forward,nearDepth)
          .addScaledVector(right,side*(nearDepth*tanHorizontal*1.085+motion.boundRadius*sphereMargin+Math.abs(station.layer||0)+.12))
          .addScaledVector(up,(row+.22)*nearDepth*heightFactor);
        if(station.wheelAxis){
          wheelAxis.copy(forward).multiplyScalar(-.72).addScaledVector(right,side*.64).addScaledVector(up,.27).normalize();
          target.addScaledVector(wheelAxis,station.layer);
          nearTarget.addScaledVector(wheelAxis,station.layer*.64);
        }
        position.copy(motion.seatedPosition).lerp(target,approach)
          .addScaledVector(up,.38*approach*(1-approach)*distance*heightFactor)
          .lerp(nearTarget,crossing);
        if(visibleOnly&&crossing>.7&&outsideFrame(position,motion.boundRadius))continue;
        if(station.wheelAxis){
          wheelOrientation.setFromUnitVectors(station.wheelAxis,wheelAxis).multiply(part.quaternion);
          spin.setFromAxisAngle(wheelAxis,side*(.75*approach+1.45*crossing));
          wheelOrientation.premultiply(spin);
          rotation.slerpQuaternions(motion.releasedRotation,wheelOrientation,approach);
        }else{
          const turn=1.05*approach+1.76*crossing;
          spin.setFromAxisAngle(motion.axis,turn*side);
          rotation.multiplyQuaternions(spin,motion.releasedRotation);
          // The changing view exposes the helical shank, tread thickness
          // and the shoulder at the end of the polished piston rod.
          spin.setFromAxisAngle(up,side*(.58*approach+.26*crossing));
          rotation.premultiply(spin);
        }
        matrix.compose(position,rotation,part.scale);
        writePart(modelIndex,i,matrix,1,.36*approach+.64*crossing);
        continue;
      }
      const u=clamp((disassembly-motion.departure)/(motion.end-motion.departure),0,1);
      const flight=smoothstep(0,1,u),bow=4*flight*(1-flight);
      const lensDistance=Math.max(cameraNear*3,distance*motion.lens);
      const halfHeight=lensDistance*heightFactor;
      // Clear the entire bounding sphere past the side of the lens before
      // retiring the part. No perforated or translucent metal during the handover.
      const lane=motion.laneX+hand*.047;
      const clearance=halfHeight*aspect*1.055+motion.boundRadius*sphereMargin+.09;
      const exitX=Math.sign(lane)*Math.max(Math.abs(lane)*halfHeight*aspect,clearance);
      target.copy(eye).addScaledVector(forward,lensDistance)
        .addScaledVector(right,exitX)
        .addScaledVector(up,motion.laneY*halfHeight);
      // Tangential clearance before the part travels toward the lens.
      position.copy(motion.seatedPosition).lerp(target,flight)
        .addScaledVector(right,bow*motion.arcX).addScaledVector(up,bow*motion.arcY);
      // Large plates first move sideways, then approach the focal plane.
      const lateral=smoothstep(0,.93-.11*motion.bulk,u);
      position.addScaledVector(right,(lateral-flight)*fromEye.subVectors(target,motion.seatedPosition).dot(right));
      if(visibleOnly&&u>.55&&outsideFrame(position,motion.boundRadius))continue;
      spin.setFromAxisAngle(motion.axis,motion.spin*smoothstep(.031,.985,u));
      rotation.multiplyQuaternions(spin,motion.releasedRotation);
      matrix.compose(position,rotation,part.scale);
      const blur=smoothstep(.29-motion.bulk*.07,.92-motion.bulk*.12,u)*motion.defocus;
      writePart(modelIndex, i, matrix, 1, blur);
    }
  }

  function sample(from, to, progress, writePart, currentCamera = camera, visibleOnly=false) {
    const t = clamp(progress, 0, 1);
    if (from === to) {
      restState(from, true, writePart,visibleOnly);
      return;
    }
    if (t === 0 || t === 1) {
      restState(from, t === 0, writePart,visibleOnly);
      restState(to, t === 1, writePart,visibleOnly);
      return;
    }
    currentCamera.updateWorldMatrix(true, false);
    const world = currentCamera.matrixWorld;
    eye.setFromMatrixPosition(world);
    right.setFromMatrixColumn(world, 0).normalize();
    up.setFromMatrixColumn(world, 1).normalize();
    forward.setFromMatrixColumn(world, 2).normalize().negate();
    heightFactor = Math.tan(currentCamera.fov * Math.PI / 360) / currentCamera.zoom;
    aspect = currentCamera.aspect;
    tanHorizontal=aspect*heightFactor;
    sphereMargin=Math.hypot(1,tanHorizontal);
    cameraNear = currentCamera.near;
    // Swapping direction reverses the same spatial choreography, also while
    // dragging the playhead back and forth through a change.
    const hand = to > from ? 1 : -1;
    sampleModel(from, t, hand, writePart,visibleOnly);
    sampleModel(to, 1 - t, -hand, writePart,visibleOnly);
  }

  return { sample };
}
