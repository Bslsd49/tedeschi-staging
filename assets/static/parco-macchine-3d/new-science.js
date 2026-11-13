import {art} from './new-science-art.js';

// Fixed, authored New Science lettering for these captions. Each run keeps
// its original text for selection, search, copying and assistive technology.
// A changed caption with no matching artwork remains ordinary responsive text.
const css = `
.ns-word{position:relative;display:inline-block;vertical-align:-.18em;height:1em;line-height:1;white-space:nowrap;text-indent:0;letter-spacing:0}
.ns-word>svg{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible;fill:currentColor;pointer-events:none}
.ns-word>.ns-text{position:absolute;inset:0;white-space:pre;color:transparent;line-height:1;letter-spacing:normal}
.ns-text::selection{color:transparent;background:Highlight}
@media(forced-colors:active){.ns-word{display:contents}.ns-word>svg{display:none}.ns-word>.ns-text{position:static;color:CanvasText;white-space:normal}}
`;
const namespace='http://www.w3.org/2000/svg';
const selector='.brand h1,.motion-switch>span:last-child,.inspect>span:last-child,.period,.era-title,.story-copy p,.loading,.timeline-name>span,.stop strong,.stop small,#play-label,.illustration-note,.research summary,.research p,.research dt,.research dd,.research a,.td3-skip,[data-new-science]';
const normalize=s=>s.trim().replace(/\s+/g,' ');
function getRun(text, weight) {
  return art.entries[weight+'|'+text] || art.entries['regular|'+text] || art.entries['bold|'+text] || art.entries['medium|'+text];
}
function addStyles() {
  if(document.getElementById('new-science-lettering'))return;
  const style=document.createElement('style');style.id='new-science-lettering';style.textContent=css;document.head.append(style);
}
function wordElement(word,original) {
  const span=document.createElement('span');
  span.className='ns-word';const width=word.advance/art.units;
  span.style.width=width+'em';
  const svg=document.createElementNS(namespace,'svg');
  svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
  svg.setAttribute('viewBox','0 '+(-art.units*.82)+' '+word.advance+' '+art.units);
  svg.setAttribute('preserveAspectRatio','none');
  const shape=document.createElementNS(namespace,'path');shape.setAttribute('d',word.path);
  svg.append(shape);
  const native=document.createElement('span');native.className='ns-text';native.textContent=original;
  span.append(svg,native);return span;
}
export function typeset(element) {
  if(!element)return;
  addStyles();
  const nodes=Array.from(element.childNodes).filter(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());
  if(!nodes.length)return;
  const style=getComputedStyle(element),w=Number(style.fontWeight);
  const weight=element.classList.contains('era-title')?'boldExtended':w>=600?'bold':w>=450?'medium':'regular';
  for(const node of nodes){
    const source=node.textContent,tokens=normalize(source);
    const visible=style.textTransform==='uppercase'?tokens.toLocaleUpperCase('it'):tokens;
    const run=getRun(visible,weight);if(!run)continue;
    const words=tokens.split(' ');if(words.length!==run.words.length)continue;
    const frag=document.createDocumentFragment();
    if(/^\s/.test(source))frag.append(' ');
    run.words.forEach((word,i)=>{
      if(i)frag.append(' ');
      frag.append(wordElement(word,words[i]));
    });
    if(/\s$/.test(source))frag.append(' ');
    node.replaceWith(frag);
  }
}
export function installLettering(root=document) {
  addStyles();root.querySelectorAll(selector).forEach(typeset);
  const observer=new MutationObserver(records=>{
    for(const record of records){
      const target=record.target.nodeType===Node.TEXT_NODE?record.target.parentElement:record.target;
      if(target?.matches?.(selector))typeset(target);
      for(const node of record.addedNodes){
        if(node.nodeType!==Node.ELEMENT_NODE||node.classList.contains('ns-word')||node.tagName==='svg')continue;
        if(node.matches(selector))typeset(node);
        node.querySelectorAll(selector).forEach(typeset);
      }
    }
  });
  observer.observe(root===document?document.body:root,{childList:true,characterData:true,subtree:true});
}
