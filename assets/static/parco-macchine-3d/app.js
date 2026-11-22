import * as THREE from './three-parti.js';
import {createMachine} from './model.js';
import {createMaterials} from './materials.js';
import {createTransition} from './motion.js';
import {createMachineView} from './renderer.js';
import {sampleBackdrops} from './lighting.js';
import {connectPageScroll} from './scroll.js';
import {createCaption} from './caption.js';
import {SEGUI_MS,SALTO_EPOCHE,PASSAGGIO_MS,TENDINA_INIZIO,TENDINA_DURATA,LAMA,USCITA,easeLama,fase,SOSTA,SOSTA_MS,faseSosta,pesoCorsa} from './corsa.js';

const eras=[
  {year:'1960',label:'Anni Sessanta',short:'La meccanica',subtitle:'Escavatore a funi',title:'Lo scavo frontale',body:'L’asta spinge la benna nel terreno. La fune passa sulle pulegge e la solleva.',photo:'media/era-1960.jpg'},
  {year:'1980',label:'Anni Ottanta',short:'L’idraulica',subtitle:'Escavatore idraulico',title:'Il braccio articolato',body:'I cilindri sollevano il braccio. I tubi flessibili seguono il bilanciere mentre la benna si chiude.',photo:'media/era-1980.jpg'},
  {year:'2000',label:'Primi Duemila',short:'La benna da finitura',subtitle:'Escavatore a carro lungo',title:'La benna da finitura',body:'La benna ha un bordo liscio per stendere il terreno. I due cingoli larghi sostengono la macchina durante lo scavo.',photo:'media/era-2000.jpg'},
  {year:'2026',label:'Oggi',short:'Il controllo di scavo',subtitle:'Escavatore elettroidraulico',title:'Il controllo di scavo',body:'Dalla cabina panoramica si vedono la benna e i raccordi esterni del bilanciere.',photo:'media/era-2026.jpg'}
];
// Testi di Mattia invariati qui sopra. I fondali si servono in WebP alla misura dello schermo
// (media/fondale-AAAA-1100|1672.webp, ricavati dai suoi JPG, vedi tools/parco-3d/media.py).
// misura scelta al momento della richiesta (la finestra dell'iframe può nascere piccola):
// la variante da 1100 px basta quando il fondale coperto non supera ~1150 pixel fisici
function backdropURL(i){
  const scene=document.querySelector('.scene');
  const need=Math.max(innerWidth,(scene?.clientHeight||innerHeight)*1.78)*Math.min(devicePixelRatio||1,2);
  return 'media/fondale-'+eras[i].year+(need<=1150?'-1100':'-1672')+'.webp';
}
const params=new URLSearchParams(location.search);
const manual=params.has('manuale');          // modello a comandi manuali, aperto a richiesta dal movimento ridotto
const startAt=Math.max(0,Math.min(3,Number(params.get('inizio'))||0));
if(manual)document.documentElement.classList.add('td3-manuale');

const $=id=>document.getElementById(id);
// elementi toccati a ogni fotogramma: cercati una volta sola
const ui={scrub:$('scrub'),previous:$('previous'),next:$('next'),play:$('play'),playLabel:$('play-label'),
  count:$('era-count'),current:$('current-era'),backdrops:$('backdrops')};
const backgrounds=[],stops=[];
const caption=createCaption($('story'));
let target=0,following=0,lastFollow=0;
// chasing: l'avanzamento sta inseguendo lo scroll; anno e testi mostrano già l'epoca di arrivo, così
// dopo un salto lungo sono giusti entro 400 ms anche se la scena ci arriva un attimo dopo
let chasing=false;
let view=null,progress=0,destination=0,travel=null,animationFrame=0,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
try{const remembered=localStorage.getItem('tedeschi-3d-motion');if(remembered!==null)reduced=remembered==='ridotto';}catch{}
if(manual)reduced=true;
for (const [i,e] of eras.entries()){
  const bg=document.createElement('div');bg.className='photoscene';bg.append(document.createElement('i'));$('backdrops').append(bg);backgrounds.push(bg);
  const button=document.createElement('button');button.type='button';button.className='stop';button.setAttribute('aria-label',e.label+', '+e.year+', '+e.short);
  const dot=document.createElement('span');dot.className='dot';dot.setAttribute('aria-hidden','true');
  const wrap=document.createElement('span'),b=document.createElement('strong'),small=document.createElement('small');
  b.textContent=e.label;small.textContent=e.short;wrap.append(b,small);button.append(dot,wrap);$('stops').append(button);stops.push(button);button.addEventListener('click',()=>moveTo(i));
}
// Dentro il sito la testata del componente si ritira: vista iniziale e tasto Movimento salgono
// insieme sul modello, sempre raggiungibili col mouse, col dito e da tastiera.
if(window.parent!==window||manual){
  const tools=document.createElement('div');tools.className='scene-tools';
  tools.append($('motion-switch'),$('recenter'));
  document.querySelector('.scene').append(tools);
}
// il filo giallo sul bordo della tendina, come nei tagli del sito: il contenitore porta la maschera
// (fissa), la barra dentro si muove con una trasformazione
const thread=document.createElement('div');thread.className='curtain-thread';thread.hidden=true;
const threadBar=document.createElement('i');thread.append(threadBar);$('backdrops').append(thread);
const loaded=new Set();
function backdrop(i){
  if(loaded.has(i))return;loaded.add(i);
  backgrounds[i].firstChild.style.backgroundImage='url("'+backdropURL(i)+'")';
}
function preloadBackdrop(i){
  if(loaded.has(i))return Promise.resolve();
  const img=new Image();img.src=backdropURL(i);
  return img.decode().catch(()=>{}).then(()=>backdrop(i));
}
// Tendina composta dalla GPU (giro 20/11, secondo passaggio). Prima era un clip-path riscritto a ogni
// fotogramma: la traccia di Chrome su Intel UHD mostra ~10 ms di raster per fotogramma durante tutta la
// tendina e 30-300 ms alla prima apertura. Ora la finestra (larga tre volte la scena) si inclina e si
// sposta, la foto dentro fa il movimento inverso e resta ferma: stessa forma e stessa curva, zero raster.
// x è il bordo alto della tendina in % della larghezza della scena; il bordo basso sta LAMA punti indietro.
let stageW=1,stageH=1,skew=0;
function measureStage(){
  stageW=ui.backdrops.clientWidth||1;stageH=ui.backdrops.clientHeight||1;
  skew=Math.atan(LAMA/100*stageW/stageH);
}
const OPEN=null;
function placeCurtain(bg,x){
  const win=bg.style,img=bg.firstChild.style;
  if(x===OPEN){if(win.transform){win.transform='';img.transform='';}return;}
  const tx=(x/100-1)*stageW;
  win.transform='translate3d('+tx.toFixed(2)+'px,0,0) skewX('+(-skew).toFixed(5)+'rad)';
  img.transform='skewX('+skew.toFixed(5)+'rad) translate3d('+(-tx).toFixed(2)+'px,0,0)';
}
function placeThread(x){
  threadBar.style.transform='translate3d('+(x*stageW/100-4).toFixed(2)+'px,0,0) skewX('+(-skew).toFixed(5)+'rad)';
}
// Prima apertura: la prima volta che un fondale si vede Chrome carica la foto sulla GPU. Qui, a scena
// ferma dopo il caricamento, ogni fondale e il filo si mostrano interi per due fotogrammi quasi
// trasparenti (0,2%, meno di mezzo livello su 255) sopra la scena; poi si rimette lo stato vero.
function prewarmBackdrops(){
  if(reduced)return;
  const warm=[...backgrounds.filter((bg,i)=>loaded.has(i)&&i!==Math.floor(progress)),thread];
  for(const el of warm){el.hidden=false;el.style.opacity='.002';el.style.zIndex='3';if(el!==thread)placeCurtain(el,OPEN);}
  placeThread(50);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    for(const el of warm){el.style.opacity='';el.style.zIndex='';}
    thread.hidden=true;lastPair='';paint(progress,true);
  }));
}

let lastEra=-1,shownYear=-1;
const yearDisplay=$('story').querySelector('.year');
let introDone=reduced||startAt>0;
if(!introDone)yearDisplay.style.visibility='hidden';
let introObserver=null;
function finishIntro(){
  yearDisplay.style.visibility='';introDone=true;
  introObserver?.disconnect();introObserver=null;
}
function enterFirstEra() {
  if(introDone||reduced||Math.round(progress)!==0||!view){finishIntro();return;}
  introObserver=new IntersectionObserver(entries=>{
    if(!entries.some(entry=>entry.isIntersecting))return;
    introObserver?.disconnect();introObserver=null;
    if(introDone)return;
    introDone=true;yearDisplay.style.visibility='';
    if(reduced||Math.round(progress)!==0){caption.show(Math.round(progress));return;}
    caption.intro(true);shownYear=0;
  },{threshold:.18});
  introObserver.observe($('view'));
}
// Vista impilata, giro 22/11 quarto turno (corsa.js, SOSTA): peso dell'inquadratura in corsa. Scorrendo
// dipende dalla distanza dall'epoca più vicina; in un viaggio a tocco solo dalle epoche di partenza e di
// arrivo (in quelle attraversate la camera resta larga e la macchina passa montata senza fermarsi). Quando
// un viaggio si interrompe (mano sulla pagina, Pausa, altro tocco) il peso raggiunge quello nuovo in
// RACCORDO_MS invece di saltare.
// Giro 23/11, quinto turno: nei viaggi che attraversano epoche anche l'arretramento di metà tratto resta a
// regime dal mezzo del primo tratto al mezzo dell'ultimo (apertura, renderer.js aperturaMin): prima tornava
// a zero su ogni epoca attraversata e la camera pompava (5% per fotogramma a 390×844). Stesso raccordo.
const RACCORDO_MS=450;
let pesoMostrato=0,aperturaMostrata=0,raccordo=null,raccordoFrame=0;
let interrotto=null,inerzia=null; // viaggio interrotto e sua velocità ereditata dall'inseguimento (followStep)
// apertura del passaggio (renderer.js, opening) alla posizione s del tratto, e la posizione del suo culmine
// (fase visiva .5), dove l'apertura vale 1
function aperturaDi(s){const v=faseSosta(s);return 16*v*v*(1-v)*(1-v);}
// culmine del passaggio: posizione nel tratto con fase visiva .5, dove l'apertura vale 1
const CULMINE=(()=>{let a=0,b=1;for(let i=0;i<40;i++){const m=(a+b)/2;if(faseSosta(m)<.5)a=m;else b=m;}return (a+b)/2;})();
const liscia=t=>t<=0?0:t>=1?1:t*t*t*(t*(t*6-15)+10);
function passoRaccordo(){
  raccordoFrame=0;if(!raccordo)return;
  if(!travel&&!following)paint(progress,true);
  if(raccordo)raccordoFrame=requestAnimationFrame(passoRaccordo);
}
function stop(){
  if(travel&&(pesoMostrato>0||aperturaMostrata>0)){raccordo={da:pesoMostrato,daA:aperturaMostrata,t0:performance.now()};if(!raccordoFrame)raccordoFrame=requestAnimationFrame(passoRaccordo);}
  // velocità del viaggio interrotto: se subito dopo arriva lo scroll, l'inseguimento parte da lì (follow)
  if(travel)interrotto={v:travelSpeed,t:performance.now()};
  if(animationFrame)cancelAnimationFrame(animationFrame);animationFrame=0;travel=null;
  if(following){cancelAnimationFrame(following);following=0;api.following=false;chasing=false;}
  playerState();
}
let wasPlaying=null;
function playerState(){
  const playing=Boolean(travel);
  if(playing!==wasPlaying){
    ui.playLabel.textContent=playing?'Pausa':'Riproduci';
    ui.play.setAttribute('aria-label',playing?'Metti in pausa':'Riproduci la transizione');
    ui.play.setAttribute('aria-pressed',String(playing));
    wasPlaying=playing;
  }
  const atStart=progress<.0001&&!playing,atEnd=progress>2.9999&&!playing;
  if(ui.previous.disabled!==atStart)ui.previous.disabled=atStart;
  if(ui.next.disabled!==atEnd)ui.next.disabled=atEnd;
}
let lastPair='',lastClip='',lastA11y='',lastAt='';
function paint(value,force=false){
  const bounded=Math.max(0,Math.min(3,value));
  if(bounded===progress&&lastEra!==-1&&!force){playerState();return;}
  const before=progress;
  progress=bounded;
  const a=Math.floor(progress),b=Math.min(a+1,3),phase=progress-a;
  const nearest=Math.round(progress);
  const pair=a+'-'+b;
  // punto della coreografia (corsa.js, RITMO); nella vista impilata con le soste attorno alle epoche
  const impilata=impilataOra&&!reduced;
  const visual=impilata?faseSosta(phase):fase(phase);
  let peso=0,apertura=0;
  if(impilata&&b!==a){
    const x=travel?Math.min(Math.abs(travel.to-progress),Math.abs(progress-travel.start)+travel.d0):Math.min(phase,1-phase);
    peso=pesoCorsa(x);
    // viaggio che attraversa epoche: a regime dal culmine del primo tratto a quello dell'ultimo (moveTo)
    if(travel?.attraversa){const d=(progress-travel.start)*travel.dir;if(d>=travel.dIn-1e-9&&d<=travel.dOut+1e-9)apertura=travel.apL;}
    if(raccordo){const u=liscia((performance.now()-raccordo.t0)/RACCORDO_MS);if(u>=1)raccordo=null;else{peso=raccordo.da+(peso-raccordo.da)*u;apertura=raccordo.daA+(apertura-raccordo.daA)*u;}}
  }else raccordo=null;
  pesoMostrato=peso;aperturaMostrata=apertura;
  if(pair!==lastPair){
    for(let i=0;i<4;i++){
      const bg=backgrounds[i];bg.hidden=i!==a&&i!==b;
      if(!bg.hidden){if(i===a||phase>.05)backdrop(i);bg.style.zIndex=i===a?'0':'1';placeCurtain(bg,i===a?OPEN:0);}
    }
    lastPair=pair;lastClip='';
  }
  if(b!==a){
    const curtain=reduced?(phase>=.5?1:0):easeLama((visual-TENDINA_INIZIO)/TENDINA_DURATA);
    // tendina obliqua: il bordo alto precede quello basso di LAMA punti, il filo giallo lo segue.
    // La corsa finisce OLTRE il bordo destro (USCITA): prima il filo, largo 4 px, si fermava col piede
    // ancora dentro la scena (un triangolino giallo di circa 4×14 px nell'angolo in basso a destra) e
    // spariva di colpo a fine tendina. Ora esce intero prima che la tendina si spenga, e rientra intero.
    const x=curtain*(100+LAMA+USCITA);
    const key=curtain<=0?'chiusa':curtain>=1?'aperta':x.toFixed(2);
    if(key!==lastClip){
      placeCurtain(backgrounds[b],curtain>=1?OPEN:curtain<=0?0:x);lastClip=key;
      const visible=curtain>0&&curtain<1&&!reduced;
      thread.hidden=!visible;
      if(visible)placeThread(x);
    }
  }else if(!thread.hidden)thread.hidden=true;
  const shown=chasing?Math.round(target):nearest; // epoca dei testi (vedi chasing)
  if(lastEra!==shown){
    const from=lastEra;
    lastEra=shown;const era=eras[shown];
    const animate=from!==-1&&!reduced&&document.visibilityState==='visible',direction=shown>from?1:-1;
    caption.change(era,{animate,direction});
    stops.forEach((btn,i)=>btn.setAttribute('aria-current',String(i===shown)));
    ui.count.textContent=String(shown+1).padStart(2,'0')+' / 04';
    ui.current.textContent=[era.year,era.subtitle,era.title,era.body].join('. ');
    if(introDone&&from!==-1&&shownYear!==shown){
      caption.show(shown,{animate,direction});
      shownYear=shown;
    }else if(introDone||from===-1){caption.show(shown);shownYear=shown;}
  }
  if(view){
    const continuo=Boolean(travel||chasing||raccordo); // viaggio, inseguimento dello scroll o raccordo
    if(reduced||(phase<=.00001&&!(apertura>0)))view.show(nearest,nearest,0,0,0,continuo);else view.show(a,b,visual,peso,apertura,continuo);
  }
  // prossimo fondale in anticipo, prima che la tendina lo chieda
  if(phase>.05&&b!==a)backdrop(b);
  if(progress>before&&b+1<=3&&phase>.5)preloadBackdrop(b+1);
  if(progress<before&&a-1>=0&&phase<.5)preloadBackdrop(a-1);
  // il cursore e la sua traccia: si scrive solo quando la cifra mostrata cambia (scroll.js osserva
  // lo style del cursore, ogni scrittura inutile gli costava un giro dell'osservatore)
  const at=(progress*100/3).toFixed(3)+'%';
  ui.scrub.value=String(progress);
  if(at!==lastAt){ui.scrub.style.setProperty('--at',at);lastAt=at;}
  const valueText=phase>.02&&phase<.98?eras[a].label+' verso '+eras[b].label+', '+Math.round(phase*100)+'%':eras[nearest].year;
  if(valueText!==lastA11y){ui.scrub.setAttribute('aria-valuetext',valueText);lastA11y=valueText;}
  playerState();
}
// Lo scroll è la mano che smonta: risposta immediata ma senza gli scatti della rotella.
// L'avanzamento segue la posizione della pagina con una costante di tempo breve; fermata la mano,
// si ferma in meno di un decimo di secondo esattamente dove indica lo scroll.

// Giro 23/11, quinto turno: se lo scroll arriva mentre un viaggio a tocco è in corsa (rotella all'indietro
// durante Avanti), l'inseguimento eredita la velocità del viaggio e la passa all'inseguimento normale in
// INERZIA_MS, invece di invertire la scena in un fotogramma.
const INERZIA_MS=180;
function followStep(now){
  following=0;
  const dt=lastFollow?Math.min(64,now-lastFollow):16.7;lastFollow=now;
  const diff=target-progress;
  if(reduced||Math.abs(diff)>SALTO_EPOCHE||(!inerzia&&Math.abs(diff)<.0006)){inerzia=null;paint(reduced?Math.round(target):target);lastFollow=0;api.following=false;chasing=false;return;}
  let step=diff*(1-Math.exp(-dt/SEGUI_MS));
  if(inerzia){
    const k=liscia((performance.now()-inerzia.t0)/INERZIA_MS);
    step=inerzia.v*dt+(step-inerzia.v*dt)*k;
    if(k>=1)inerzia=null;
  }
  paint(progress+step);
  following=requestAnimationFrame(followStep);
}
// dentro il sito, finché il segnaposto copre la scena, lo scroll si annota ma non muove la scena:
// il segnaposto mostra la macchina ferma dell'epoca d'arrivo e la scena deve essere la stessa sotto di lui
// (ricarica a metà corsa: senza questo la scena andava a metà passaggio e le due macchine si sdoppiavano)
let held=window.parent!==window&&!manual,heldTarget=null;
function follow(value){
  if(held){heldTarget=Math.max(0,Math.min(3,value));return;}
  if(travel)stop(); // raccordo e velocità del viaggio interrotto (stop)
  if(interrotto&&performance.now()-interrotto.t<120&&interrotto.v&&!following)inerzia={v:interrotto.v,t0:performance.now()};
  interrotto=null;
  target=Math.max(0,Math.min(3,value));
  if(!view||document.hidden){if(following){cancelAnimationFrame(following);following=0;}api.following=false;chasing=false;paint(target);return;}
  api.following=true;chasing=true;
  if(!following){lastFollow=0;following=requestAnimationFrame(followStep);}
}
// Viaggio dopo un clic (CF-03, 13/11). Un passaggio di una sola epoca resta quello di Mattia: 4,6 s a
// velocità costante. Un viaggio più lungo (1960 → Oggi) non supera mai 4,6 s: parte e arriva con una
// curva morbida (Hermite cubica), e se il clic arriva a metà di un altro viaggio riparte dalla velocità
// che la scena ha in quel momento, senza fermarsi di colpo. La curva è monotona: i rulli della data e la
// tendina dei fondali vedono ogni epoca intermedia una sola volta, in ordine.
let travelSpeed=0; // epoche al millisecondo, con segno, del viaggio in corso
// Vista impilata (corsa.js, SOSTA): il viaggio diviso in pezzi con la loro durata. La coreografia di ogni
// tratto dura PASSAGGIO_MS (in un viaggio di più tratti tutte insieme non oltre PASSAGGIO_MS, come prima);
// la sosta dell'epoca di partenza e quella di arrivo durano SOSTA_MS l'una (lì la camera passa dal riposo
// alla corsa); le soste delle epoche attraversate scorrono alla velocità della coreografia (la macchina vi
// passa montata per un attimo, la camera resta larga, il cursore non salta).
// Giro 23/11, quinto turno: velocità continua. Dentro una sosta la posizione segue una cubica di Hermite
// che parte (o arriva) ferma all'epoca e si raccorda alla velocità della coreografia dall'altro capo: prima
// a s = .09 la velocità passava di colpo da .11 a .18 tratti al secondo mentre lo zoom era ancora in moto.
// In un viaggio di più tratti la sosta si accorcia quanto serve perché la cubica resti monotona.
// partenzaMobile: il viaggio riparte da un altro in corsa (velocità iniziale data dalla curva esterna).
// Restituisce la durata totale, la densità iniziale (ms per tratto) e la posizione per ogni frazione 0-1.
function pianoSoste(start,to,partenzaMobile){
  const dir=Math.sign(to-start),lo=Math.min(start,to),hi=Math.max(start,to);
  const tagli=[];
  for(let k=Math.floor(lo)-1;k<=Math.ceil(hi)+1;k++)for(const c of [k-SOSTA,k+SOSTA])if(c>lo+1e-9&&c<hi-1e-9)tagli.push(c);
  const xs=[start,...tagli.sort((x,y)=>(x-y)*dir),to];
  const ks=Math.round(start),sostaPartenza=Math.abs(start-ks)<=SOSTA+1e-9?ks:null;
  const pezzi=[];let coreografia=0;
  for(let i=0;i<xs.length-1;i++){
    const len=Math.abs(xs[i+1]-xs[i]),m=(xs[i]+xs[i+1])/2,k=Math.round(m),inSosta=Math.abs(m-k)<SOSTA;
    const tipo=inSosta&&(k===to||k===sostaPartenza)?'s':'c';
    const ms=tipo==='c'?len*PASSAGGIO_MS/(1-2*SOSTA):len*SOSTA_MS/SOSTA;
    if(tipo==='c')coreografia+=ms;
    if(len>1e-9)pezzi.push({da:xs[i],a:xs[i+1],tipo,ms,len});
  }
  const scala=coreografia>PASSAGGIO_MS?PASSAGGIO_MS/coreografia:1;
  const vc=(1-2*SOSTA)/(PASSAGGIO_MS*scala); // velocità della coreografia, tratti al ms
  for(const p of pezzi)if(p.tipo==='c')p.ms*=scala;
  // velocità ai capi di ogni sosta: quella della coreografia accanto, zero all'epoca di partenza e di arrivo
  pezzi.forEach((p,i)=>{
    if(p.tipo!=='s')return;
    const vIn=i>0?vc:partenzaMobile?vc:0,vOut=i<pezzi.length-1?vc:0;
    p.ms=Math.min(p.ms,2.9*p.len/Math.max(vIn,vOut,1e-12)); // cubica monotona: pendenze normalizzate ≤ 2,9
    p.m0=vIn*p.ms/p.len;p.m1=vOut*p.ms/p.len;
  });
  const totale=pezzi.reduce((t,p)=>t+p.ms,0);
  const primo=pezzi[0];
  const v0=!primo?0:primo.tipo==='c'?vc:partenzaMobile?vc:0;
  return {totale,densita0:v0>0?1/v0:0,
    posizione(f){
      if(!(totale>0))return to;
      let t=Math.max(0,Math.min(1,f))*totale;
      for(const p of pezzi){
        if(t<=p.ms||p===pezzi[pezzi.length-1]){
          const u=p.ms>0?Math.min(1,t/p.ms):1;
          const h=p.tipo==='s'?(u*u*u-2*u*u+u)*p.m0+(-2*u*u*u+3*u*u)+(u*u*u-u*u)*p.m1:u;
          return p.da+(p.a-p.da)*h;
        }
        t-=p.ms;
      }
      return to;
    }};
}
function moveTo(to){
  to=Math.max(0,Math.min(3,to));
  const v0=travel?travelSpeed:0;
  stop();travelSpeed=0;
  destination=to;
  if(reduced||!view||Math.abs(to-progress)<.0001){paint(to);return;}
  const start=progress,delta=to-start,span=Math.abs(delta);
  const lineare=span<=1.0001&&v0===0;
  // vista impilata, giro 23/11 quinto turno: un viaggio di più tratti da fermo procede uniforme sulla corsa
  // con partenza e arrivo morbidi (come in v4.1.1) e dura PASSAGGIO_MS + 2,5·SOSTA_MS (6,6 s): lo zoom delle
  // soste di partenza e di arrivo cade nella parte lenta della curva, la camera resta entro l'1% per
  // fotogramma. Gli altri viaggi seguono il piano a pezzi (pianoSoste).
  const lungo=impilataOra&&span>1.0001&&v0===0;
  const piano=impilataOra&&!lungo?pianoSoste(start,to,!lineare&&v0!==0):null;
  let duration,m0;
  if(lungo){duration=PASSAGGIO_MS+2.5*SOSTA_MS;m0=0;}
  else if(!piano){
    duration=lineare?Math.max(360,span*PASSAGGIO_MS):Math.min(PASSAGGIO_MS,Math.max(360,span*PASSAGGIO_MS));
    // pendenza iniziale normalizzata: la velocità attuale se va nella stessa direzione, mai oltre 3 (niente rimbalzi)
    m0=lineare?0:Math.max(0,Math.min(3,v0*duration/delta));
  }else{
    duration=Math.max(360,piano.totale);
    m0=lineare?0:Math.max(0,Math.min(3,v0*Math.sign(delta)*piano.densita0*duration/piano.totale));
  }
  const curva=u=>lineare?u:(-2*u*u*u+3*u*u)+m0*(u*u*u-2*u*u+u);
  // giro 21/11, terzo turno: ogni viaggio riconosce solo sé stesso (un fotogramma di un viaggio vecchio non
  // può far avanzare quello nuovo) e il fotogramma successivo si chiede anche se il disegno di questo
  // dovesse fallire: il viaggio non resta mai acceso senza avanzare (tasto su Pausa, scena ferma)
  const f0=start-Math.floor(start);
  // il viaggio attraversa almeno un'epoca (non solo quella d'arrivo): arretramento a regime (paint)
  const attraversa=Math.ceil(Math.min(start,to)+1e-6)<Math.max(start,to)-1e-6;
  // a regime dal culmine del primo tratto a quello dell'ultimo; se il culmine del primo è già alle spalle,
  // dalla partenza, al livello che l'apertura ha lì
  // distanze lungo il viaggio: dIn inizio del regime, dOut sua fine, dFine arrivo; apL livello del regime
  const dir=Math.sign(delta);
  let dIn=0,dOut=0,apL=0;
  if(attraversa){
    const su=dir>0,segPrimo=su?Math.floor(start+1e-9):Math.ceil(start-1e-9)-1,segUltimo=su?Math.ceil(to-1e-9)-1:Math.floor(to+1e-9);
    const ingresso=segPrimo+CULMINE,uscita=segUltimo+CULMINE; // culmini, nello stesso punto in salita e in discesa
    const passato=(ingresso-start)*dir<=0;
    apL=passato?Math.max(aperturaDi(start-Math.floor(start)),0):1;
    dIn=passato?0:(ingresso-start)*dir;dOut=Math.max(dIn,(uscita-start)*dir);
  }
  const mine=travel={start,to,dir,d0:Math.min(f0,1-f0),attraversa,dIn,dOut,dFine:span,apL};
  let previousTime=null,elapsed=0,lastP=start;
  function frame(){
    if(travel!==mine)return;
    // orologio della pagina, non l'ora del fotogramma: sotto carico Chrome può consegnare più fotogrammi
    // con la stessa ora (o un'ora più vecchia) e il viaggio resterebbe fermo con il tasto su Pausa
    const now=performance.now();
    let dt=0;
    if(previousTime!==null){dt=Math.max(0,Math.min(now-previousTime,110));elapsed+=dt;}
    previousTime=now;
    const u=Math.min(1,elapsed/duration);
    const p=piano?piano.posizione(curva(u)):start+delta*curva(u);
    if(dt>0)travelSpeed=(p-lastP)/dt;
    lastP=p;
    try{paint(p);}
    finally{
      if(travel===mine){
        if(u<1)animationFrame=requestAnimationFrame(frame);
        else{travelSpeed=0;paint(to);stop();}
      }
    }
  }
  playerState();animationFrame=requestAnimationFrame(frame);
}
$('scrub').addEventListener('input',e=>{stop();const v=Number(e.target.value);destination=Math.min(3,Math.floor(v)+1);paint(reduced?Math.round(v):v);});
// il cursore si aggancia con dolcezza all'epoca più vicina quando lo si lascia vicino a una tappa
$('scrub').addEventListener('change',e=>{const v=Number(e.target.value),r=Math.round(v);if(!reduced&&Math.abs(v-r)<.09&&Math.abs(v-r)>.0005)moveTo(r);});
$('next').addEventListener('click',()=>moveTo(Math.min(3,Math.floor(progress+.001)+1)));
$('previous').addEventListener('click',()=>moveTo(Math.max(0,Math.ceil(progress-.001)-1)));
$('play').addEventListener('click',()=>{if(travel){stop();return;}if(progress>=2.999){paint(0);moveTo(1);}else moveTo(Math.abs(progress-Math.round(progress))>.003&&Math.abs(destination-progress)>.001?destination:Math.min(3,Math.floor(progress+.002)+1));});
function setMotion(){view?.setReducedMotion(reduced);const sw=$('motion-switch');sw.setAttribute('aria-pressed',String(reduced));}
$('motion-switch').addEventListener('click',e=>{
  // dentro il sito il tasto comanda il Movimento di tutto il sito (stesso effetto del tasto in testata)
  if(e.isTrusted&&window.parent!==window){
    try{const hook=window.parent.tedeschiParcoMovimento;if(typeof hook==='function'){hook();return;}}catch{}
  }
  reduced=!reduced;stop();try{localStorage.setItem('tedeschi-3d-motion',reduced?'ridotto':'completo');}catch{}setMotion();
  if(reduced){caption.settle();caption.show(Math.round(progress));finishIntro();}
  paint(Math.round(progress),true);
});
$('recenter').addEventListener('click',()=>view?.reset(true));
document.addEventListener('visibilitychange',()=>{if(document.hidden&&travel)stop();});

// ---------- composizione: la colonna dei testi è una zona protetta ----------
// Da 641 px la vista 3D comincia dopo la colonna (CSS, --zona). Su telefono la vista sta sopra
// i testi: qui si misura l'altezza massima della colonna sulle quattro epoche e si alza il blocco
// quando non ci starebbe, così il modello non tocca mai l'anno e il testo non esce dalla scena.
const scene=document.querySelector('.scene'),story=$('story');
const probe=story.querySelector('.story-copy').cloneNode(true);
probe.classList.add('story-probe');probe.setAttribute('aria-hidden','true');story.append(probe);
function inkRight(el){
  const r=document.createRange();r.selectNodeContents(el);
  let right=0;for(const q of r.getClientRects())right=Math.max(right,q.right);
  return right;
}
// appoggio a terra nella vista impilata (renderer.js, grounding): la macchina scende sul terreno della foto
const APPOGGIO=.8;
let impilataOra=false;
function layout(){
  scene.style.removeProperty('--story-top');scene.style.removeProperty('--zona');
  const h=scene.clientHeight;if(!h)return;
  // impilata: telefono, oppure scena più alta che larga (tablet in verticale)
  const stacked=innerWidth<=640||h>scene.clientWidth*.82;
  impilataOra=stacked;view?.setGrounding(stacked?APPOGGIO:0);
  scene.classList.toggle('impilata',stacked&&innerWidth>640);
  const pp=probe.querySelector('.period'),pt=probe.querySelector('.era-title'),pb=probe.querySelector('p');
  let tallest=0,right=0;
  for(const e of eras){
    pp.textContent=e.subtitle;pt.textContent=e.title;pb.textContent=e.body;tallest=Math.max(tallest,probe.offsetHeight);
    right=Math.max(right,inkRight(pp),inkRight(pt),inkRight(pb));
  }
  // la zona protetta è larga quanto l'inchiostro più largo delle quattro epoche (anno compreso),
  // non quanto la colonna: la macchina guadagna spazio senza mai toccare un testo
  const sceneLeft=scene.getBoundingClientRect().left,storyLeft=story.getBoundingClientRect().left;
  right=Math.max(right,yearDisplay.getBoundingClientRect().right);
  if(right>storyLeft&&!stacked)scene.style.setProperty('--zona',Math.ceil(right-storyLeft)+'px');
  const copyTop=story.querySelector('.story-copy').offsetTop;
  const need=copyTop+tallest;
  // telefono basso (style.css, max-height 680): margine sotto i testi più stretto, lo spazio va alla macchina
  const basso=matchMedia('(max-width:640.98px) and (max-height:680px)').matches;
  const top=story.offsetTop,margin=basso?8:Math.max(10,h*.025);
  // su telefono il blocco dei testi si appoggia al fondo della scena: tutto lo spazio sopra va al modello
  if(stacked)scene.style.setProperty('--story-top',Math.max(8,Math.floor(Math.max(h*.42,h-margin-need)))+'px');
  else if(top+need>h-margin)scene.style.setProperty('--story-top',Math.max(8,Math.floor(h-margin-need))+'px');
  scene.dataset.fit=String(story.offsetTop+need<=h-margin+1);
  // la tendina dipende da larghezza e altezza della scena: a ogni cambio si ricalcola sul posto
  measureStage();lastClip='';
  if(lastEra!==-1)paint(progress,true);
}
new ResizeObserver(()=>layout()).observe(scene);
layout();

setMotion();paint(startAt,true);
let markReady,revealNow;
const revealed=new Promise(r=>{revealNow=r;});
const api={ready:new Promise(resolve=>{markReady=resolve;}),eras,following:false,
  seek(value){stop();paint(Number(value)||0);},
  follow(value){follow(Number(value)||0);},
  halt(){if(travel)stop();},
  seekIntro(value){stop();paint(0,true);finishIntro();caption.show(0);},
  machineRect(){return view?.machineRect()??null;},
  // la pagina ospite avvisa quando il segnaposto è sparito: solo allora partono rullo e testi d'apertura
  revealed(){revealNow?.();},
  get canvas(){return view?.canvas;},get progress(){return progress;},get metrics(){return metrics;}};
let metrics=null;
window.tedeschiExperience=api;
if(!manual)connectPageScroll(api);

// ---------- carattere: kit Adobe New Science, lettering vettoriale solo se il kit non arriva ----------
// Il kit arriva quasi sempre dalla cache (la pagina ospite lo ha già chiesto). Se è lento il testo
// resta nel carattere di riserva e cambia quando arriva; le composizioni vettoriali (2 MB) si
// scaricano solo se il kit fallisce o non arriva entro 15 secondi.
function fontsReady(){
  const link=document.getElementById('kit');
  // il foglio del kit parte come media=print (non blocca la pagina): un @font-face in un foglio print
  // non vale per lo schermo, quindi lo si accende subito, senza aspettare il suo onload
  if(link&&link.media!=='all')link.media='all';
  const sheet=!link?Promise.resolve(false):link.sheet?Promise.resolve(true):new Promise(r=>{
    link.addEventListener('load',()=>r(true),{once:true});link.addEventListener('error',()=>r(false),{once:true});setTimeout(()=>r(false),15000);
  });
  // le regole @font-face del foglio entrano nell'insieme dei caratteri al ricalcolo degli stili:
  // si aspetta di vederle (fino a 2 s) prima di chiedere i caratteri
  const faces=()=>[...document.fonts].some(f=>/new-science/.test(f.family));
  const declared=ok=>!ok?false:new Promise(r=>{const t0=performance.now();(function check(){getComputedStyle(document.body).fontFamily;if(faces())r(true);else if(performance.now()-t0>2000)r(false);else requestAnimationFrame(check);})();});
  return sheet.then(declared).then(ok=>ok&&Promise.race([
    Promise.all([document.fonts.load('700 40px new-science'),document.fonts.load('400 16px new-science'),document.fonts.load('700 40px new-science-extended')])
      .then(list=>list.every(f=>f.length>0)),
    new Promise(r=>setTimeout(()=>r(false),10000))
  ])).catch(()=>false);
}
document.fonts?.addEventListener?.('loadingdone',()=>layout());
const lettering=fontsReady().then(async ok=>{
  if(ok){document.documentElement.classList.add('kit-ok');return true;}
  // ripiego: le composizioni vettoriali approvate da Mattia (2 MB), solo in questo caso
  try{const m=await import('./new-science.js');m.installLettering();}catch(error){console.warn('Lettering:',error);}
  document.documentElement.classList.add('kit-no');
  return false;
}).finally(()=>layout());

async function boot(){
  performance.mark('parco:avvio');
  await new Promise(requestAnimationFrame);
  try{
    backdrop(Math.floor(startAt));
    const samplesReady=sampleBackdrops(eras),models=[];
    for(let i=0;i<eras.length;i++){
      if(i>0)await new Promise(requestAnimationFrame);
      models.push(createMachine(THREE,i,createMaterials(THREE,i)));
    }
    performance.mark('parco:modelli');
    const lightSamples=await samplesReady;
    view=createMachineView(THREE,$('view'),models,createTransition,lightSamples,{first:Math.round(startAt),onOrbit:parallax,grounding:impilataOra?APPOGGIO:0,forzaYaw:params.has('impilata'),assestaDopo:window.parent!==window&&!manual});
    view.setReducedMotion(reduced);
    performance.mark('parco:vista');
    metrics={partCounts:models.map(m=>m.parts.length),bounds:view.bounds.map(b=>[b.min.toArray(),b.max.toArray()]),webgl:true};
    view.canvas.style.visibility='hidden';
    // prima l'epoca da cui si parte, le altre in sottofondo
    const [finishState, groundReady]=await Promise.all([view.firstFinish, view.groundReady, view.warm()]);
    metrics.finishes=finishState;
    metrics.quality=view.quality; // scheda integrata e densità di pixel scelta (renderer.js, densita.js)
    metrics.groundContact=groundReady;
    performance.mark('parco:finitura');
    paint(progress,true);
    view.canvas.style.visibility='visible';
    $('loading').hidden=true;
    performance.mark('parco:visibile');
    // le altre epoche si preparano dopo che la scena è già in mano al visitatore
    requestAnimationFrame(()=>view.prepareTransitions().catch(()=>{}).then(()=>performance.mark('parco:passaggi-pronti')));
    view.finishReady.then(state=>{metrics.finishes=state;});
    // fondali in fila dopo la scena, poi la loro preparazione sulla GPU (vedi prewarmBackdrops)
    // subito, non a scaglioni: chi scorre appena la scena compare deve trovarli già pronti (misurato:
    // con la preparazione ancora in corso i primi passaggi avevano fotogrammi da 80-170 ms su Intel UHD)
    Promise.all([0,1,2,3].map(preloadBackdrop)).then(()=>requestAnimationFrame(prewarmBackdrops));
  }catch(error){
    console.error('Visualizzatore 3D:',error);metrics={webgl:false,error:String(error)};
    $('loading').textContent='Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.';
    $('recenter').hidden=true;paint(0);
  }
  await Promise.race([lettering,new Promise(r=>setTimeout(r,1200))]);
  performance.mark('parco:pronta');
  markReady(metrics);
  // dentro il sito l'apertura (rullo «19→6», testi) aspetta che il segnaposto se ne sia andato:
  // partirebbe sotto di lui, a scena ancora semitrasparente; da sola parte subito
  if(window.parent!==window&&!manual)await Promise.race([revealed,new Promise(r=>setTimeout(r,4000))]);
  held=false;
  // segnaposto sparito: la macchina lascia l'angolo delle foto del segnaposto per quello migliore (renderer.js)
  view?.assesta?.(!reduced);
  if(heldTarget!==null&&Math.abs(heldTarget-progress)>.0006)follow(heldTarget);
  enterFirstEra();
}
// un tocco di parallasse: il fondale scorre appena in verso opposto alla rotazione del modello
// vista girata dal visitatore: su telefono e scena impilata «Vista iniziale» compare solo in questo caso
let ruotataOra=false;
function parallax(yaw,elevation){
  const girata=Math.abs(yaw)+Math.abs(elevation)>.002;
  if(girata!==ruotataOra){
    ruotataOra=girata;
    // il tasto sparisce a vista ripristinata: se aveva il fuoco, il fuoco passa al tasto Movimento
    if(!girata&&document.activeElement===$('recenter'))$('motion-switch').focus({preventScroll:true});
    scene.classList.toggle('ruotata',girata);
  }
  const s=1+Math.min(.04,Math.abs(yaw)*.03+Math.abs(elevation)*.05);
  ui.backdrops.style.transform=Math.abs(yaw)+Math.abs(elevation)<1e-4?'':'translate3d('+(-yaw*14).toFixed(2)+'px,'+(elevation*8).toFixed(2)+'px,0) scale('+s.toFixed(4)+')';
}
boot();
