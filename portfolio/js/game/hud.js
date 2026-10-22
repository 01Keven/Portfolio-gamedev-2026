/* HUD desenhado por cima do jogo (nome, dica, conquista) */
import { CONFIG } from '../config/game.js';
import { game, g, state } from '../core/state.js';
import { drawStar } from './world.js';

export function drawHud(t) {
  g.textAlign = "left"; g.font = "bold 18px 'Poppins'"; g.fillStyle = "rgba(23,19,31,.7)"; g.fillRect(14, 14, 250, 34); g.fillStyle = "#fff"; g.fillText(CONFIG.name, 26, 37);

  if (state.hintAlpha > 0 && !state.escaped) {
    const txt = "Clique no mapa para andar"; g.font = "16px 'Poppins'"; g.textAlign = "center"; const w = g.measureText(txt).width + 36;
    g.globalAlpha = state.hintAlpha * (0.85 + Math.sin(t * 3) * 0.15); g.fillStyle = "#17131f"; g.fillRect(game.width / 2 - w / 2, game.height - 58, w, 38);
    g.fillStyle = CONFIG.colors.sand; g.fillRect(game.width / 2 - w / 2, game.height - 58, 5, 38); g.fillStyle = "#fff"; g.fillText(txt, game.width / 2 + 3, game.height - 33); g.globalAlpha = 1;
  }
  if (state.ach) {
    const elapsed = t - state.ach.t0;
    if (elapsed > 4.4) state.ach = null;
    else {
      const slide = Math.min(1, elapsed / 0.4) *
        (elapsed > 4 ? Math.max(0, 1 - (elapsed - 4) / 0.4) : 1);
      const width = 340, x = game.width / 2 - width / 2, y = -70 + slide * 86;
      g.fillStyle = CONFIG.colors.ink; g.fillRect(x, y, width, 58);
      g.fillStyle = CONFIG.colors.sand; g.fillRect(x, y, 6, 58);
      drawStar(x + 34, y + 29, 15, CONFIG.colors.sand);
      g.textAlign = "left";
      g.font = "bold 16px 'Poppins', sans-serif"; g.fillStyle = CONFIG.colors.sand;
      g.fillText("Centro ativado!", x + 60, y + 25);
      g.font = "14px 'Poppins', sans-serif"; g.fillStyle = "#fff";
      g.fillText("Um novo zumbi apareceu", x + 60, y + 44);
    }
  }
}
