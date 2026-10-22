/* Card de projeto com carrossel e ícones das tecnologias */
import { esc } from '../../utils/dom.js';
import { ITCH } from '../data/links.js';

export function renderProjectCard(p, index) {
  const validImages = p.images && p.images.filter(img => img.trim() !== "");
  const hasCarousel = validImages && validImages.length > 1;
  const slides = validImages && validImages.length > 0 ? validImages : [null];

  return `
    <a class="card reveal" href="${esc(p.url || ITCH)}" target="_blank" rel="noopener" data-card-id="${index}">
      <div class="carousel">
        ${hasCarousel ? `<div class="carousel-badge">📷 ${validImages.length} fotos</div>` : ''}
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
          ${p.techs.map(t => `
            <div class="tech-item" title="${esc(t.name)}">
              <i class="${esc(t.class)}"></i>
              <span>${esc(t.name)}</span>
            </div>
          `).join('')}
        </div>

        <div class="tags">
          ${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}
        </div>
        <span class="more">Ver na página do projeto</span>
      </div>
    </a>
  `;
}
