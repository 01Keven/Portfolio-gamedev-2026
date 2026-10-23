/* Monta o HTML do site (menu + seções) e ativa o efeito de revelar ao rolar */
import { siteEl } from './dom.js';
import { PAGES } from './pages/index.js';
import { initI18n, t } from './i18n.js';

export function buildSite() {
  // Initialize i18n first
  initI18n();
  
  // Update hero down button
  const downBtn = document.getElementById('down');
  if (downBtn) {
    downBtn.textContent = t('hero.downBtn');
  }
  
  siteEl.innerHTML = `
    <nav class="top" aria-label="Seções">
      <button type="button" data-go="hero">${t('nav.jogo')}</button>
      ${Object.entries(PAGES).map(([n]) => `<button type="button" data-go="sec-${n.toLowerCase()}">${t('nav.' + n.toLowerCase())}</button>`).join("")}
    </nav>
    <div class="wrap">` +
  Object.entries(PAGES).map(([n, d]) => `<section class="sec" id="sec-${n.toLowerCase()}"><h2 class="reveal">${t(d.titleKey || n.toLowerCase() + '.title')}</h2>${d.html()}</section>`).join("") +
  `<footer class="reveal">${t('footer')}</footer></div>`;

  siteEl.querySelectorAll(".sec, .wrap").forEach(sec => sec.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--i", i % 4)));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
  siteEl.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

// Re-export for other modules
export { t } from './i18n.js';