import {buildSeriesDEquipment} from './series-d-equipment.js';
/*
 * Original meshes, in metres. Exterior references:
 * Åkerman H14B, brochure 1988 and Volvo's historical archive.
 * Cat 320D L, Caterpillar AEHQ5880 (April 2007), pp. 1, 7, 15.
 * EC230, Volvo Product Guide 20062845 (2024), pp. 1, 10.
 * Attachment poses, service details and concealed parts are reconstructions.
 */
// Original small-scale surface maps. Long grooves are inscribed in both the
// albedo and the PBR channels, so wear remains visible as the model rotates.
const patinaCache = new WeakMap();
function wearFinish(T,era,kind){
  let table=patinaCache.get(T);
  if(!table){table=new Map();patinaCache.set(T,table);}
  const key=kind+":"+era;if(table.has(key))return table.get(key);
  const size=384,n=size*size,base=new Uint8Array(n*4),surface=new Uint8Array(n*4);
  const score=new Float32Array(n);
  let seed=2745+era*390+kind*1309;
  function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
  function field(steps){
    const grid=Array.from({length:steps*steps},random);
    return (u,v)=>{
      const X=u*steps,Y=v*steps,x=Math.floor(X),y=Math.floor(Y);let a=X-x,b=Y-y;
      a*=a*(3-2*a);b*=b*(3-2*b);
      const at=(i,j)=>grid[((j%steps+steps)%steps)*steps+((i%steps+steps)%steps)];
      return (at(x,y)*(1-a)+at(x+1,y)*a)*(1-b)+(at(x,y+1)*(1-a)+at(x+1,y+1)*a)*b;
    };
  }
  const blob=field(6),rub=field(20),fleck=field(78);
  const cut=(x,y,strength)=>{
    const a=Math.floor(x),b=Math.floor(y),u=x-a,v=y-b;
    for(let j=0;j<2;j++)for(let i=0;i<2;i++){
      const k=((b+j+size*2)%size)*size+(a+i+size*2)%size;
      score[k]=Math.max(score[k],strength*(i?u:1-u)*(j?v:1-v));
    }
  };
  // Wear combs follow the direction in which earth passes along the pan.
  const clusters=kind===1?114:44;
  for(let c=0;c<clusters;c++){
    const x=random()*size,y=random()*size;
    const angle=(kind===1?-.22:.11)+(random()-.5)*(kind===1?.38:1.5);
    const spread=1+Math.floor(random()*(kind===1?8:4));
    for(let k=0;k<spread;k++){
      const len=(kind===1?24:8)+random()*(kind===1?116:48);
      const offset=(k-spread/2)*(1.9+random()*.7),curvature=(random()-.5)*8;
      const intensity=.32+random()*.67,shift=random()*22;
      for(let s=0;s<len;s+=.55){
        const t=s/len,along=s+shift;
        cut(x+along*Math.cos(angle)-offset*Math.sin(angle),
          y+along*Math.sin(angle)+offset*Math.cos(angle)+curvature*t*t,
          intensity*Math.sin(t*Math.PI)**.4);
      }
    }
  }
  const tint=kind===1?(era===1?[108,72,53]:era===2?[110,83,67]:[88,92,91]):era===1?[78,75,68]:[77,79,81];
  for(let y=0,i=0;y<size;y++)for(let x=0;x<size;x++,i++){
    const u=x/size,v=y/size,macro=blob(u,v),m=rub(u,v),f=fleck(u,v),gr=random();
    const streak=score[i], k=i*4;
    const steel=kind===1;
    const dust=steel?Math.pow(Math.max(0,(macro*.60+m*.40-.39)*1.85),1.3):0;
    const chip=steel?0:Math.max(0,Math.min(1,(m*.54+f*.35+gr*.11-.70)*10));
    const keepFinish=!steel&&era===3?.10:!steel&&era===1?.60:1;
    const scuff=Math.min(1,(streak*(steel?.98:.72)+dust*.29+chip*.55)*keepFinish);
    const grain=(gr-.5)*(steel?7:3)+(macro-.5)*(steel?35:14)+(m-.5)*9;
    for(let ch=0;ch<3;ch++){
      let original=tint[ch]+grain+(steel&&ch===0?dust*14:0);
      base[k+ch]=Math.max(0,Math.min(255,original+([170,167,157][ch]-original)*scuff));
    }
    base[k+3]=255;
    surface[k]=Math.round(Math.max(0,Math.min(1,.57+(f-.5)*.19-streak*.20-chip*.1))*255);
    surface[k+1]=Math.round(Math.max(.14,Math.min(1,(steel?.68:.48)+(macro-.5)*.19-scuff*.39))*255);
    surface[k+2]=Math.round(Math.min(1,(steel?(era===3?.38:.25):.085)+scuff*(steel?.53:.85))*255);surface[k+3]=255;
  }
  const make=(buffer,srgb)=>{
    const tex=new T.DataTexture(buffer,size,size,T.RGBAFormat);
    tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.generateMipmaps=true;
    tex.magFilter=T.LinearFilter;tex.minFilter=T.LinearMipmapLinearFilter;
    tex.colorSpace=srgb?T.SRGBColorSpace:T.NoColorSpace;tex.needsUpdate=true;return tex;
  };
  const map=make(base,true),pbr=make(surface,false);
  const mat=new T.MeshPhysicalMaterial({name:kind===1?'Acciaio abraso della benna':'Smalto grafite del braccio',
    map,roughnessMap:pbr,metalnessMap:pbr,bumpMap:pbr,bumpScale:kind===1?.026:.014,
    roughness:1,metalness:1,clearcoat:kind===1?.04:.21,clearcoatRoughness:.34,envMapIntensity:1.11});
  table.set(key,mat);return mat;
}

export function hydraulicUpper(T, era, k) {
  let captionAnchor=null;
  const {V,parts,materials,cache,append,box,bar,rod,disc,plate,quad,pin,bolts,machineScrew,
    conduit,round,identity}=k;
  const eighties=era===1, cat=era===2, modern=era===3;
  const one=V(1,1,1);
  const material=(name,ref,color)=>{
    const m=materials[ref].clone();m.name=name;
    m.color.setHex(color);return m;
  };
  const frame=material('Montanti verniciati','black',eighties?0x786340:0x26292b);
  const basalt=material('Grafite minerale','black',eighties?0x322f2a:0x424646);
  basalt.roughness=.60;basalt.metalness=.40;
  const orange=material('Acciaio verniciato arancio','paint',0xe67137);
  const rustyDeck=material('Base torretta ossidata','paintDark',0xcd713f);
  const rubber=materials.rubber, glazing=materials.glass.clone();
  glazing.color.setHex(eighties?0x31413b:cat?0x475b59:0x485a56);
  glazing.opacity=eighties?.57:cat?.55:.62;glazing.envMapIntensity=.90;
  glazing.name='Vetratura fumé della cabina';
  if(eighties||cat){
    // Small chips rather than oversized islands on the painted side sheets.
    const repeat=eighties?1.85:2.75;
    for(const t of new Set([materials.paint.map,materials.paint.roughnessMap,materials.paint.bumpMap,materials.paint.metalnessMap]))
      if(t)t.repeat.set(repeat,repeat);
  }
  const bMat=cat?null:wearFinish(T,era,0);
  const bucketSteel=cat?null:wearFinish(T,era,1);
  const lipSteel=materials.edge.clone();
  lipSteel.name='Bisello di taglio lucidato';lipSteel.color.setHex(0xfff5d6);
  lipSteel.roughness=.58;lipSteel.envMapIntensity=1.23;
  const pinMat=cat?materials.paintDark:basalt;
  const xb=eighties?-4.38:cat?-4.02:-4.25;
  const hw=eighties?1.33:cat?1.23:1.25;
  const cabY=eighties?3.13:cat?2.95:2.90;
  const deck=eighties?1.34:1.25, sill=deck+.085;
  const hood=eighties?2.37:cat?2.17:2.31;
  const zArm=eighties?-.27:-.31;

  // A closed casting lofted along its longitudinal axis. Each cross section has
  // a crown, rolled shoulder, belly and undercut, so the tail also reads in 3/4.
  function loft(id,stations,mat,group) {
    const verts=[],uv=[],indices=[];
    const n=12;
    for(const [x,z,low,high] of stations){
      const shoulder=Math.min(.12,(high-low)*.22,z*.24);
      const belt=[[0,high],[-z*.72,high],[-z+shoulder,high-.014],
        [-z,high-shoulder],[-z,low+shoulder],[-z+shoulder,low],
        [0,low],[z-shoulder,low],[z,low+shoulder],[z,high-shoulder],
        [z-shoulder,high-.014],[z*.72,high]];
      for(const [zz,yy] of belt){verts.push(x,yy,zz);uv.push(x*.52,(zz+yy)*.43);}
    }
    for(let s=0;s<stations.length-1;s++)for(let a=0;a<n;a++){
      const i=s*n+a,j=s*n+(a+1)%n;
      indices.push(i,i+n,j,j,i+n,j+n);
    }
    const end=(stations.length-1)*n;
    for(let a=1;a<n-1;a++)indices.push(0,a,a+1,end,end+a+1,end+a);
    const geo=new T.BufferGeometry();
    geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));
    geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
    geo.setIndex(indices);geo.computeVertexNormals();geo.computeBoundingBox();
    const center=geo.boundingBox.getCenter(V());geo.translate(-center.x,-center.y,-center.z);
    geo.name=id;append(geo,mat,center,identity,one,group);
  }
  function poly(id,xy,z,thick,mat,group='lamierati',bevel=.014){
    plate(id,xy,z,thick,mat,group,bevel);
  }
  function cover(id,xy,z,mat=materials.paint,depth=.043,group='lamierati'){
    poly(id+'-gasket',xy,z,depth+.018,rubber,group,.018);
    const mx=xy.reduce((v,p)=>v+p[0],0)/xy.length, my=xy.reduce((v,p)=>v+p[1],0)/xy.length;
    const inner=xy.map(([x,y])=>[mx+(x-mx)*.976,my+(y-my)*.963]);
    poly(id+'-skin',inner,z+Math.sign(z)*.020,depth,mat,group,.018);
  }
  // Rotating platform. The rear casting is a separate removable member.
  loft('revolving-bed',[[xb+.10,hw*.64,deck-.18,deck+.07],[xb+.40,hw-.08,deck-.21,deck+.09],
    [xb+.68,hw,deck-.22,deck+.08],[-.57,hw,deck-.22,deck+.08],
    [.17,hw-.04,deck-.19,deck+.07],[.30,hw-.18,deck-.12,deck+.02]],
    eighties?rustyDeck:cat?materials.paintDark:basalt,'telaio');
  const backStations=eighties?
    [[xb,.98,deck+.02,hood-.04],[xb+.08,hw-.07,deck+.01,hood],[xb+.39,hw,deck+.01,hood],
     [xb+.55,hw,deck+.01,hood-.014]]:
    cat?[[xb,.16,deck-.17,hood-.27],[xb+.045,.53,deck-.19,hood-.22],[xb+.13,.80,deck-.21,hood-.13],
     [xb+.29,1.02,deck-.21,hood-.08],[xb+.48,hw-.025,deck-.19,hood-.03],[xb+.72,hw,deck-.15,hood+.008],
     [xb+.9,hw-.01,deck-.11,hood]]:
    [[xb,.19,1.035,hood-.31],[xb+.03,.51,1.012,hood-.27],[xb+.12,.79,1.005,hood-.22],
     [xb+.26,1.035,1.008,hood-.16],[xb+.41,1.18,1.018,hood-.10],
     [xb+.62,hw,1.045,hood-.08],[xb+.80,hw,1.065,hood-.06]];
  loft('counterweight',backStations,eighties?materials.paintDark:cat?materials.paint:basalt,'lamierati');
  // Engine room is built from a low central core and removable side skins.
  loft('engine-underframe',[[xb+.49,hw-.15,deck+.06,hood-.07],
    [-2.09,hw-.13,deck+.06,hood-.04],[-1.86,hw-.17,deck+.07,hood-.13]],
    eighties?materials.paintDark:basalt,'motore');
  if(cat){
    // Low forward service chest on the far deck. The upper lid and access
    // door are separate pieces; its near edge clears the pair of lift rams.
    const chestZ=-.73, frontX=.236;
    const shell=[[-1.95,deck+.096],[.169,deck+.096],[.221,deck+.12],
      [frontX,deck+.163],[frontX,deck+.378],[.213,deck+.413],[.157,deck+.432],
      [-.05,deck+.44],[-1.78,deck+.454],[-1.95,deck+.401]];
    poly('320d-front-service-chest',shell,chestZ,.99,materials.paint,'motore',.030);
    box(frontX+.014,deck+.246,chestZ,.025,.229,.885,'rubber','lamierati');
    box(frontX+.033,deck+.249,chestZ,.026,.199,.860,'paint','lamierati');
    // A shallow pressed rib catches the light horizontally across the door.
    box(frontX+.046,deck+.212,chestZ,.020,.026,.814,'paintDark','lamierati');
    for(const dz of [-.258,.233]){
      box(frontX+.049,deck+.158,chestZ+dz,.024,.032,.108,'iron','lamierati');
      rod(V(frontX+.066,deck+.157,chestZ+dz-.049),V(frontX+.066,deck+.157,chestZ+dz+.049),.012,'edge','lamierati',12);
    }
    const latchZ=chestZ+.229;
    box(frontX+.051,deck+.281,latchZ,.031,.086,.07,'black','lamierati');
    box(frontX+.073,deck+.285,latchZ,.013,.053,.039,'edge','lamierati');
    const lampZ=chestZ-.288;
    box(frontX+.041,deck+.349,lampZ,.044,.078,.117,'rubber','lamierati');
    box(frontX+.065,deck+.349,lampZ,.012,.055,.09,'light','lamierati');
    for(const d of [-.023,0,.023])box(frontX+.074,deck+.349,lampZ+d,.006,.052,.005,'edge','lamierati');
  }else{
    poly('far-hydraulic-reservoir',[[-2.08,deck+.09],[.13,deck+.09],[.23,1.81],[-.09,2.09],
      [-.83,2.17],[-1.72,hood-.065],[-2.08,hood-.18]],-.69,1.05,
      eighties?materials.paint:basalt,'motore',.054);
  }
  const outer=hw+.005, tailPanel=xb+.56;
  for(const side of [-1,1]){
    const z=outer*side;
    if(eighties){
      cover('classic-service'+side,[[xb+.43,deck+.12],[-1.38,deck+.12],[-1.38,hood-.07],[xb+.43,hood-.07]],z);
      // Rear access screen in the supplied H14 photograph is framed wire mesh.
      // Flat, recessed black slots would erase the close rectangular lattice.
      const x0=xb+.38,x1=xb+1.00,y0=deck+.21,y1=hood-.15;
      cover('classic-radiator'+side,[[x0-.035,y0-.03],[x1+.035,y0-.03],[x1+.035,y1+.03],[x0-.035,y1+.03]],z+side*.035);
      box((x0+x1)/2,(y0+y1)/2,z+side*.079,x1-x0,y1-y0,.014,'interior','motore');
      for(let col=0;col<12;col++)box(x0+.021+col*(x1-x0-.042)/11,(y0+y1)/2,z+side*.094,.015,y1-y0,.020,'iron','motore');
      for(let row=0;row<11;row++)box((x0+x1)/2,y0+.016+row*(y1-y0-.032)/10,z+side*.10,x1-x0,.012,.019,'edge','motore');
      for(const xx of [x0-.041,x1+.041])bar(V(xx,y0-.03,z+side*.103),V(xx,y1+.03,z+side*.103),.039,'paint','lamierati');
      box(xb+1.53,deck+.15,z+side*.059,1.00,.059,.018,rustyDeck,'lamierati');
      for(const xx of [xb+1.35,-1.47])machineScrew(xx,hood-.155,z+side*.058,.018,side);
    }else if(cat){
      cover('rear-service'+side,[[tailPanel,deck+.10],[-1.60,deck+.10],[-1.53,hood-.04],
        [-1.67,hood+.11],[tailPanel+.16,hood+.10],[tailPanel,hood-.10]],z);
      // Short pairs of parallel black ventilation slots in the top half.
      for(let block=0;block<2;block++)for(let row=0;row<4;row++)for(let col=0;col<(block?7:4);col++){
        box(xb+.75+block*.57+col*.045,hood+.005-row*.042,z+side*.05,.026,.025,.015,'interior','motore');
      }
      const sideSkirt=[[xb+.36,deck+.12],[-1.70,deck+.12],[-1.63,deck+.38],[-1.85,deck+.51],
        [xb+1.63,deck+.61],[xb+.45,deck+.57]];
      poly('charcoal-access-insert'+side,sideSkirt,z+side*.059,.032,frame,'lamierati',.012);
      box(xb+1.41,deck+.39,z+side*.093,.079,.14,.022,'black','lamierati');
      for(const xx of [xb+.97,xb+1.88]){box(xx,deck+.60,z+side*.081,.012,.74,.012,'rubber','motore');}
    }else{
      cover('yellow-service'+side,[[tailPanel,deck+.115],[-1.56,deck+.115],[-1.60,hood-.12],
        [-2.03,hood-.044],[tailPanel+.07,hood-.044]],z);
      const intake=[[tailPanel+.10,hood-.19],[-2.66,hood-.19],[-2.63,hood-.55],
        [tailPanel+.25,deck+.23],[tailPanel+.09,deck+.23]];
      poly('triangular-intake'+side,intake,z+side*.055,.027,basalt,'motore');
      // Bounded honeycomb ventilation field, clipped by its sloping outer frame.
      const ventL=tailPanel+.15,ventR=-2.7,vyLo=deck+.31,vyHi=hood-.24;
      for(let row=0;row<10;row++){
        const yy=vyLo+(vyHi-vyLo)*row/10;
        const right=ventL+(ventR-ventL)*(.27+.73*(yy-vyLo)/(vyHi-vyLo));
        for(let col=0;col<12;col++){
          const xx=ventL+(col+(row%2)*.5)*.105;if(xx>=right-.02)break;
          disc(xx,yy,z+side*.074,.042,.016,'interior','motore',6);
        }
      }
      box(-2.12,hood-.45,z+side*.06,.044,.16,.034,'rubber','lamierati');
      const lx=xb+.42;
      for(const off of [0,.10])box(lx+.07,hood-.33-off,z-side*.022,.31,.056,.030,'red','lamierati',off?.18:-.08);
    }
  }
  // Rounded engine covers and raised air intakes, separated by rubber joints.
  for(const [xx,len] of [[xb+1.02,.77],[xb+1.82,.71]]){
    box(xx,hood+.005,-.18,len,.10,1.42,'rubber','motore');
    box(xx,hood+.063,-.18,len-.018,.092,1.41,eighties?'paint':cat?'paintDark':basalt,'lamierati');
  }
  for(let j=0;j<12;j++)box(xb+.67+j*.062,hood+.128,-.25,.024,.032,.72,'track','motore');
  if(cat){
    const mushroom=V(xb+1.55,hood+.19,-.50);
    rod(mushroom,mushroom.clone().add(V(0,.23,0)),.075,'black','motore',24);
    const cap=cache('precleaner-cover',()=>new T.SphereGeometry(1,24,10,0,Math.PI*2,0,Math.PI*.58));
    append(cap,'rubber',V(mushroom.x,mushroom.y+.21,mushroom.z),identity,V(.163,.132,.163),'motore');
  }
  const ex=xb+1.16;
  rod(V(ex,hood+.11,-.48),V(ex-.02,hood+.41,-.48),.068,'track','motore',20);
  rod(V(ex-.02,hood+.41,-.48),V(ex-.13,hood+.48,-.48),.072,'black','motore',18);
  for(const x of [xb+.81,xb+1.87])rod(V(x,hood+.12,.61),V(x,hood+.16,.61),.084,'edge','motore',16);
  // A real six-cylinder block and separate manifold, visible in the exploded view.
  box(-2.84,1.79,-.17,1.18,.41,.66,'iron','motore');
  for(let j=0;j<6;j++){
    const xx=-3.32+j*.187;
    box(xx,2.06,-.17,.142,.15,.54,'black','motore');
    rod(V(xx,2.03,.08),V(xx+.053,1.94,.246),.041,'rust','motore',9);
  }
  box(-3.65,1.76,-.26,.15,.73,.91,'track','motore');
  for(let i=0;i<12;i++)box(-3.735,1.44+i*.055,-.26,.025,.018,.81,'edge','motore');

  // Cab door and window perimeter. The lower sill of the 320D and EC230
  // climbs towards the engine; the 1980s door retains separate rectangular lights.
  const back=eighties?-1.84:cat?-1.94:-1.94,front=eighties?-.075:cat?-.15:.10;
  const cabWidth=eighties?.99:1.035,zOut=hw-.022,zIn=zOut-cabWidth,zc=(zOut+zIn)/2;
  const hiFront=front-(eighties?.13:cat?.22:.24),hiBack=back+(eighties?.025:cat?.012:.167),roof=cabY-.065;
  const foot=front-.045;
  const edgePoints=[[back,sill],[foot,sill],[front,sill+.24],[front-.026,sill+.54],
    [hiFront+.042,roof-.17],[hiFront,roof-.044],[hiBack+.052,roof-.009],[hiBack-.014,roof-.071],[back-.008,sill+.36]];
  const lowFront=sill+(eighties?.56:cat?.13:.11),lowBack=sill+(eighties?.64:cat?.72:.85);
  const footFront=front-.10,footBack=back+.066;
  const bottom=[[back+.018,sill+.04],[foot-.04,sill+.04],[footFront,lowFront+.01],
    [footBack,lowBack+.012],[back+.018,lowBack-.03]];
  for(const [i,z] of [zOut,zIn].entries()){
    if(eighties){
      const divide=back+(front-back)*.365;
      poly('door-threshold'+i,[[back+.018,sill+.04],[foot-.04,sill+.04],[footFront,sill+.255],[back+.018,sill+.255]],z,.046,'paint','cabina',.014);
      poly('rear-door-stile'+i,[[back+.018,sill+.247],[divide+.026,sill+.247],[divide+.026,lowBack+.015],
        [back+.018,lowBack+.015]],z,.046,'paint','cabina',.014);
      poly('front-door-stile'+i,[[front-.16,sill+.245],[footFront,sill+.245],[footFront,lowFront+.01],[front-.16,lowFront+.01]],z,.046,'paint','cabina',.012);
    }else poly('side-cab-sill'+i,bottom,z,.046,cat?materials.paint:basalt,'cabina',.02);
    const mid=back+(front-back)*(eighties?.365:cat?.415:.32),midTop=mid+.024;
    const atX=x=>lowBack+(lowFront-lowBack)*(x-footBack)/(footFront-footBack);
    const rear=[[footBack+.036,atX(footBack+.036)+.044],[mid-.032,atX(mid-.032)+.044],
      [midTop-.042,roof-.073],[hiBack+.109,roof-.071],[hiBack+.026,roof-.159]];
    const door=[[mid+.037,atX(mid+.037)+.044],[footFront-.024,lowFront+.058],
      [front-.10,sill+.50],[hiFront-.014,roof-.19],[hiFront-.082,roof-.091],[midTop+.043,roof-.075]];
    poly('rear-cab-glazing'+i,rear,z,.018,glazing,'vetri',.005);
    poly('cab-door-glazing'+i,door,z,.018,glazing,'vetri',.005);
    for(let j=0;j<edgePoints.length;j++){
      const a=edgePoints[j],b=edgePoints[(j+1)%edgePoints.length];
      bar(V(a[0],a[1],z),V(b[0],b[1],z),eighties?.060:.068,eighties?'paint':frame,'cabina',.061);
    }
    bar(V(footBack,lowBack,z),V(footFront,lowFront,z),.058,eighties?'paint':frame,'cabina',.054);
    bar(V(mid,atX(mid),z),V(midTop,roof-.021,z),eighties?.060:.047,eighties?'paint':frame,'cabina',.052);
    if(eighties){
      // The classic door has an independent low, horizontal viewing light.
      const window=[[mid+.062,sill+.31],[front-.16,sill+.31],[front-.15,sill+.52],[mid+.062,sill+.56]];
      poly('lower-register'+i,window,z+.021,.016,glazing,'vetri',.018);
      for(let q=0;q<4;q++){const a=window[q],b=window[(q+1)%4];bar(V(a[0],a[1],z+.037),V(b[0],b[1],z+.037),.033,'rubber','cabina');}
      bar(V(mid,lowBack,z+.031),V(front-.12,lowFront,z+.031),.055,'paint','cabina');
    }
    if(cat){
      // The broad yellow sill rises from the cab front up to the engine hood.
      // The Series D side windows are tall and sit inside a black molded seal.
      const windowX=back+.115;
      bar(V(windowX,sill+.81,z+.022),V(windowX+.012,roof-.14,z+.022),.039,frame,'cabina',.034);
      box(back+.24,sill+.442,z+.046,.093,.064,.035,'black','cabina');
    }
    if(modern){
      const para=[[back+.016,sill+.06],[back+.67,sill+.06],[back+.82,sill+.25],[back+.58,sill+.54],[back+.025,sill+.87]];
      poly('yellow-trapezoid'+i,para,z+.022,.043,'paint','lamierati',.019);
      bar(V(mid+.034,sill+.58,z+.047),V(front-.125,sill+.64,z+.047),.035,frame,'cabina');
    }
  }
  // Transverse windscreen and rear glazing; no opaque block across floor/glass.
  const frontGlass=(u,z)=>V(foot+(hiFront-foot)*u,sill+.13+(roof-sill-.21)*u,z);
  const rearGlass=(u,z)=>V(back+.023+(hiBack-back)*u,sill+.54+(roof-sill-.65)*u,z);
  quad('front-windscreen',[frontGlass(0,zIn+.03),frontGlass(0,zOut-.03),frontGlass(1,zOut-.03),frontGlass(1,zIn+.03)],glazing,'vetri');
  quad('back-windscreen',[rearGlass(0,zOut-.04),rearGlass(0,zIn+.04),rearGlass(1,zIn+.04),rearGlass(1,zOut-.04)],glazing,'vetri');
  for(const t of [0,eighties?.46:.31,1])bar(frontGlass(t,zIn),frontGlass(t,zOut),t===1?.069:.043,eighties?'paint':frame,'cabina');
  box((back+front)/2,sill,zc,front-back-.052,.092,cabWidth,frame,'cabina');
  poly('roof-brow',[[hiBack-.09,roof-.028],[hiFront+.072,roof-.028],[hiFront+.13,roof+.022],
    [hiFront+.058,roof+.062],[hiBack-.073,roof+.056]],zc,cabWidth+.095,eighties||modern?'paint':frame,'cabina',.024);
  // Roof escape hatch and resilient seal.
  box((hiBack+hiFront)*.5,roof+.077,zc,.64,.023,.58,'rubber','cabina');
  box((hiBack+hiFront)*.5,roof+.096,zc,.60,.021,.54,cat?'black':'paintDark','cabina');
  if(cat){
    // Three forward-facing work lamps share a tubular roof guard. Each lamp
    // has a glazed lens, recessed reflector and service mounting bolt.
    const xl=hiFront+.075, lo=roof+.106, hi=roof+.302, za=zIn+.018, zb=zOut-.018;
    for(const at of [za,zb]){
      rod(V(xl,lo,at),V(xl+.035,hi,at),.016,frame,'cabina',10);
      bar(V(xl-.12,roof+.064,at),V(xl,lo,at),.025,frame,'cabina');
    }
    for(const y of [lo+.015,hi])rod(V(xl+.029,y,za),V(xl+.029,y,zb),.017,frame,'cabina',12);
    for(const at of [za+.105,(za+zb)*.5,zb-.105]){
      box(xl+.021,lo+.099,at,.071,.147,.157,frame,'cabina');
      box(xl+.059,lo+.099,at,.011,.116,.128,'light','cabina');
      for(const off of [-.030,.030])rod(V(xl+.068,lo+.052,at+off),V(xl+.068,lo+.145,at+off),.004,'edge','cabina',6);
      box(xl-.010,lo+.007,at,.06,.044,.052,'iron','cabina');
    }
  }
  if(eighties){
    // Fine vermilion waist and narrow yellow saddle of the rectangular H14 cab.
    const stripe=materials.paintDark.clone();
    stripe.color.setHex(0xb74421);stripe.roughness=.61;
    for(const zz of [zOut+.043,zIn-.043]){
      const y=sill+.143;
      box((back+front)*.5,y,zz,front-back-.074,.040,.011,stripe,'lamierati');
      box((back+front)*.5,y-.058,zz,front-back-.078,.014,.010,stripe,'lamierati');
    }
    for(const y of [sill+.143,sill+.085]){
      box((xb-.99)*.5,y,hw+.052,-.99-xb-.22,y>sill+.1?.040:.014,.011,stripe,'lamierati');
    }
  }
  const chair=back+.55;
  box(chair,sill+.20,zc,.33,.38,.39,'iron','cabina');
  box(chair+.03,sill+.4,zc,.47,.12,.51,'interior','cabina');
  box(chair-.19,sill+.64,zc,.12,.49,.47,'interior','cabina',.09);
  if(!eighties)box(chair-.215,sill+.91,zc,.12,.16,.31,'interior','cabina',.09);
  for(const side of [-1,1]){
    box(chair+.09,sill+.48,zc+side*.32,.33,.105,.119,'interior','cabina');
    rod(V(chair+.19,sill+.50,zc+side*.32),V(chair+.25,sill+.68,zc+side*.32),.016,'chrome','cabina',9);
    box(chair+.25,sill+.71,zc+side*.32,.054,.09,.044,'black','cabina',-.18);
    box(foot-.20,sill+.078,zc+side*.16,.15,.041,.105,'rubber','cabina',-.14);
  }
  const handleX=back+.36;
  box(handleX,lowBack-.104,zOut+.044,.185,.065,.041,'black','cabina');
  for(const zz of [zOut-.12,zIn+.1]){
    box(hiFront+.032,roof+.006,zz,.124,.098,.155,frame,'cabina');
    box(hiFront+.099,roof+.004,zz,.016,.070,.128,'light','cabina');
  }
  const wiperLow=frontGlass(.11,zOut-.105),wiperTop=frontGlass(.73,zIn+.27);
  rod(wiperLow,wiperTop,.011,'black','cabina',8);
  rod(wiperTop.clone().add(V(.008,-.17,-.045)),wiperTop.clone().add(V(.008,.11,.033)),.015,'black','cabina',8);
  conduit('cab-handle',[V(front-.07,sill+.12,zOut+.04),V(front-.02,sill+.16,zOut+.124),
    V(hiFront+.09,roof-.32,zOut+.128),V(hiFront+.087,roof-.26,zOut+.044)],.023,eighties?'paint':modern?orange:'edge','cabina',16);
  for(const [xx,yy,ww] of [[-.72,deck-.06,.74],[-.72,deck-.28,.46]]){
    box(xx,yy,zOut+.144,ww,.069,.218,'iron','telaio');
    for(let g=0;g<7;g++)box(xx-ww*.41+g*ww*.136,yy+.040,zOut+.144,.016,.012,.195,'edge','telaio');
  }
  if(!eighties){
    const mirrorA=V(hiFront-.07,roof-.04,zOut),mirrorB=V(hiFront+.14,roof+.09,zOut+.23);
    rod(mirrorA,mirrorB,.018,frame,'cabina');
    box(mirrorB.x,mirrorB.y-.083,mirrorB.z,.061,.18,.13,'black','cabina');
    box(mirrorB.x+.034,mirrorB.y-.083,mirrorB.z,.009,.15,.109,'chrome','cabina');
    // Cockpit monitor with display hood; the later model has a wide panel.
    box(foot-.31,sill+.77,zIn+.135,.081,modern?.25:.18,modern?.35:.16,'black','cabina',-.13);
  }
  if(modern){
    // Tubular service rail at the back of the operator station, return rail on far deck.
    for(const zz of [zOut-.24,-.82]){
      const low=hood+.09,hi=cabY+.22;
      conduit('rail-arch-'+zz,[V(-2.30,low,zz),V(-2.30,hi-.07,zz),V(-2.36,hi,zz),
        V(-3.04,hi,zz),V(-3.11,hi-.08,zz),V(-3.11,low+.01,zz)],.020,orange,'cabina',22);
      bar(V(-2.31,hi-.30,zz),V(-3.10,hi-.30,zz),.026,orange,'cabina');
    }
    const dome=cache('roof-lamp',()=>new T.SphereGeometry(1,16,9,0,Math.PI*2,0,Math.PI/2));
    for(const [x,z,col] of [[hiBack+.19,zIn+.080,0x604520],[hiBack+.18,zOut-.103,0x306a51]]){
      const signal=material('Lente spia di tetto','light',col);
      const y=roof+.064;
      rod(V(x,y,z),V(x,y+.049,z),.063,'black','cabina',16);
      rod(V(x,y+.05,z),V(x,y+.13,z),.048,signal,'cabina',18);
      append(dome,signal,V(x,y+.13,z),identity,V(.049,.030,.049),'cabina');
    }
    box(xb+.08,hood-.28,0,.089,.107,.145,frame,'motore');
    box(xb+.03,hood-.28,0,.012,.062,.063,glazing,'vetri');
  }
  if(cat)return buildSeriesDEquipment(T,k);
  // The pose preserves the length between the base and elbow pins and between
  // the elbow and bucket pins; the dipper can be silhouetted against daylight.
  const A=eighties?[-.88,1.58]:[-.61,1.72];
  // Poses reconstructed from the three user photographs. The side projections
  // of the arm differ from the maximum outreach quoted in the catalogues.
  const C=eighties?[4.02,4.32]:[4.06,4.94];
  const D=eighties?[3.32,1.28]:[4.13,1.45];
  const run=D[0]-C[0];
  const bend=eighties?[.92,3.78]:[1.03,4.03];
  const boomPoints=[A,[A[0]+.25,A[1]+.54],
    [bend[0]-.31,bend[1]-.22],bend,[bend[0]+.67,bend[1]+.20],
    [C[0]-.68,C[1]-.10],[C[0]-.25,C[1]-.035],C];
  const boomWidth=eighties?[.18,.31,.335,.38,.32,.22,.177,.17]:
    [.164,.25,.358,.37,.321,.215,.171,.155];
  function welded(id,path,widths,depth,mat){
    const fit=new T.CatmullRomCurve3(path.map(p=>V(p[0],p[1],0)),false,'centripetal');
    const wfit=new T.CatmullRomCurve3(path.map((p,i)=>V(i,widths[i],0)),false,'catmullrom',.32);
    const up=[],down=[];
    for(let i=0;i<=25;i++){
      const t=i/25,p=fit.getPoint(t),tg=fit.getTangent(t),w=wfit.getPoint(t).y;
      up.push([p.x-tg.y*w,p.y+tg.x*w]);down.push([p.x+tg.y*w,p.y-tg.x*w]);
    }
    const outline=[...up,...down.reverse()];
    // Continuous flank sheets, rolled upper and lower skin. Each skin can be released
    // as one piece, rather than fragmenting the arm into arbitrary cross-sections.
    const flankZ=depth/2-.033;
    for(const side of [-1,1]){
      poly(id+'-flank',outline,zArm+side*flankZ,.07,mat,'braccio',.018);

    }
    function skin(pts,edge){
      const pp=[],uv=[],idx=[], zz=depth/2-.068;
      pts.forEach(([x,y],i)=>{
        pp.push(x,y,zArm-zz,x,y,zArm+zz);uv.push(i/pts.length,0,i/pts.length,1);
        if(i){const j=i*2;idx.push(j-2,j,j-1,j,j+1,j-1,j-1,j,j-2,j-1,j+1,j);}
      });
      const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pp,3));
      g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);
      const normals=[];
      for(let i=0;i<pts.length;i++){
        const p=pts[Math.max(i-1,0)],q=pts[Math.min(i+1,pts.length-1)],dx=q[0]-p[0],dy=q[1]-p[1],n=Math.hypot(dx,dy);
        normals.push(-dy/n,dx/n,0,-dy/n,dx/n,0);
      }
      g.setAttribute('normal',new T.Float32BufferAttribute(normals,3));g.computeBoundingBox();
      const center=g.boundingBox.getCenter(V());g.translate(-center.x,-center.y,-center.z);
      append(g,mat,center,identity,one,'braccio');
      for(const s of [-1,1])conduit(id+'-weld'+edge+s,pts.map(p=>V(p[0],p[1],zArm+s*(depth/2-.014))),
                                     .0105,pinMat,'braccio',29);
    }
    skin(up,'upper');skin(down,'lower');
  }
  const stickTop=[C[0]+(eighties?.23:.28),C[1]+(eighties?.69:.84)];
  const dipper=[stickTop,[C[0]+.047,C[1]+.17],C,[C[0]+run*.22+.06,C[1]-.51],
    [D[0]-.035,D[1]+.87],D];
  welded('main-boom',boomPoints,boomWidth,eighties?.49:.50,bMat);
  welded('dipper',dipper,[.093,.164,.190,.234,.152,.107],eighties?.358:.347,bMat);
  function pinBoss(x,y,r,span,mat=bMat){
    for(const s of [-1,1]){
      disc(x,y,zArm+s*span*.5,r,.092,mat,'braccio',28);
      disc(x,y,zArm+s*(span*.5+.058),r*.78,.046,pinMat,'braccio',26);
      bolts(x,y,zArm+s*(span*.5+.107),r*.26,s);
    }
    pin(x,y,zArm,r*.5,span+.20,'braccio');
  }
  function clevis(id,x,y,mat,depth=.50){
    const outline=[[x-.16,y-.22],[x+.155,y-.22],[x+.133,y+.075],[x+.025,y+.14],[x-.095,y+.10]];
    for(const s of [-1,1])poly(id,outline,zArm+s*depth*.5,.073,mat,'braccio',.014);
  }
  clevis('boom-pedestal',A[0],A[1],pinMat,.58);pinBoss(A[0],A[1],.18,.60);
  pinBoss(C[0],C[1],.153,.534);
  function cylinder(a,b,r,barrel=pinMat,portion=.63){
    const p=a.clone().lerp(b,portion);
    rod(a,p,r,barrel,'pistoni',20);
    rod(a.clone().lerp(b,.02),a.clone().lerp(b,.074),r*1.075,basalt,'pistoni',20);
    rod(a.clone().lerp(b,portion-.031),p.clone().lerp(b,.024),r*1.13,'iron','pistoni',22);
    rod(p,b,r*.58,'chrome','pistoni',20);
    for(const pt of [a,b]){
      disc(pt.x,pt.y,pt.z,r*1.24,r*1.9,barrel,'pistoni',22);
      disc(pt.x,pt.y,pt.z+r*1.09,r*.59,.035,'bolt','bulloneria',12);
    }
    const port=a.clone().lerp(b,.15);
    rod(port.clone().add(V(0,0,r*.60)),port.clone().add(V(.025,0,r*1.43)),r*.23,'edge','pistoni',8);
  }
  for(const s of [-1,1]){
    const zz=zArm+s*.331;
    cylinder(V(A[0]+.46,1.41,zz),V(bend[0]-.38,bend[1]-.35,zz),eighties?.113:.108);
    const guard=[[A[0]-.10,A[1]-.088],[A[0]-.097,A[1]+.18],[A[0]+.30,A[1]+.55],
      [A[0]+.46,A[1]+.40],[A[0]+.13,A[1]-.045]];
    poly('boom-root-facing',guard,zArm+s*.257,.034,bMat,'braccio');
  }
  const elbow=V(bend[0]+.20,bend[1]+(eighties?.49:.44),zArm);
  clevis('stick-pickup-clevis',elbow.x,elbow.y,pinMat,.23);
  cylinder(elbow,V(stickTop[0],stickTop[1],zArm),.110,basalt,.586);
  const bucketTop=V(C[0]+(eighties?.32:.40),C[1]-.235,zArm+.032);
  const linkTop=V(D[0]+(eighties?.56:.62),D[1]+.47,zArm+.032),linkBottom=V(D[0]+.18,D[1]+.085,zArm+.032);
  const pumpMount=[[C[0]+.06,C[1]-.035],[C[0]+.28,C[1]-.09],[bucketTop.x+.084,bucketTop.y+.05],
   [bucketTop.x+.067,bucketTop.y-.05],[bucketTop.x-.09,bucketTop.y-.09],[C[0]+.04,C[1]-.18]];
  for(const st of [-1,1])poly('riser-for-bucket-ram',pumpMount,zArm+st*.127,.092,bMat,'braccio',.015);
  cylinder(bucketTop,linkTop,.0885,bMat,.60);
  for(const s of [-1,1]){
    const off=V(0,0,s*.215);
    const elbowShape=[[linkTop.x-.084,linkTop.y+.062],[linkTop.x+.052,linkTop.y+.10],[linkTop.x+.105,linkTop.y-.012],
        [linkBottom.x+.105,linkBottom.y-.012],[linkBottom.x+.031,linkBottom.y-.076],
        [linkBottom.x-.064,linkBottom.y-.046],[linkBottom.x-.042,linkBottom.y+.068]];
      poly('curved-bucket-link',elbowShape,zArm+s*.212,.086,pinMat,'benna',.015);
    bar(linkTop.clone().add(off),V(D[0]-.040,D[1]+.69,zArm+s*.215),.084,bMat,'benna',.060);
  }
  pin(linkTop.x,linkTop.y,zArm,.074,.59,'benna');
  pin(linkBottom.x,linkBottom.y,zArm,.068,.59,'benna');

  // Pipework follows the actual bend, with rigid lines above the boom and
  // articulated loops bridging each pivot. Fittings and paired clamp blocks are separate.
  for(let i=0;i<(modern?5:3);i++){
    const zz=zArm-.17+i*(modern?.081:.145),oy=i*.013;
    const hard=[V(-1.18,1.64,zz),V(-.82,1.97,zz-.035),V(-.53,2.17,zz),
      V(bend[0]-.33,bend[1]+.19+oy,zz),V(bend[0]+.15,bend[1]+.37+oy,zz),
      V(bend[0]+.69,bend[1]+.445+oy,zz),V(C[0]-.66,C[1]+.181+oy,zz)];
    conduit('hard-feed'+i,hard,.019,modern?'track':'iron','tubazioni',25);
    const join=hard[hard.length-1];
    const soft=[join,V(C[0]-.31,C[1]+.251+oy,zz),V(C[0]-.048,C[1]+.19,zz+.04),
      V(C[0]+.125,C[1]+.016,zz+.075),V(C[0]+.17,C[1]-.32,zz+.077)];
    conduit('flex-on-knuckle'+i,soft,.021,'rubber','tubazioni',17);
    const bend2=soft[soft.length-1];
    conduit('dipper-line'+i,[bend2,V(C[0]+.20+run*.14,C[1]-.64,zz+.08),V(D[0]+.111,D[1]+.9,zz+.066),
      V(D[0]+.14,D[1]+.60,zz+.061)],.0148,modern?'track':'rubber','tubazioni',15);
    const axis=soft[1].clone().sub(join).normalize();
    const onLine=t=>join.clone().addScaledVector(axis,t);
    rod(onLine(-.066),onLine(-.025),.035,'edge','tubazioni',6);
    rod(onLine(-.025),onLine(.023),.029,'iron','tubazioni',18);
    rod(onLine(.023),onLine(.064),.037,'edge','tubazioni',6);
    for(const offset of [.073,.086,.099])rod(onLine(offset),onLine(offset+.005),.027,'iron','tubazioni',14);
  }
  for(const v of [.21,.51,.78]){
    const x=bend[0]+(C[0]-bend[0])*v;
    box(x,bend[1]+.40+(C[1]+.18-bend[1]-.40)*v,zArm,.063,.048,.464,pinMat,'tubazioni');
  }
  // Accessible outboard hard line and flexible section with clamped saddles.
  const visibleZ=zArm+.285;
  for(const [j,dy] of [[0,0],[1,.057]]){
    const out=[V(bend[0]-.69,bend[1]-.47+dy,visibleZ),V(bend[0]-.39,bend[1]-.12+dy,visibleZ),
      V(bend[0]+.05,bend[1]+.12+dy,visibleZ),V(bend[0]+.56,bend[1]+.15+dy,visibleZ),
      V(bend[0]+1.13,bend[1]+.16+dy,visibleZ)];
    conduit('outboard-pipe'+j,out,.017,j?'rubber':'edge','tubazioni',18);
    for(const t of [0,4]){
      const q=out[t];rod(V(q.x-.037,q.y,q.z),V(q.x+.037,q.y,q.z),.028,'bolt','tubazioni',6);
    }
  }
  for(const [px,py] of [[bend[0]-.4,bend[1]-.105],[bend[0]+.56,bend[1]+.167]]){
    box(px,py,visibleZ+.019,.052,.130,.039,pinMat,'tubazioni');
    disc(px,py+.039,visibleZ+.049,.015,.015,'bolt','bulloneria',6);
  }
  // Two exposed articulated hoses curl around the elbow. Rigid ends stay on
  // their carriers and the bowed rubber length hangs free of the dipper face.
  const visibleSide=zArm+.235;
  for(let j=0;j<3;j++){
    const zz=visibleSide+j*.032, off=j*.025;
    const loop=[V(C[0]-.32,C[1]+.116+off,zz-.025),V(C[0]-.13,C[1]+.187+off,zz),
      V(C[0]+.125,C[1]+.10+off,zz+.065),V(C[0]+.20,C[1]-.28-off,zz+.11),
      V(C[0]+.07,C[1]-.56-off,zz+.105),V(C[0]-.135,C[1]-.58-off,zz+.039)];
    conduit('flexible-loop'+j,loop,.019,'rubber','tubazioni',23);
    const g=loop.at(-1);rod(g,g.clone().add(V(-.018,-.066,0)),.029,'edge','tubazioni',8);
  }
  const linkPlane=zArm+.237;
  for(let j=0;j<(modern?3:2);j++){
    const dx=(j-1)*.055,xx=C[0]+.12+dx;
    const head=V(xx,C[1]-.64,linkPlane+.042),heel=V(D[0]+.11+dx,D[1]+.85,linkPlane+.042);
    rod(head,heel,.019,modern?'edge':'iron','tubazioni',12);
    for(const f of [.0,.27,.9]){
      const pt=head.clone().lerp(heel,f);
      rod(pt,pt.clone().add(V(0,-.07,0)),.027,'track','tubazioni',8);
    }
  }
  if(modern){
    const x=C[0]+run*.41+.053,y=C[1]+(D[1]-C[1])*.41;
    box(x,y,zArm+.202,.18,.083,.045,frame,'braccio',-1.4);
    for(const v of [-.061,.061])bolts(x,y+v,zArm+.236,.014);
  }

  // Dish-shaped open bucket with rolled side profile, abrasion strips, cutting
  // edge, tapered replaceable tooth tips and bucket ears. The rear is curved.
  const bx=D[0],by=D[1]-(modern?.21:.15),bw=eighties?1.20:1.26;
  const height=Math.max(.65,Math.min(1.26,by-.045));
  const lip=eighties?.99:.83;
  const profile=[[-lip,-.86],[-.61,-.94],[-.34,-.987],[-.08,-1.00],[.19,-.962],[.41,-.85],[.56,-.67],
    [.66,-.44],[.67,-.23],[.61,-.067],[.54,.045],[.34,.17],[.14,.156],[-.035,.031],[-.15,-.15],[-.32,-.39],[-.54,-.62]];
  const shell=profile.slice(0,12).map(([x,y])=>[bx+x,by+y*height]);
  for(const s of [-1,1]){
    poly('dished-bucket-side',profile.map(([x,y])=>[bx+x,by+y*height]),zArm+s*bw*.48,.064,bucketSteel,'benna',.018);
    // The date corner is registered just inside the bucket heel's curved
    // shoulder. Following its actual visible cheek preserves the slight overlap.
    if(s===1)captionAnchor={partIndex:parts.length-1,point:V(bx+.642,by-.20*height,zArm+bw*.48)};
    const wear=[[-.81,-.827],[-.58,-.92],[-.18,-.95],[.19,-.92],[.49,-.76],[.45,-.66],[.10,-.81],[-.46,-.80]];
    poly('bucket-side-wear',wear.map(([x,y])=>[bx+x,by+y*height]),zArm+s*(bw*.5+.03),.029,lipSteel,'benna',.008);
    const ears=[[-.25,-.075],[-.20,.141],[-.045,.232],[.145,.197],[.237,.057],[.17,-.110]];
    poly('linkage-pin-ear',ears.map(([x,y])=>[bx+x,by+y]),zArm+s*.198,.072,bucketSteel,'benna',.013);
  }
  if(modern){
    for(const sg of [-1,1]){
      const z=zArm+sg*(bw*.50+.041);
      for(let j=0;j<3;j++){
        const x=-.43+j*.34;
        const pad=[[x,-.80],[x+.23,-.83],[x+.31,-.59],[x+.076,-.55]];
        poly('lower-wear-pad'+j,pad.map(([xx,yy])=>[bx+xx,by+yy*height]),z,.031,bucketSteel,'benna',.015);
      }
      box(bx+.105,by-.337*height,z+sg*.018,.31,.056,.027,bucketSteel,'benna',-.055);
    }
  }
  for(const s of [-1,1]){
    const z=zArm+s*(bw*.5+.053);
    // Replaceable side cutter, bolted from the outside. Its leading facet
    // and countersunk bolt seats remain visible with the bucket assembled.
    const cutter=[[-.76,-.79],[-.56,-.76],[-.28,-.47],[-.21,-.30],[-.30,-.32],[-.59,-.58]];
    poly('bucket-side-cutter',cutter.map(([x,y])=>[bx+x,by+y*height]),z,.071,bucketSteel,'benna',.014);
    const bevel=[[-.76,-.80],[-.56,-.768],[-.27,-.463],[-.22,-.33],[-.283,-.452],[-.60,-.71]];
    poly('side-cutter-ground-edge',bevel.map(([x,y])=>[bx+x,by+y*height]),z+s*.039,.012,lipSteel,'benna',.004);
    for(const [px,py] of [[-.57,-.695],[-.402,-.51]]){
      disc(bx+px,by+py*height,z+s*.042,.057,.010,'track','bulloneria',18);
      disc(bx+px,by+py*height,z+s*.054,.040,.025,'bolt','bulloneria',6);
    }
    const pad=[[.13,-.74],[.34,-.63],[.48,-.46],[.52,-.26],[.45,-.16],[.41,-.37],[.28,-.57],[.09,-.68]];
    poly('bucket-cheek-wear-pad',pad.map(([x,y])=>[bx+x,by+y*height]),z-s*.012,.034,bucketSteel,'benna',.012);
    conduit('wear-pad-weld'+s,[[.11,-.71],[.31,-.6],[.43,-.43],[.46,-.26]].map(([x,y])=>V(bx+x,by+y*height,z+s*.012)),.012,'edge','benna',13);
  }
  for(let q=0;q<shell.length-1;q++){
    const [px,py]=shell[q],[nx,ny]=shell[q+1];
    bar(V(px,py,zArm),V(nx,ny,zArm),.066,bucketSteel,'benna',bw-.04);
  }
  for(const s of [-1,0,1]){
    const z=zArm+s*bw*.28;
    conduit('abrasion-rib'+s,shell.slice(1,9).map(([x,y])=>V(x+.03,y-.032,z)),.031,'iron','benna',15);
  }
  bar(V(bx-lip,by-.86*height,zArm-bw*.50),V(bx-lip,by-.86*height,zArm+bw*.50),.105,'edge','benna');
  for(let q=0;q<5;q++){
    const toothZ=zArm-bw*.41+q*bw*.205;
    poly('forged-tooth',[[bx-.74,by-.83*height],[bx-.92,by-.84*height],[bx-1.107,by-.908*height],
      [bx-1.13,by-.955*height],[bx-1.006,by-.958*height],[bx-.74,by-.912*height]],toothZ,.118,lipSteel,'benna',.011);
    disc(bx-.872,by-.888*height,toothZ+.064,.019,.014,'bolt','bulloneria',8);
  }
  pin(bx,by+.06,zArm,.096,.58,'benna');
  return captionAnchor;
}
