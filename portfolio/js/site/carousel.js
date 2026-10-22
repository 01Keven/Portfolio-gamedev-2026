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

    card.addEventListener('mouseenter', () => {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % validImages.length;
        goToSlide(currentIndex);
      }, 1800);
    });

    card.addEventListener('mouseleave', () => {
      if (intervalId) clearInterval(intervalId);
      goToSlide(0);
    });
  });
}
