// I quattro rulli della data, come un contachilometri di precisione.
// Idea e comportamento della GIF di Mattia: in apertura si vede già «19» e il terzo rullo sale
// fino al 6; fra un'epoca e l'altra girano solo le cifre che cambiano, ciascuna nel suo verso,
// passando per le cifre intermedie con uno scatto per cifra (fra il 1980 e il 2000 i due rulli
// di sinistra fanno un solo scatto ciascuno, dall'1 al 2 e dal 9 allo 0).
// Differenza dalla versione a lastre vettoriali: il giro non è più legato alla posizione dello
// scroll ma parte quando l'epoca cambia e dura un tempo fisso. Così a riposo il rullo mostra
// sempre un anno vero (mai «1970», mai una cifra a metà) e tornando indietro rigira al contrario.
// Le cifre sono testo vero in New Science Bold (kit Adobe del sito).
const years=['1960','1980','2000','2026'];
const PITCH=1.25;            // passo fra due cifre, in em: a riposo le vicine non affiorano
const STEP_MS=150, MAX_MS=980, STAGGER_MS=70;
const easeStep=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; // ogni scatto: parte, porta, si posa

function createCounter(element) {
  const strip=[];
  for(let k=19;k>=-10;k--)strip.push((k%10+10)%10); // dall'alto: 9…0 ripetuti, cifre più alte sopra
  const columns=Array.from({length:4},()=>{
    const col=document.createElement('span');col.className='roll';
    const band=document.createElement('span');band.className='roll-band';
    band.append(...strip.map(d=>{const s=document.createElement('span');s.textContent=String(d);return s;}));
    col.append(band);
    return {col,band,value:0,from:0,to:0,start:0,dur:0,delay:0};
  });
  const box=document.createElement('span');box.className='roll-box';box.setAttribute('aria-hidden','true');
  box.append(...columns.map(c=>c.col));
  const native=document.createElement('span');native.className='sr';
  element.replaceChildren(box,native);
  element.style.setProperty('--pitch',PITCH);
  let frame=0,shown=null;
  function place(c){
    // il valore v sta nella cella 19-v della banda: valore crescente = banda che scende,
    // la cifra nuova entra dall'alto come nella GIF; tornando indietro la banda risale
    const v=c.value;
    c.band.style.transform='translate3d(0,'+((-(19-v))*PITCH).toFixed(4)+'em,0)';
  }
  function tick(now){
    frame=0;let busy=false;
    for(const c of columns){
      if(c.dur<=0)continue;
      const t=Math.max(0,Math.min(1,(now-c.start-c.delay)/c.dur));
      const steps=Math.abs(c.to-c.from);
      // uno scatto per cifra: il valore resta intero fra uno scatto e il successivo
      const u=t*steps,k=Math.min(steps-1,Math.floor(u)),f=easeStep(Math.min(1,u-k));
      c.value=c.from+Math.sign(c.to-c.from)*(t>=1?steps:k+f);
      place(c);
      if(t<1)busy=true;else{c.value=((c.to%10)+10)%10;c.dur=0;place(c);}
    }
    if(busy)frame=requestAnimationFrame(tick);
  }
  function set(year,animate,direction){
    const digits=[...year].map(Number);
    native.textContent=year;
    if(frame){cancelAnimationFrame(frame);frame=0;}
    const now=performance.now();let order=0;
    columns.forEach((c,i)=>{
      const cur=c.value,target=digits[i];
      const base=((Math.round(cur)%10)+10)%10;
      if(!animate){c.value=target;c.dur=0;place(c);return;}
      // passi nel verso dell'epoca: avanti le cifre salgono, indietro scendono
      let steps=direction>0?((target-base+10)%10):-((base-target+10)%10);
      if(steps===0&&Math.abs(cur-Math.round(cur))<1e-4){c.value=target;c.dur=0;place(c);return;}
      c.from=cur;c.to=Math.round(cur)+steps;c.start=now;
      c.dur=Math.min(MAX_MS,STEP_MS*Math.max(1,Math.abs(steps))+160);c.delay=order++*STAGGER_MS;
      if(steps===0){c.to=Math.round(cur);c.dur=200;}
    });
    if(columns.some(c=>c.dur>0))frame=requestAnimationFrame(tick);
  }
  return {
    show(index,{animate=false,direction=1}={}){
      const year=years[index]||years[0];
      if(shown===year&&!animate)return;
      const changed=shown!==year;shown=year;
      if(changed||!animate)set(year,animate&&changed,direction);
    },
    intro(play){
      // «19» già al suo posto, il terzo rullo sale da 0 a 6
      columns.forEach((c,i)=>{c.value=[1,9,0,0][i];c.dur=0;place(c);});
      shown=null;
      if(play)this.show(0,{animate:true,direction:1});else this.show(0);
    },
    get busy(){return frame!==0;}
  };
}

export function createCaption(story) {
  const counter=createCounter(story.querySelector('.year'));
  const subtitle=story.querySelector('.period'),title=story.querySelector('.era-title');
  const body=story.querySelector('p');
  let current=null;
  return {
    ...counter,
    show:counter.show,intro:counter.intro,
    change(era){
      if(era===current)return;
      current=era;
      subtitle.textContent=era.subtitle;title.textContent=era.title;body.textContent=era.body;
    }
  };
}
