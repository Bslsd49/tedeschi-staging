// The parent page owns the scroll position. No wheel or touch event is intercepted.
const CHANNEL = 'tedeschi-parco-macchine-v1';
const LAST_ERA = 3;
const bound = n => Math.min(LAST_ERA, Math.max(0, n));
let sectionNumber = 0;

function addStyles() {
  if (document.getElementById('td3-scroll-styles')) return;
  const style = document.createElement('style');
  style.id = 'td3-scroll-styles';
  style.textContent = `
    .td3-track { position:relative; display:block; margin:0; padding:0; border:0; }
    .td3-pin { display:block; position:relative; height:100vh; height:calc(100svh - var(--tedeschi-top, 0px)); min-height:510px; }
    .td3-track[data-td3-active] > .td3-pin { position:sticky; top:var(--tedeschi-top, 0px); min-height:0; }
    .td3-track[data-td3-active]::after { content:""; display:block; height:225vh; height:225svh; pointer-events:none; }
    @media (min-width:761px) and (max-height:550px) { .td3-track:not([data-td3-active]) > .td3-pin {min-height:700px} }
    .td3-pin > iframe { display:block; width:100%; height:100%; margin:0; border:0; }
    .td3-skip { position:absolute; left:12px; top:10px; z-index:8; background:#10120f; color:white; padding:10px 14px; font:600 15px/1.3 'new-science','New Science',Arial,sans-serif; border-radius:4px; transform:translateY(-170%); opacity:0; }
    .td3-skip:focus-visible { transform:none; opacity:1; }
    .td3-exit { display:block; height:0; }
    html.td3-embedded,html.td3-embedded body { margin:0; height:100%; overflow:clip; }
    .td3-pin > #exhibit,html.td3-embedded #exhibit { display:grid; grid-template-rows:auto minmax(0,1fr) auto; height:100%; width:100%; }
    .td3-pin > #exhibit > .scene, html.td3-embedded #exhibit > .scene { min-height:0; height:auto; }
  `;
  document.head.append(style);
}

// The sticky track has a fixed scroll distance. The iframe and the standalone
// version share this mapping in both directions; the ends are reachable naturally.
function createDriver(track, pin, after, seek) {
  let frame = 0, last = NaN, ready = false, reduced = true;
  const stickyTop = () => parseFloat(getComputedStyle(pin).top) || 0;
  function geometry() {
    const rect = track.getBoundingClientRect();
    const top = stickyTop();
    return {run: Math.max(1, track.offsetHeight - pin.offsetHeight), offset: top - rect.top};
  }
  function read() {
    frame = 0;
    if (!ready || !track.hasAttribute('data-td3-active')) return;
    const {run,offset} = geometry();
    const value = bound(LAST_ERA * offset / run);
    if (Number.isFinite(last) && Math.abs(value - last) <= LAST_ERA * 1.05 / run) return;
    last = value;
    seek(value);
  }
  function queue() { if (!frame) frame = requestAnimationFrame(read); }
  function layout() {
    if (!ready) return;
    const allowed = !reduced && window.innerHeight >= 510 && track.clientWidth >= 300;
    const active = track.hasAttribute('data-td3-active');
    if (allowed !== active) {
      const old = geometry();
      track.toggleAttribute('data-td3-active', allowed);
      if (!allowed && old.offset > 0 && old.offset < old.run) {
        // Preserve the exhibit in the viewport when reducing motion from inside it.
        window.scrollTo({top:window.scrollY + track.getBoundingClientRect().top - stickyTop(),behavior:'instant'});
      }
      last = NaN;
    }
    queue();
  }
  function status(prefersReduced) {
    const first = !ready;
    const changed = reduced !== prefersReduced;
    reduced = prefersReduced; ready = true;
    if (first || changed) layout();
  }
  function manual(value) {
    if (!Number.isFinite(value) || !track.hasAttribute('data-td3-active')) return;
    const {run,offset} = geometry();
    // An offscreen or partly entered exhibit must never pull the host page to it.
    if (offset < -1 || offset > run + 1) return;
    last = bound(value);
    const nextY = window.scrollY - offset + last * run / LAST_ERA;
    if (Math.abs(nextY-window.scrollY) > 1) window.scrollTo({top:nextY,behavior:'instant'});
  }
  window.addEventListener('scroll', queue, {passive:true});
  window.addEventListener('resize', layout, {passive:true});
  window.addEventListener('pageshow', queue);
  const resize = new ResizeObserver(queue);
  resize.observe(pin); resize.observe(track);
  after.addEventListener('focus', queue);
  return {status,manual,refresh(){last=NaN;queue();}};
}

function makeTrack(track, content) {
  addStyles();
  track.classList.add('td3-track');
  const pin = document.createElement('div'); pin.className='td3-pin';
  const exit = document.createElement('span');
  exit.id='td3-exit-'+(++sectionNumber); exit.tabIndex=-1; exit.className='td3-exit';
  exit.setAttribute('aria-label','Fine dell’evoluzione del parco macchine');
  const skip = document.createElement('a');
  skip.href='#'+exit.id; skip.className='td3-skip'; skip.textContent='Salta la sequenza delle macchine';
  pin.append(skip,content); track.append(pin); track.after(exit);
  return {pin,exit};
}

function getMotionReduction() {
  const button=document.getElementById('motion-switch');
  return button ? button.getAttribute('aria-pressed')==='true' : matchMedia('(prefers-reduced-motion:reduce)').matches;
}
function setHint(active) {
  const hint=document.querySelector('.timeline-name > span:last-child');
  if(!hint) return;
  const text=active?'Scorri o scegli un’epoca':'Seleziona un’epoca';
  if(hint.textContent!==text) hint.textContent=text;
}

// Observe the existing playhead so clicks, keyboard commands, scrubbing and
// playback keep the same physical page position. Incoming seeks are not echoed.
function observeComponent(api, manual, preference) {
  let ownerValue = NaN;
  const rail=document.getElementById('scrub');
  const motion=document.getElementById('motion-switch');
  if (rail) new MutationObserver(()=>{
    // l'avanzamento che insegue lo scroll (api.following) non deve rimbalzare sulla pagina
    if (api.following || (Number.isFinite(ownerValue) && Math.abs(ownerValue-api.progress)<.000001)) return;
    ownerValue=api.progress; manual(api.progress);
  }).observe(rail,{attributes:true,attributeFilter:['style']});
  if (motion) new MutationObserver(()=>preference(getMotionReduction())).observe(motion,{attributes:true,attributeFilter:['aria-pressed']});
  return value=>{
    if(!Number.isFinite(value)) return;
    ownerValue=bound(value);
    if(Math.abs(api.progress-ownerValue)>.000001) (api.follow||api.seek)(ownerValue);
  };
}

// Initialize automatically from app.js after assigning the public preview API.
// A double-clicked standalone HTML never needs cross-document messages.
export function connectPageScroll(api) {
  if (window===window.parent) {
    if (!document.body.hasAttribute('data-tedeschi-scroll')) return;
    const exhibit=document.getElementById('exhibit');
    const track=document.createElement('div'); exhibit.before(track);
    const {pin,exit}=makeTrack(track,exhibit);
    let apply=()=>{}, disabled=false;
    const driver=createDriver(track,pin,exit,value=>apply(value));
    apply=observeComponent(api,v=>driver.manual(v),reduced=>{
      driver.status(reduced||disabled); setHint(track.hasAttribute('data-td3-active'));
    });
    new MutationObserver(()=>setHint(track.hasAttribute('data-td3-active'))).observe(track,{attributes:true,attributeFilter:['data-td3-active']});
    api.ready.then(metrics=>{disabled=metrics?.webgl===false;driver.status(getMotionReduction()||disabled);});
    return;
  }
  // Installation is deliberately same-origin. Other sites may embed the manual
  // component normally, but cannot send it timeline commands.
  const origin=window.location.origin;
  if (!/^https?:\/\//.test(origin)) return;
  try { if(window.parent.location.origin!==origin) return; } catch { return; }
  const send=(type,extra={})=>window.parent.postMessage({channel:CHANNEL,type,...extra},origin);
  let connected=false,ready=false,disabled=false;
  const apply=observeComponent(api,v=>{if(connected)send('manual',{value:v});},reduced=>{
    if(connected&&ready) send('ready',{reduced:reduced||disabled});
  });
  window.addEventListener('message',e=>{
    const m=e.data;
    if(e.source!==window.parent || e.origin!==origin || m?.channel!==CHANNEL) return;
    if(m.type==='connect'){
      connected=true; addStyles(); document.documentElement.classList.add('td3-embedded');
      if(ready) send('ready',{reduced:getMotionReduction()||disabled});
    } else if(connected&&ready&&m.type==='position'&&Number.isFinite(m.value)) {
      if(!getMotionReduction()&&!disabled) apply(m.value);
    } else if(connected&&m.type==='hand') {
      // la mano del visitatore sulla pagina vince sul viaggio animato partito da un clic
      api.halt?.();
    } else if(connected&&m.type==='mode'&&typeof m.active==='boolean') {
      setHint(m.active);
    }
  });
  // Either side may attach first, including an iframe restored from history.
  api.ready.then(metrics=>{
    ready=true; disabled=metrics?.webgl===false; send(connected?'ready':'available',{reduced:getMotionReduction()||disabled});
  });
}

export function mountScrollFrame(track) {
  if (track.dataset.td3Mounted) return;
  const src=new URL(track.getAttribute('data-tedeschi-3d'),document.baseURI);
  const origin=window.location.origin;
  if(src.origin!==origin || !/^https?:$/.test(src.protocol)) return;
  track.dataset.td3Mounted='yes';
  const iframe=document.createElement('iframe');
  iframe.title='L’evoluzione del parco macchine Tedeschi in 3D';
  iframe.src=src.href;
  const {pin,exit}=makeTrack(track,iframe);
  const send=(type,extra={})=>iframe.contentWindow?.postMessage({channel:CHANNEL,type,...extra},origin);
  const driver=createDriver(track,pin,exit,value=>send('position',{value}));
  const mode=()=>send('mode',{active:track.hasAttribute('data-td3-active')});
  new MutationObserver(mode).observe(track,{attributes:true,attributeFilter:['data-td3-active']});
  window.addEventListener('message',e=>{
    const m=e.data;
    if(e.origin!==origin || e.source!==iframe.contentWindow || m?.channel!==CHANNEL) return;
    if(m.type==='available') send('connect');
    if(m.type==='ready' && typeof m.reduced==='boolean') {driver.status(m.reduced);driver.refresh();mode();}
    if(m.type==='manual' && Number.isFinite(m.value)) driver.manual(m.value);
  });
  iframe.addEventListener('load',()=>send('connect'));
  // rotella, dito o tasti di scorrimento sulla pagina: il viaggio animato in corso si ferma subito
  const hand=e=>{
    if(e.type==='keydown'&&!['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key))return;
    if(track.hasAttribute('data-td3-active'))send('hand');
  };
  for(const type of ['wheel','touchstart','keydown'])window.addEventListener(type,hand,{passive:true});
}
