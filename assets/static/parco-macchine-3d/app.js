import * as THREE from './three-parti.js';
import {createMachine} from './model.js';
import {createMaterials} from './materials.js';
import {createTransition} from './motion.js';
import {createMachineView} from './renderer.js';
import {sampleBackdrops} from './lighting.js';
import {connectPageScroll} from './scroll.js';
import {createCaption} from './caption.js';

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
const backgrounds=[],stops=[];
const caption=createCaption($('story'));
let target=0,following=0,lastFollow=0;
let view=null,progress=0,destination=0,travel=null,animationFrame=0,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
try{const remembered=localStorage.getItem('tedeschi-3d-motion');if(remembered!==null)reduced=remembered==='ridotto';}catch{}
if(manual)reduced=true;
for (const [i,e] of eras.entries()){
  const bg=document.createElement('div');bg.className='photoscene';$('backdrops').append(bg);backgrounds.push(bg);
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
// il filo giallo sul bordo della tendina, come nei tagli del sito
const thread=document.createElement('div');thread.className='curtain-thread';thread.hidden=true;$('backdrops').append(thread);
const loaded=new Set();
function backdrop(i){
  if(loaded.has(i))return;loaded.add(i);
  backgrounds[i].style.backgroundImage='url("'+backdropURL(i)+'")';
}
function preloadBackdrop(i){
  if(loaded.has(i))return Promise.resolve();
  const img=new Image();img.src=backdropURL(i);
  return img.decode().catch(()=>{}).then(()=>backdrop(i));
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
function stop(){
  if(animationFrame)cancelAnimationFrame(animationFrame);animationFrame=0;travel=null;
  if(following){cancelAnimationFrame(following);following=0;api.following=false;}
  playerState();
}
let wasPlaying=null;
function playerState(){
  const playing=Boolean(travel);
  if(playing!==wasPlaying){
    $('play-symbol').textContent=playing?'Ⅱ':'▶';$('play-label').textContent=playing?'Pausa':'Riproduci';
    $('play').setAttribute('aria-label',playing?'Metti in pausa':'Riproduci la transizione');
    $('play').setAttribute('aria-pressed',String(playing));
    wasPlaying=playing;
  }
  const atStart=progress<.0001&&!playing,atEnd=progress>2.9999&&!playing;
  if($('previous').disabled!==atStart)$('previous').disabled=atStart;
  if($('next').disabled!==atEnd)$('next').disabled=atEnd;
}
const clamp01=x=>Math.max(0,Math.min(1,x));
// curva del taglio del sito (--ease-lama, cubic-bezier(.7,0,.2,1)), risolta in x
function easeLama(x){
  if(x<=0)return 0;if(x>=1)return 1;
  const p1x=.7,p1y=0,p2x=.2,p2y=1;
  let t=x;
  for(let i=0;i<6;i++){
    const cx=3*p1x,bx=3*(p2x-p1x)-cx,ax=1-cx-bx;
    const fx=((ax*t+bx)*t+cx)*t-x,d=(3*ax*t+2*bx)*t+cx;
    if(Math.abs(fx)<1e-5||!d)break;t-=fx/d;
  }
  t=clamp01(t);const cy=3*p1y,by=3*(p2y-p1y)-cy,ay=1-cy-by;
  return ((ay*t+by)*t+cy)*t;
}
const LAMA=16; // inclinazione della tendina in % della larghezza, come --lama-x del sito
let lastPair='',lastClip='',lastA11y='';
function paint(value,force=false){
  const bounded=Math.max(0,Math.min(3,value));
  if(bounded===progress&&lastEra!==-1&&!force){playerState();return;}
  const before=progress;
  progress=bounded;
  const a=Math.floor(progress),b=Math.min(a+1,3),phase=progress-a;
  const nearest=Math.round(progress);
  const pair=a+'-'+b;
  if(pair!==lastPair){
    for(let i=0;i<4;i++){
      const bg=backgrounds[i];bg.hidden=i!==a&&i!==b;
      if(!bg.hidden){if(i===a||phase>.05)backdrop(i);bg.style.zIndex=i===a?'0':'1';bg.style.clipPath=i===a?'none':'polygon(0 0,0 0,0 100%,0 100%)';}
    }
    lastPair=pair;lastClip='';
  }
  if(b!==a){
    const curtain=reduced?(phase>=.5?1:0):easeLama((phase-.33)/.38);
    // tendina obliqua: il bordo alto precede quello basso di LAMA punti, il filo giallo lo segue
    const x=curtain*(100+LAMA);
    const clip=curtain<=0?'polygon(0 0,0 0,0 100%,0 100%)':curtain>=1?'none':
      'polygon(0 0,'+x.toFixed(2)+'% 0,'+(x-LAMA).toFixed(2)+'% 100%,0 100%)';
    if(clip!==lastClip){
      backgrounds[b].style.clipPath=clip;lastClip=clip;
      const visible=curtain>0&&curtain<1&&!reduced;
      thread.hidden=!visible;
      if(visible)thread.style.clipPath='polygon(calc('+x.toFixed(2)+'% - 4px) 0,'+x.toFixed(2)+'% 0,'+(x-LAMA).toFixed(2)+'% 100%,calc('+(x-LAMA).toFixed(2)+'% - 4px) 100%)';
    }
  }else if(!thread.hidden)thread.hidden=true;
  if(lastEra!==nearest){
    const from=lastEra;
    lastEra=nearest;const era=eras[nearest];caption.change(era);
    stops.forEach((btn,i)=>btn.setAttribute('aria-current',String(i===nearest)));
    $('era-count').textContent=String(nearest+1).padStart(2,'0')+' / 04';
    $('current-era').textContent=[era.year,era.subtitle,era.title,era.body].join('. ');
    if(introDone&&from!==-1&&shownYear!==nearest){
      caption.show(nearest,{animate:!reduced&&document.visibilityState==='visible',direction:nearest>from?1:-1});
      shownYear=nearest;
    }else if(introDone||from===-1){caption.show(nearest);shownYear=nearest;}
  }
  if(view){
    if(reduced||phase<=.00001)view.show(nearest,nearest,0);else view.show(a,b,phase);
  }
  // prossimo fondale in anticipo, prima che la tendina lo chieda
  if(phase>.05&&b!==a)backdrop(b);
  if(progress>before&&b+1<=3&&phase>.5)preloadBackdrop(b+1);
  if(progress<before&&a-1>=0&&phase<.5)preloadBackdrop(a-1);
  $('scrub').value=String(progress);$('scrub').style.setProperty('--at',(progress*100/3).toFixed(3)+'%');
  const valueText=phase>.02&&phase<.98?eras[a].label+' verso '+eras[b].label+', '+Math.round(phase*100)+'%':eras[nearest].year;
  if(valueText!==lastA11y){$('scrub').setAttribute('aria-valuetext',valueText);lastA11y=valueText;}
  playerState();
}
// Lo scroll è la mano che smonta: risposta immediata ma senza gli scatti della rotella.
// L'avanzamento segue la posizione della pagina con una costante di tempo breve; fermata la mano,
// si ferma in meno di un decimo di secondo esattamente dove indica lo scroll.

const TAU=78;
function followStep(now){
  following=0;
  const dt=lastFollow?Math.min(64,now-lastFollow):16.7;lastFollow=now;
  const diff=target-progress;
  if(reduced||Math.abs(diff)<.0006||Math.abs(diff)>1.6){paint(reduced?Math.round(target):target);lastFollow=0;api.following=false;return;}
  paint(progress+diff*(1-Math.exp(-dt/TAU)));
  following=requestAnimationFrame(followStep);
}
function follow(value){
  if(animationFrame){cancelAnimationFrame(animationFrame);animationFrame=0;travel=null;}
  target=Math.max(0,Math.min(3,value));
  if(!view||document.hidden){if(following){cancelAnimationFrame(following);following=0;}api.following=false;paint(target);return;}
  api.following=true;
  if(!following){lastFollow=0;following=requestAnimationFrame(followStep);}
}
// Viaggio dopo un clic (CF-03, 13/11). Un passaggio di una sola epoca resta quello di Mattia: 4,6 s a
// velocità costante. Un viaggio più lungo (1960 → Oggi) non supera mai 4,6 s: parte e arriva con una
// curva morbida (Hermite cubica), e se il clic arriva a metà di un altro viaggio riparte dalla velocità
// che la scena ha in quel momento, senza fermarsi di colpo. La curva è monotona: i rulli della data e la
// tendina dei fondali vedono ogni epoca intermedia una sola volta, in ordine.
const PASSAGGIO=4600;
let travelSpeed=0; // epoche al millisecondo, con segno, del viaggio in corso
function moveTo(to){
  to=Math.max(0,Math.min(3,to));
  const v0=travel?travelSpeed:0;
  stop();travelSpeed=0;
  destination=to;
  if(reduced||!view||Math.abs(to-progress)<.0001){paint(to);return;}
  const start=progress,delta=to-start,span=Math.abs(delta);
  const lineare=span<=1.0001&&v0===0;
  const duration=lineare?Math.max(360,span*PASSAGGIO):Math.min(PASSAGGIO,Math.max(360,span*PASSAGGIO));
  // pendenza iniziale normalizzata: la velocità attuale se va nella stessa direzione, mai oltre 3 (niente rimbalzi)
  const m0=lineare?0:Math.max(0,Math.min(3,v0*duration/delta));
  const curva=u=>lineare?u:(-2*u*u*u+3*u*u)+m0*(u*u*u-2*u*u+u);
  travel={start,to};
  let previousTime=null,elapsed=0,lastP=start;
  function frame(now){
    if(!travel)return;
    let dt=0;
    if(previousTime!==null){dt=Math.min(now-previousTime,110);elapsed+=dt;}
    previousTime=now;
    const u=Math.min(1,elapsed/duration);
    const p=start+delta*curva(u);
    if(dt>0)travelSpeed=(p-lastP)/dt;
    lastP=p;
    paint(p);
    if(u<1)animationFrame=requestAnimationFrame(frame);
    else{stop();travelSpeed=0;paint(to);}
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
  if(reduced){caption.show(Math.round(progress));finishIntro();}
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
function layout(){
  scene.style.removeProperty('--story-top');scene.style.removeProperty('--zona');
  const h=scene.clientHeight;if(!h)return;
  // impilata: telefono, oppure scena più alta che larga (tablet in verticale)
  const stacked=innerWidth<=640||h>scene.clientWidth*.82;
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
  const top=story.offsetTop,margin=Math.max(10,h*.025);
  // su telefono il blocco dei testi si appoggia al fondo della scena: tutto lo spazio sopra va al modello
  if(stacked)scene.style.setProperty('--story-top',Math.max(8,Math.floor(Math.max(h*.42,h-margin-need)))+'px');
  else if(top+need>h-margin)scene.style.setProperty('--story-top',Math.max(8,Math.floor(h-margin-need))+'px');
  scene.dataset.fit=String(story.offsetTop+need<=h-margin+1);
}
new ResizeObserver(()=>layout()).observe(scene);
layout();

setMotion();paint(startAt,true);
let markReady;
const api={ready:new Promise(resolve=>{markReady=resolve;}),eras,following:false,
  seek(value){stop();paint(Number(value)||0);},
  follow(value){follow(Number(value)||0);},
  halt(){if(travel)stop();},
  seekIntro(value){stop();paint(0,true);finishIntro();caption.show(0);},
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
    view=createMachineView(THREE,$('view'),models,createTransition,lightSamples,{first:Math.round(startAt),onOrbit:parallax});
    view.setReducedMotion(reduced);
    performance.mark('parco:vista');
    metrics={partCounts:models.map(m=>m.parts.length),bounds:view.bounds.map(b=>[b.min.toArray(),b.max.toArray()]),webgl:true};
    view.canvas.style.visibility='hidden';
    // prima l'epoca da cui si parte, le altre in sottofondo
    const [finishState, groundReady]=await Promise.all([view.firstFinish, view.groundReady, view.warm()]);
    metrics.finishes=finishState;
    metrics.groundContact=groundReady;
    performance.mark('parco:finitura');
    paint(progress,true);
    view.canvas.style.visibility='visible';
    $('loading').hidden=true;
    performance.mark('parco:visibile');
    // le altre epoche si preparano dopo che la scena è già in mano al visitatore
    requestAnimationFrame(()=>view.prepareTransitions().catch(()=>{}).then(()=>performance.mark('parco:passaggi-pronti')));
    view.finishReady.then(state=>{metrics.finishes=state;});
    for(let i=0;i<4;i++)if(!loaded.has(i))setTimeout(()=>preloadBackdrop(i),400+i*250);
  }catch(error){
    console.error('Visualizzatore 3D:',error);metrics={webgl:false,error:String(error)};
    $('loading').textContent='Per vedere e ruotare gli escavatori, apri questa pagina in un browser con WebGL attivo.';
    $('recenter').hidden=true;paint(0);
  }
  await Promise.race([lettering,new Promise(r=>setTimeout(r,1200))]);
  performance.mark('parco:pronta');
  markReady(metrics);enterFirstEra();
}
// un tocco di parallasse: il fondale scorre appena in verso opposto alla rotazione del modello
function parallax(yaw,elevation){
  const s=1+Math.min(.04,Math.abs(yaw)*.03+Math.abs(elevation)*.05);
  $('backdrops').style.transform=Math.abs(yaw)+Math.abs(elevation)<1e-4?'':'translate3d('+(-yaw*14).toFixed(2)+'px,'+(elevation*8).toFixed(2)+'px,0) scale('+s.toFixed(4)+')';
}
boot();
