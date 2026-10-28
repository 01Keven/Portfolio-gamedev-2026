/* Navegação entre o jogo 3D e o site (rolagem, voltar ao jogo, entrar no site) */
import { player, state, ui } from '../core/state.js';
import { reducedMotion } from '../core/runtime.js';
import { spawnMascot, hideMascot } from '../mascot/mascot.js';
import { siteEl, downBtn } from './dom.js';
import { startMusic } from '../game/audio.js';

export function go(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });

  if (id === "hero") voltarParaJogo();
}

export function voltarParaJogo() {
  if (!state.escaped) return;
  state.escaped = false;
  // Reset flags de áudio para permitir reiniciar a música
  state.audioStarted = false;
  state.musicStopped = false;
  hideMascot();
  downBtn.style.display = "";
  ui.entering = false;

  player.tx = player.x;
  player.ty = player.y;
  player.moving = false;

  // A música será iniciada no próximo clique (política de autoplay)
}

export function enterSite(name) {
  if (ui.entering) return;
  siteEl.hidden = false; downBtn.style.display = "none"; ui.entering = true;

  state.escaped = true;
  spawnMascot();

  setTimeout(() => {
    go("sec-" + name.toLowerCase());
    setTimeout(() => { if (state.escaped) ui.entering = false; }, 1800);
  }, reducedMotion ? 0 : 500);
}

export function initNavigation() {
  window.addEventListener("scroll", () => {
    if (!ui.entering && window.scrollY < window.innerHeight * 0.25 && state.escaped) {
      voltarParaJogo();
    }
  });

  siteEl.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));

  downBtn.addEventListener("click", () => {
    enterSite("projetos");
  });
}
