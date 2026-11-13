// Use this script with "defer" after a section carrying data-tedeschi-3d.
// Resolve the module relative to this file even when it lives in a subfolder.
(() => {
  const moduleURL=new URL('./scroll.js',document.currentScript.src);
  const mount=async()=>{
    const {mountScrollFrame}=await import(moduleURL.href);
    document.querySelectorAll('[data-tedeschi-3d]').forEach(mountScrollFrame);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount,{once:true});
  else mount();
})();
