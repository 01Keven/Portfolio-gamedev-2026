/* Página: Sobre (os estilos ficam em css/about.css) */
import { ASSETS } from '../../config/assets.js';
import { t } from '../i18n.js';

export const aboutPage = {
  titleKey: 'about.title',
  html: () => {
    const about = t('about');
    return `
        <section class="about-layout">

          <!-- HERO -->
          <div class="about-hero panel reveal">
            <div class="about-portrait">
              <img class="about-photo" src="${ASSETS.aboutPhoto}" alt="Foto de Keven Cândido" loading="lazy" />
            </div>
            <div class="about-intro">
              <span class="about-kicker">${about.kicker}</span>
              <p class="about-bio">${about.bio}</p>
              <div class="about-specialties">
              </div>
            </div>
          </div>

          <div class="about-columns">

            <!-- STACK -->
            <article class="about-panel panel reveal">
              <div class="about-panel-heading">
                <span class="about-panel-icon">&lt/&gt;</span>
                <div>
                  <span class="about-panel-label">${about.specialties.title}</span>
                  <h3>${about.specialties.subtitle}</h3>
                </div>
              </div>
              <p class="about-panel-description">${about.specialties.desc}</p>
              <div class="about-tech-list">
                ${about.specialties.items.map((t, i) =>
                  `<span class="about-tech" style="--i:${i}">${t}</span>`
                ).join("")}
              </div>
            </article>

            <!-- JORNADA -->
            <article class="about-panel panel reveal">
              <div class="about-panel-heading">
                <span class="about-panel-icon">↗</span>
                <div>
                  <span class="about-panel-label">${about.journey.label}</span>
                  <h3>${about.journey.title}</h3>
                </div>
              </div>
              <div class="about-journey">
                ${about.journey.items.map(item => `
                  <div class="about-journey-item">
                    <span class="about-journey-marker"></span>
                    <div class="about-journey-content">
                      <strong>${item.role}</strong>
                      <p>${item.org}</p>
                      <small>${item.desc}</small>
                    </div>
                  </div>
                `).join('')}
              </div>
            </article>

          </div>
        </section>
      `
  }
};