/* Página: Projetos */
import { PROJECTS } from '../data/projects.js';
import { renderProjectCard } from '../components/projectCard.js';

export const projectsPage = {
  title: "Projetos em Destaque",
  html: () => `<div class="grid">` + PROJECTS.map((p, idx) => renderProjectCard(p, idx)).join("") + `</div>`
};
