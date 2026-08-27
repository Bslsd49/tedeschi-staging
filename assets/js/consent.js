/* consent.js — gestore consensi cookie, vanilla, nessun servizio esterno.
   Blocco preventivo reale: GA4 si carica SOLO dopo consenso "statistica"
   e solo se il sito ha un ga4Id configurato (data-ga4 sul body o meta). */

const COOKIE = 'tedeschi_consenso';
const DURATA_GIORNI = 180;

function leggi() {
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m[1]));
  } catch {
    return null;
  }
}

function salva(stato) {
  const scadenza = new Date(Date.now() + DURATA_GIORNI * 864e5).toUTCString();
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(stato))}; expires=${scadenza}; path=/; SameSite=Lax`;
}

function caricaGa4() {
  const id = document.body.dataset.ga4;
  if (!id || window.__ga4Caricato) return;
  window.__ga4Caricato = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

function applica(stato) {
  if (stato?.statistica) caricaGa4();
}

export function initConsent() {
  const banner = document.querySelector('[data-cookie-banner]');
  const esistente = leggi();

  if (esistente) {
    applica(esistente);
  } else if (banner) {
    banner.hidden = false;
  }

  if (banner) {
    const prefs = banner.querySelector('[data-cookie-prefs]');
    const btnAccetta = banner.querySelector('[data-consent-accept-all]');
    const btnRifiuta = banner.querySelector('[data-consent-reject]');
    const btnPersonalizza = banner.querySelector('[data-consent-customize]');
    const btnSalva = banner.querySelector('[data-consent-save]');

    function chiudi(stato) {
      salva(stato);
      applica(stato);
      banner.hidden = true;
      aggiornaStatoPagina();
    }

    btnAccetta?.addEventListener('click', () => chiudi({ statistica: true, marketing: true, data: new Date().toISOString() }));
    btnRifiuta?.addEventListener('click', () => chiudi({ statistica: false, marketing: false, data: new Date().toISOString() }));
    btnPersonalizza?.addEventListener('click', () => {
      const aperto = prefs.hidden;
      prefs.hidden = !aperto;
      btnPersonalizza.setAttribute('aria-expanded', String(aperto));
      btnSalva.hidden = !aperto;
      if (aperto) {
        const attuale = leggi();
        banner.querySelectorAll('[data-consent-cat]').forEach((input) => {
          input.checked = Boolean(attuale?.[input.dataset.consentCat]);
        });
      }
    });
    btnSalva?.addEventListener('click', () => {
      const stato = { data: new Date().toISOString() };
      banner.querySelectorAll('[data-consent-cat]').forEach((input) => {
        stato[input.dataset.consentCat] = input.checked;
      });
      chiudi(stato);
    });
  }

  // pagina "Preferenze cookie": riapre il gestore e mostra lo stato attuale
  document.querySelectorAll('[data-consent-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (banner) {
        banner.hidden = false;
        banner.querySelector('[data-consent-customize]')?.click();
        banner.scrollIntoView({ block: 'end' });
      }
    });
  });
  aggiornaStatoPagina();
}

function aggiornaStatoPagina() {
  const statoEl = document.querySelector('[data-consent-stato]');
  if (!statoEl) return;
  const stato = leggi();
  if (!stato) {
    statoEl.innerHTML = '<p>Nessuna preferenza salvata: alla prossima pagina vedrai il banner dei cookie.</p>';
    return;
  }
  const righe = [
    ['Necessari', true],
    ['Statistica', Boolean(stato.statistica)],
    ['Marketing', Boolean(stato.marketing)],
  ]
    .map(([nome, on]) => `<li><strong>${nome}</strong>: ${on ? 'attivi' : 'disattivati'}</li>`)
    .join('');
  const quando = stato.data ? new Date(stato.data).toLocaleDateString('it-IT') : '—';
  statoEl.innerHTML = `<ul class="checklist">${righe}</ul><p class="testo-secondario u-mt-4">Ultima scelta salvata: ${quando}.</p>`;
}
