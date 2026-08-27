/* main.js — interazioni sito Impresa Tedeschi (vanilla ES module) */
import { initConsent } from './consent.js';

const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============ header: stato scrolled ============ */
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============ nav desktop: toggle accessibili ============ */
document.querySelectorAll('[data-nav-item]').forEach((item) => {
  const toggle = item.querySelector('.site-nav__toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const open = item.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.querySelectorAll('[data-nav-item].is-open').forEach((other) => {
      if (other !== item) {
        other.classList.remove('is-open');
        other.querySelector('.site-nav__toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('[data-nav-item].is-open').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.site-nav__toggle')?.setAttribute('aria-expanded', 'false');
    });
    chiudiNavMobile();
  }
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-nav-item]')) {
    document.querySelectorAll('[data-nav-item].is-open').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.site-nav__toggle')?.setAttribute('aria-expanded', 'false');
    });
  }
});

/* ============ nav mobile ============ */
const burger = document.querySelector('[data-nav-open]');
const navMobile = document.getElementById('nav-mobile');
function chiudiNavMobile() {
  if (!navMobile || navMobile.hidden) return;
  navMobile.hidden = true;
  burger?.setAttribute('aria-expanded', 'false');
  burger?.setAttribute('aria-label', 'Apri il menu');
  document.body.classList.remove('nav-aperta');
}
if (burger && navMobile) {
  burger.addEventListener('click', () => {
    const opening = navMobile.hidden;
    navMobile.hidden = !opening;
    burger.setAttribute('aria-expanded', String(opening));
    burger.setAttribute('aria-label', opening ? 'Chiudi il menu' : 'Apri il menu');
    document.body.classList.toggle('nav-aperta', opening);
  });
  navMobile.querySelectorAll('.nav-mobile__toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const sub = toggle.closest('.nav-mobile__item')?.querySelector('.nav-mobile__sub');
      if (!sub) return;
      const opening = sub.hidden;
      sub.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
    });
  });
  navMobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', chiudiNavMobile));
}

/* ============ FAQ accordion (apertura morbida via grid-rows) ============ */
document.querySelectorAll('[data-faq] .faq__toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!panel) return;
    const opening = !panel.classList.contains('is-aperta');
    panel.classList.toggle('is-aperta', opening);
    toggle.setAttribute('aria-expanded', String(opening));
  });
});

/* ============ motion (GSAP + ScrollTrigger, caricati lazy dopo il load) ============ */
function caricaScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}
const quandoInattivo = (fn) =>
  'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 200);

if (!ridotto) {
  const avviaMotion = () =>
    caricaScript('/assets/vendor/gsap.min.js')
      .then(() => caricaScript('/assets/vendor/ScrollTrigger.min.js'))
      .then(initMotion)
      .catch(() => {
        document.documentElement.classList.remove('reveal-pronto');
      });
  if (document.readyState === 'complete') quandoInattivo(avviaMotion);
  else window.addEventListener('load', () => quandoInattivo(avviaMotion), { once: true });
}

function initMotion() {
  const { gsap } = window;
  if (!gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(window.ScrollTrigger);
  // da qui in poi i [data-reveal] partono nascosti; il batch li rivela subito se in viewport
  document.documentElement.classList.add('reveal-pronto');

  // la coreografia delle righe hero è in CSS puro al load (vedi components.css):
  // rifarla qui, dopo il lazy-load di GSAP, rimandava il paint del titolo e sfondava l'LCP

  // reveal on scroll, misurati — batch: un solo observer invece di N trigger (TBT)
  window.ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    batchMax: 6,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power1.out',
        stagger: 0.05,
        onComplete: () => batch.forEach((el) => el.classList.add('is-visibile')),
      }),
  });

  // counter numerici — discreti e rapidi
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.dataset.counter, 10) || 0;
    const stato = { v: Math.round(target * 0.65) };
    gsap.to(stato, {
      v: target,
      duration: 0.9,
      ease: 'power1.out',
      snap: { v: 1 },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => { el.textContent = String(Math.round(stato.v)); },
    });
  });

  // parallax appena percepito sulle hero interne
  document.querySelectorAll('.hero-interna__media').forEach((media) => {
    gsap.to(media, {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: media.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // timeline storia: dot che si accendono al passaggio (soft)
  document.querySelectorAll('.timeline__item').forEach((item) => {
    window.ScrollTrigger.create({
      trigger: item,
      start: 'top 75%',
      once: true,
      onEnter: () => item.classList.add('is-attivo'),
    });
  });

  // timeline storia: barra di avanzamento
  const progress = document.querySelector('.timeline__progress');
  if (progress) {
    gsap.to(progress, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.4,
      },
    });
  }

  // v1.3: tilt 3D e pulsanti magnetici RIMOSSI — direttiva "motion super soft":
  // gli hover restano solo come micro-transizioni CSS appena percepite
}

/* ============ filtri cantieri (stato in querystring) ============ */
const filtri = document.querySelector('[data-filtri-cantieri]');
if (filtri) {
  const selArea = filtri.querySelector('#filtro-area');
  const selSettore = filtri.querySelector('#filtro-settore');
  const conteggio = filtri.querySelector('[data-conteggio]');
  const reset = filtri.querySelector('[data-filtri-reset]');
  const cards = document.querySelectorAll('.card--cantiere');
  const empty = document.querySelector('[data-empty-state]');

  function applica(daUrl = false) {
    if (daUrl) {
      const params = new URLSearchParams(location.search);
      if (selArea && params.get('area')) selArea.value = params.get('area');
      if (selSettore && params.get('settore')) selSettore.value = params.get('settore');
    }
    const area = selArea?.value || '';
    const settore = selSettore?.value || '';
    let visibili = 0;
    cards.forEach((card) => {
      const ok = (!area || card.dataset.area === area) && (!settore || card.dataset.settore === settore);
      card.style.display = ok ? '' : 'none';
      if (ok) {
        visibili++;
        // ricomparsa morbida (fade 200ms via classe, vedi CSS .card--filtrata)
        card.classList.remove('card--filtrata');
        void card.offsetWidth;
        card.classList.add('card--filtrata');
      }
    });
    if (conteggio) {
      conteggio.textContent = visibili === 1 ? '1 cantiere' : `${visibili} cantieri`;
    }
    empty?.classList.toggle('is-visibile', visibili === 0);
    const params = new URLSearchParams();
    if (area) params.set('area', area);
    if (settore) params.set('settore', settore);
    const qs = params.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }
  selArea?.addEventListener('change', () => applica());
  selSettore?.addEventListener('change', () => applica());
  reset?.addEventListener('click', () => {
    if (selArea) selArea.value = '';
    if (selSettore) selSettore.value = '';
    applica();
  });
  applica(true);
}

/* ============ form: validazione accessibile + anti-spam + invio ============ */
document.querySelectorAll('form[data-form]').forEach((form) => {
  const campoT = form.querySelector('[name="_t"]');
  if (campoT) campoT.value = String(Math.floor(Date.now() / 1000));
  const mode = form.dataset.formMode || 'php';
  const endpoint = form.dataset.formEndpoint || '';
  const emailDest = form.dataset.formEmail || '';
  const inizio = Date.now();

  const messaggi = {
    valueMissing: 'Questo campo è obbligatorio.',
    typeMismatchEmail: 'Inserisci un indirizzo email valido.',
    typeMismatchTel: 'Inserisci un numero di telefono valido.',
  };

  function mostraErrore(campo, msg) {
    const wrap = campo.closest('.form-field, .form-consenso');
    const errEl = form.querySelector(`[data-error-for="${campo.name}"]`);
    wrap?.classList.toggle('has-errore', Boolean(msg));
    if (errEl) {
      errEl.textContent = msg || '';
      errEl.hidden = !msg;
    }
    campo.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function valida() {
    let primoErrore = null;
    form.querySelectorAll('input:not([type=hidden]):not(.hp), textarea, select').forEach((campo) => {
      if (campo.closest('.form-honeypot')) return;
      let msg = '';
      if (campo.validity.valueMissing) msg = messaggi.valueMissing;
      else if (campo.validity.typeMismatch && campo.type === 'email') msg = messaggi.typeMismatchEmail;
      mostraErrore(campo, msg);
      if (msg && !primoErrore) primoErrore = campo;
    });
    if (primoErrore) {
      primoErrore.focus();
      return false;
    }
    return true;
  }

  form.setAttribute('novalidate', '');
  form.addEventListener('submit', async (e) => {
    // honeypot + time-trap: bot fermati in silenzio
    const hp = form.querySelector('.form-honeypot input');
    if ((hp && hp.value) || Date.now() - inizio < 3000) {
      e.preventDefault();
      return;
    }
    if (!valida()) {
      e.preventDefault();
      const live = form.querySelector('[data-form-live]');
      if (live) live.textContent = 'Il modulo contiene errori: controlla i campi evidenziati.';
      return;
    }

    if (mode === 'php' || mode === 'netlify') return; // POST nativo (contact.php o Netlify Forms)

    e.preventDefault();
    const submit = form.querySelector('[type=submit]');
    submit?.classList.add('is-loading');
    const dati = Object.fromEntries(new FormData(form).entries());

    if (mode === 'webhook' && endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dati),
        });
        if (!res.ok) throw new Error(String(res.status));
        location.href = '/grazie/';
      } catch {
        submit?.classList.remove('is-loading');
        const live = form.querySelector('[data-form-live]');
        if (live) live.textContent = "Invio non riuscito. Riprova, oppure chiamaci o scrivici via email.";
      }
    } else {
      // mailto: si apre il client di posta con i dati già compilati (staging senza backend)
      const corpo = Object.entries(dati)
        .filter(([k]) => !['_hp', 'consenso', '_t', '_ritorno', 'form-name'].includes(k))
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      const oggetto = `Richiesta dal sito — ${dati.modulo || 'contatto'}`;
      location.href = `mailto:${emailDest}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpo)}`;
      submit?.classList.remove('is-loading');
    }
  });
});

/* ============ mappa click-to-load ============ */
document.querySelectorAll('[data-mappa]').forEach((box) => {
  const btn = box.querySelector('[data-mappa-carica]');
  btn?.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = box.dataset.mappa;
    iframe.title = 'Mappa della sede — Google Maps';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    box.innerHTML = '';
    box.appendChild(iframe);
  });
});

/* ============ hero video: partenza lazy dopo il load ============ */
const heroVideo = document.querySelector('[data-hero-video]');
if (heroVideo) {
  const risparmioDati = navigator.connection && navigator.connection.saveData;
  if (ridotto || risparmioDati) {
    // niente movimento né dati sprecati: il video non parte, resta il fondo scuro
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
    heroVideo.preload = 'none';
  } else {
    heroVideo.addEventListener('playing', () => heroVideo.classList.add('is-attivo'), { once: true });
    heroVideo.play().catch(() => {});
  }
}

/* ============ consenso cookie ============ */
initConsent();

/* ============ lightbox: gallerie e foto rappresentative cliccabili ============ */
(() => {
  const ingrandibili = [...document.querySelectorAll('.gallery__item img, .split__media img')]
    .filter((img) => !img.closest('a'));
  if (!ingrandibili.length) return;

  // dal srcset (fallback jpeg) prendiamo la variante più larga generata in build
  const srcGrande = (img) => {
    const voci = (img.srcset || '')
      .split(',')
      .map((v) => v.trim().split(/\s+/))
      .filter((p) => p[0]);
    if (!voci.length) return img.currentSrc || img.src;
    voci.sort((a, b) => parseInt(b[1] || 0, 10) - parseInt(a[1] || 0, 10));
    return voci[0][0];
  };

  let box = null;
  let gruppo = [];
  let indice = 0;
  let apertoDa = null;

  const mostra = (i) => {
    indice = (i + gruppo.length) % gruppo.length;
    const sorgente = gruppo[indice];
    const img = box.querySelector('.lightbox__img');
    img.src = srcGrande(sorgente);
    img.alt = sorgente.alt || '';
    box.querySelector('.lightbox__didascalia').textContent = sorgente.alt || '';
    const multi = gruppo.length > 1;
    box.querySelectorAll('.lightbox__freccia').forEach((b) => { b.hidden = !multi; });
    box.querySelector('.lightbox__contatore').textContent = multi ? `${indice + 1} / ${gruppo.length}` : '';
  };

  const suiTasti = (e) => {
    if (e.key === 'Escape') chiudi();
    if (e.key === 'ArrowLeft' && gruppo.length > 1) mostra(indice - 1);
    if (e.key === 'ArrowRight' && gruppo.length > 1) mostra(indice + 1);
  };

  const chiudi = () => {
    box.classList.remove('is-attiva');
    document.body.classList.remove('lightbox-aperta');
    document.removeEventListener('keydown', suiTasti);
    if (apertoDa && apertoDa.focus) apertoDa.focus();
  };

  const costruisci = () => {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Immagine ingrandita');
    box.innerHTML = [
      '<button class="lightbox__chiudi" type="button" aria-label="Chiudi l\'immagine">&#215;</button>',
      '<button class="lightbox__freccia lightbox__freccia--prima" type="button" aria-label="Foto precedente">&#8592;</button>',
      '<figure class="lightbox__figura">',
      '  <img class="lightbox__img" alt="" decoding="async">',
      '  <figcaption class="lightbox__didascalia"></figcaption>',
      '</figure>',
      '<button class="lightbox__freccia lightbox__freccia--dopo" type="button" aria-label="Foto successiva">&#8594;</button>',
      '<p class="lightbox__contatore" aria-hidden="true"></p>',
    ].join('\n');
    document.body.appendChild(box);
    box.querySelector('.lightbox__chiudi').addEventListener('click', chiudi);
    box.querySelector('.lightbox__freccia--prima').addEventListener('click', () => mostra(indice - 1));
    box.querySelector('.lightbox__freccia--dopo').addEventListener('click', () => mostra(indice + 1));
    box.addEventListener('click', (e) => { if (e.target === box) chiudi(); });
  };

  const apri = (img) => {
    if (!box) costruisci();
    // stessa griglia o galleria = stesso gruppo sfogliabile con le frecce
    const contenitore = img.closest('.gallery') || img.closest('.griglia');
    gruppo = contenitore ? ingrandibili.filter((c) => contenitore.contains(c)) : [img];
    apertoDa = document.activeElement;
    mostra(gruppo.indexOf(img));
    box.classList.add('is-attiva');
    document.body.classList.add('lightbox-aperta');
    document.addEventListener('keydown', suiTasti);
    box.querySelector('.lightbox__chiudi').focus();
  };

  ingrandibili.forEach((img) => {
    img.classList.add('is-ingrandibile');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Ingrandisci, ${img.alt || 'foto del cantiere'}`);
    img.addEventListener('click', () => apri(img));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); apri(img); }
    });
  });
})();
