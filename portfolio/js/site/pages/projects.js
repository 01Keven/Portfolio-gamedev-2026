/* Página: Projetos */
import { PROJECTS } from '../data/projects.js';
import { renderProjectCard } from '../components/projectCard.js';
import { t } from '../i18n.js';

export const projectsPage = {
  titleKey: 'projects.title',
  html: () => `<div class="grid">` + PROJECTS.map((p, idx) => renderProjectCard(p, idx)).join("") + `</div>`
};