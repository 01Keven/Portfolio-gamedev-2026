/* Carrossel de imagens dos cards (troca sozinho ao passar o mouse) */
import { PROJECTS } from './data/projects.js';

export function initCarousels() {
  document.querySelectorAll('.card').forEach(card => {
    const cardId = card.getAttribute('data-card-id');
    if (cardId === null) return;

    const project = PROJECTS[cardId];
    if (!project || !project.images) return;

    const validImages = project.images.filter(img => img && img.trim() !== "");
    if (validImages.length <= 1) return;

    const slidesEl = document.getElementById(`slides-${cardId}`);
    const dotsEl = document.getElementById(`dots-${cardId}`);
    let currentIndex = 0;
    let intervalId = null;

    function goToSlide(index) {
      currentIndex = index;
      slidesEl.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (dotsEl) {
        const dots = dotsEl.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
    }

    function start() {
      if (intervalId) return;
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % validImages.length;
        goToSlide(currentIndex);
      }, 1800);
    }

    function stop() {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
      goToSlide(0);
    }

    if (matchMedia("(hover: none)").matches) {
      // Celular/tablet: não existe hover, então o carrossel roda enquanto o card está visível na tela
      new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? start() : stop()), { threshold: 0.6 }).observe(card);
    } else {
      card.addEventListener('mouseenter', start);
      card.addEventListener('mouseleave', stop);
    }
  });
}
