/* Card de projeto com carrossel e ícones das tecnologias */
import { esc } from '../../utils/dom.js';
import { ITCH } from '../data/links.js';
import { t } from '../i18n.js';

export function renderProjectCard(p, index) {
  const validImages = p.images && p.images.filter(img => img.trim() !== "");
  const hasCarousel = validImages && validImages.length > 1;
  const slides = validImages && validImages.length > 0 ? validImages : [null];
  const carouselBadge = t('carousel.badge').replace('{count}', validImages.length);

  return `
    <a class="card reveal" href="${esc(p.url || ITCH)}" target="_blank" rel="noopener" data-card-id="${index}">
      <div class="carousel">
        ${hasCarousel ? `<div class="carousel-badge">${carouselBadge}</div>` : ''}
        <div class="carousel-slides" id="slides-${index}">
          ${slides.map((imgUrl) => `
            <div class="carousel-slide" style="${imgUrl ? `background-image: url('${esc(imgUrl)}');` : `background: ${p.bg};`}">
              ${!imgUrl ? `<span class="initials">${esc(p.initials)}</span>` : ''}
            </div>
          `).join('')}
        </div>
        ${hasCarousel ? `
          <div class="carousel-dots" id="dots-${index}">
            ${validImages.map((_, i) => `<div class="carousel-dot ${i === 0 ? 'active' : ''}"></div>`).join('')}
          </div>
        ` : ''}
      </div>

      <div class="body">
        <h3>${esc(p.name)}</h3>
        <div class="genre">${esc(p.genre)}</div>
        <p>${esc(p.text)}</p>
        
        <div class="tech-stack">
          ${p.techs.map(tech => `
            <div class="tech-item" title="${esc(tech.name)}">
              <i class="${esc(tech.class)}"></i>
              <span>${esc(tech.name)}</span>
            </div>
          `).join('')}
        </div>

        <div class="tags">
          ${p.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}
        </div>
        <span class="more">${t('projects.more')}</span>
      </div>
    </a>
  `;
}