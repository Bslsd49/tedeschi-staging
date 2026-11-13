// The working attachment and pin geometry follow the unobstructed front-quarter
// reference of the Series D machine. Coordinates are in metres, before mirroring.
export function buildSeriesDEquipment(T, kit) {
  const {V,plate,rod,disc,bar,pin,bolts,box,conduit,append,parts,identity,materials}=kit;
  const z=-.31, yellow=materials.paint;
  const cuttingEdge=materials.edge.clone();
  cuttingEdge.color.setHex(0xb6ab91);
  cuttingEdge.roughness=.55;
  const plainYellow=yellow.clone();
  plainYellow.color.setHex(0xffeca2);
  plainYellow.roughness=.54;
  const point=(xy,at=z)=>V(xy[0],xy[1],at);
  const mainPin=[-.68,1.58], elbow=[4.36,4.25], stickHead=[4.79,4.96];
  const attachmentPin=[4.14,1.15], linkStick=[4.24,1.61];
  const linkKnee=[5.17,1.49], linkBucket=[4.67,.892];

  // Paired side plates bridge a hollow welded box. Split upper and lower skins
  // share the same exact boundary with the flanks, even around the curved heel.
  function ribbon(id,path,a,b,mat,group) {
    const verts=[],uv=[],indices=[];
    let along=0;
    path.forEach(([x,y],i)=>{
      if(i)along+=Math.hypot(x-path[i-1][0],y-path[i-1][1]);
      verts.push(x,y,a,x,y,b);uv.push(along*.42,0,along*.42,(b-a)*.42);
      if(i){const k=2*i;indices.push(k-2,k-1,k,k,k-1,k+1);}
    });
    const geo=new T.BufferGeometry();
    geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));
    geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(indices);
    geo.computeVertexNormals();geo.computeBoundingBox();
    const c=geo.boundingBox.getCenter(V());geo.translate(-c.x,-c.y,-c.z);
    geo.name=id;const m=mat.clone();m.side=T.DoubleSide;
    append(geo,m,c,identity,V(1,1,1),group);
  }
  function boxSection(id,lower,upper,width,mat) {
    const outline=[...lower,...upper.slice(1,-1)];
    const zz=width*.5-.024;
    for(const sign of [-1,1])plate(id+'-flank',outline,z+sign*zz,.055,mat,'braccio',.010);
    ribbon(id+'-lower',lower,z-zz,z+zz,mat,'braccio');
    ribbon(id+'-upper',upper,z-zz,z+zz,mat,'braccio');
    for(const [index,path] of [lower,upper].entries()){
      for(const s of [-1,1])conduit(id+'-seam-'+index+'-'+s,path.map(v=>point(v,z+s*(zz+.012))),.0075,mat,'braccio',40);
    }
  }
  const under=[[-.73,1.46],[-.44,1.55],[-.06,2.10],[.29,2.62],[.49,2.82],[.72,2.99],
    [1.14,3.17],[1.98,3.37],[2.98,3.58],[3.84,3.78],[4.19,3.90],[4.38,4.04],[4.49,4.17],[4.48,4.28],[4.40,4.355]];
  const crown=[[4.40,4.355],[4.29,4.373],[4.11,4.304],[3.80,4.251],[3.08,4.186],[2.26,4.08],
    [1.29,4.007],[.90,3.95],[.62,3.87],[.41,3.79],[.20,3.675],[.045,3.56],[-.105,3.415],[-.31,3.16],
    [-.60,2.72],[-.96,1.88],[-1.012,1.68],[-.949,1.53],[-.85,1.475],[-.73,1.46]];
  boxSection('320d-reach-boom',under,crown,.494,yellow);
  const stickBack=[[4.805,5.018],[4.875,4.992],[4.96,4.90],[5.15,4.62],[5.30,4.395],
    [5.325,4.305],[5.306,4.015],[5.331,3.885],[5.32,3.817],[5.245,3.79],[5.184,3.74],
    [5.073,3.51],[4.94,3.105],[4.775,2.65],[4.59,2.16],[4.437,1.64],[4.25,1.246],
    [4.215,1.151],[4.172,1.10],[4.117,1.072]];
  const stickFront=[[4.117,1.072],[4.055,1.08],[3.994,1.145],[3.98,1.23],[4.004,1.41],
    [4.05,1.81],[4.12,2.64],[4.17,3.34],[4.205,3.85],[4.211,4.19],[4.25,4.346],
    [4.365,4.54],[4.47,4.695],[4.59,4.84],[4.728,4.984],[4.77,5.013],[4.805,5.018]];
  boxSection('320d-dipper',stickBack,stickFront,.365,plainYellow);
  function bearing(xy,r,width,mat=yellow,group='braccio') {
    for(const side of [-1,1]){
      disc(...xy,z+side*width*.5,r,.059,mat,group,32);
      disc(...xy,z+side*(width*.5+.035),r*.68,.027,'iron',group,24);
      bolts(...xy,z+side*(width*.5+.057),.021,side);
    }
    pin(...xy,z,r*.52,width+.09,group);
  }
  bearing(mainPin,.193,.61);
  bearing(elbow,.163,.534);
  bearing(stickHead,.102,.39);
  bearing(attachmentPin,.113,.41,yellow,'benna');
  for(const s of [-1,1]){
    plate('series-d-base-yoke',[[-1.14,1.345],[-.28,1.345],[-.41,1.59],[-.53,1.745],[-.71,1.78],[-.90,1.66]],
      z+s*.315,.107,yellow,'telaio',.022);
  }
  function ram(id,from,to,radius,fraction,barrel,at=z){
    const a=point(from,at),b=point(to,at),end=a.clone().lerp(b,fraction);
    const axis=b.clone().sub(a).normalize();
    rod(a,end,radius,barrel,'pistoni',28);
    rod(a.clone().lerp(b,.027),a.clone().lerp(b,.073),radius*1.065,'iron','pistoni',28);
    rod(end.clone().addScaledVector(axis,-.073),end,radius*1.115,'iron','pistoni',28);
    rod(end,b,radius*.60,'chrome','pistoni',28);
    // Hex gland, bronze guide and dark wiping lip at the rod exit. The
    // individual components remain concentric when seated.
    const along=t=>end.clone().addScaledVector(axis,t);
    rod(along(-.060),along(-.032),radius*1.06,'iron','pistoni',12);
    rod(along(-.029),along(-.010),radius*.83,'edge','pistoni',24);
    rod(along(-.008),along(.010),radius*.67,'rubber','pistoni',24);
    const nose=b.clone().addScaledVector(axis,-.13);
    rod(nose,nose.clone().addScaledVector(axis,.084),radius*.78,'iron','pistoni',20);
    for(const p of [a,b]){
      disc(p.x,p.y,p.z,radius*1.18,radius*1.86,barrel,'pistoni',28);
      disc(p.x,p.y,p.z+radius,radius*.55,.030,'edge','pistoni',20);
    }
    const takeoff=a.clone().lerp(end,.22);
    rod(takeoff.clone().add(V(0,0,radius*.60)),takeoff.clone().add(V(.025,0,radius*1.32)),.024,'bolt','tubazioni',10);
  }
  for(const side of [-1,1]){
    const at=z+side*.365;
    const pistonFoot=[-.30,1.47],pistonHead=[.25,3.58];
    ram('lift',pistonFoot,pistonHead,.115,.54,'black',at);
    disc(...pistonHead,z+side*.256,.148,.181,yellow,'braccio',28);
  }
  const feedRam=[1.45,4.111];
  for(const side of [-1,1])plate('320d-dipper-ram-saddle',[[1.27,4.018],[1.64,4.055],[1.56,4.167],[1.46,4.201],[1.38,4.167]],
    z+side*.118,.077,yellow,'braccio',.012);
  ram('dipper',feedRam,stickHead,.107,.575,'black');
  const curlHead=[5.267,3.826];
  ram('curl',curlHead,linkKnee,.101,.595,'black');
  bearing(curlHead,.098,.37,yellow,'braccio');
  let captionAnchor;
  for(const s of [-1,1]){
    const at=z+s*.228;
    const link=(name,a,b,r,depth,plane)=>{
      const len=Math.hypot(b[0]-a[0],b[1]-a[1]),nx=-(b[1]-a[1])/len,ny=(b[0]-a[0])/len;
      const points=[ [a[0]+nx*r,a[1]+ny*r],[b[0]+nx*r,b[1]+ny*r],[b[0]-nx*r,b[1]-ny*r],[a[0]-nx*r,a[1]-ny*r] ];
      plate(name,points,plane,depth,yellow,'benna',.014);
      if(name==='320d-rocker-link'&&s===1){
        // Register the lower corner of the date to the near-side rocker. Its
        // height leaves space for the caption below the assembled attachment.
        const contact=point(a,plane+depth*.5).lerp(point(b,plane+depth*.5),.24);
        captionAnchor={partIndex:parts.length-1,point:contact};
      }
      for(const p of [a,b])disc(...p,plane,r,depth,yellow,'benna',26);
    };
    link('320d-rocker-link',linkKnee,linkStick,.071,.069,at);
    link('320d-bucket-link',linkKnee,linkBucket,.092,.079,at+s*.074);
  }
  for(const [p,r,w] of [[linkKnee,.078,.73],[linkStick,.075,.61],[linkBucket,.084,.72]])
    pin(...p,z,r,w,'benna');

  // The main steel lines rise with the boom and cross the elbow in flexible
  // loops. Ports at the ends are concentric with the lines they terminate.
  for(let n=0;n<4;n++){
    const at=z-.176+n*.097,dy=n*.010;
    const feed=[[-.82,1.49],[-.88,1.74],[-.72,2.27],[-.37,3.04],[.05,3.66],[.45,3.93],
      [.90,4.046],[1.53,4.11],[2.90,4.235],[3.58,4.30],[3.85,4.32]];
    conduit('320d-pipe-'+n,feed.map(([x,y])=>V(x,y+dy,at)),.019,n%2?'paintDark':'paint','tubazioni',48);
    const end=point(feed.at(-1),at);end.y+=dy;
    rod(end.clone().add(V(-.06,-.006,0)),end.clone().add(V(.05,.006,0)),.033,'edge','tubazioni',12);
    const hose=[end,V(4.12,4.378+dy,at),V(4.49,4.40+dy,at+.055),V(4.72,4.30+dy,at+.13),
      V(4.80,4.03+dy,at+.146),V(4.74,3.85+dy,at+.146),V(4.56,3.80+dy,at+.146)];
    conduit('320d-curl-hose-'+n,hose,.025,'rubber','tubazioni',24);
    const ending=hose.at(-1);
    rod(ending.clone().add(V(-.058,0,0)),ending.clone().add(V(.03,0,0)),.037,'edge','tubazioni',10);
  }
  for(const [x,y] of [[-.19,3.43],[.86,4.04],[2.22,4.17],[3.56,4.315]]){
    box(x,y,z,.065,.043,.446,'paintDark','tubazioni');
    for(const s of [-1,1])bolts(x,y,z+s*.23,.016,s);
  }
  for(const s of [-1,1]){
    const at=z+s*.212;
    for(let j=0;j<2;j++){
      const off=j*.08;
      const line=[[4.88+off,3.74],[4.81+off,3.65],[4.70+off,3.58],[4.65+off,3.38],[4.57+off,2.87],[4.43+off,2.45],[4.37+off,2.31]];
      conduit('320d-stick-pipe-'+s+'-'+j,line.map(x=>point(x,at)),.0165,'paint','tubazioni',25);
      for(const xy of [line[0],line.at(-1)]){const p=point(xy,at);rod(p,p.clone().add(V(-.025,-.04,0)),.031,'edge','tubazioni',10);}
    }
  }
  // Flat non-toothed lip, curved rolled bucket back and independent hinge ears.
  // Its bottom plane and the underside of the two belts meet the same ground.
  const span=1.36;
  const pan=[[3.06,.067],[3.31,.034],[3.69,.020],[4.02,.020],[4.32,.027],[4.53,.057],
    [4.70,.112],[4.85,.207],[4.955,.333],[5.006,.472],[5.018,.602],[5.00,.719],[4.95,.818],[4.88,.866]];
  const sideProfile=[...pan,[4.67,.911],[4.57,.936],[4.41,.949],[4.28,.905],[4.211,.795],[4.13,.62],
    [4.04,.45],[3.91,.293],[3.74,.188],[3.55,.125],[3.15,.108]];
  ribbon('320d-yellow-rolled-pan',pan,z-span*.5,z+span*.5,plainYellow,'benna');
  for(const s of [-1,1]){
    const at=z+s*(span*.5-.026);
    plate('320d-yellow-bucket-cheek',sideProfile,at,.059,plainYellow,'benna',.012);
    const ear=[[4.016,.753],[4.001,1.081],[4.049,1.188],[4.124,1.236],[4.204,1.230],[4.271,1.184],
      [4.357,1.070],[4.543,1.005],[4.666,1.002],[4.752,.956],[4.792,.88],[4.779,.779],[4.695,.727]];
    plate('320d-direct-pin-lug',ear,z+s*.257,.094,yellow,'benna',.016);
    for(const [p,r] of [[attachmentPin,.135],[linkBucket,.122]])disc(...p,z+s*.299,r,.050,'paintDark','benna',28);
    conduit('320d-cheek-weld-'+s,pan.slice(1,-1).map(v=>point(v,at-s*.027)),.009,'paintDark','benna',30);
  }
  const edgeProfile=[[3.025,.054],[3.027,.028],[3.364,.025],[3.414,.048],[3.407,.084],[3.162,.079]];
  plate('320d-full-width-edge',edgeProfile,z,span+.046,cuttingEdge,'benna',.006);
  for(const s of [-1,0,1])rod(V(3.38,.068,z+s*span*.315),V(3.38,.083,z+s*span*.315),.031,'bolt','bulloneria',6);
  return captionAnchor;
}
