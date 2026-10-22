/* Mapa: câmera, árvores, bandeiras, centro e partículas */
import { CONFIG } from '../config/game.js';
import { game, g, player, state } from '../core/state.js';

export function worldToCam() {
  state.cam.x += (Math.max(0, Math.min(CONFIG.worldW - game.width,  player.x - game.width / 2)) - state.cam.x) * 0.08;
  state.cam.y += (Math.max(0, Math.min(CONFIG.worldH - game.height, player.y - game.height / 2)) - state.cam.y) * 0.08;
}

export function drawTree(x, y) {
  g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(x, y + 4, 34, 11, 0, 0, 7); g.fill();
  g.fillStyle = "#6b4a3a"; g.fillRect(x - 6, y - 26, 12, 30);
  const tri = (cy, w, h, col) => { g.fillStyle = col; g.beginPath(); g.moveTo(x, cy - h); g.lineTo(x + w, cy); g.lineTo(x - w, cy); g.closePath(); g.fill(); };
  tri(y - 14, 36, 44, "#2f7a55"); tri(y - 38, 28, 40, "#3a8f63"); tri(y - 60, 20, 34, "#4aa077");
}

export function drawFlag(f, t) {
  g.fillStyle = "rgba(0,0,0,.2)"; g.beginPath(); g.ellipse(f.x, f.y + 2, 22, 7, 0, 0, 7); g.fill();
  g.fillStyle = "#d9d3e6"; g.fillRect(f.x - 3, f.y - 92, 6, 94);
  const w = Math.sin(t * 4) * 4;
  g.fillStyle = CONFIG.colors.flag; g.beginPath(); g.moveTo(f.x + 3, f.y - 92); g.lineTo(f.x + 58, f.y - 80 + w); g.lineTo(f.x + 3, f.y - 60); g.closePath(); g.fill();
  g.font = "bold 20px 'Poppins', sans-serif"; g.textAlign = "center";
  const pw = g.measureText(f.label).width + 28;
  g.fillStyle = CONFIG.colors.ink; g.fillRect(f.x - pw / 2, f.y + 12, pw, 32);
  g.fillStyle = CONFIG.colors.flag; g.fillRect(f.x - pw / 2, f.y + 12, pw, 4);
  g.fillStyle = "#fff"; g.fillText(f.label, f.x, f.y + 35);
}

export function drawStar(cx, cy, r, col) {
  g.fillStyle = col; g.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); }
  g.closePath(); g.fill();
}

export function drawCenter(t) {
  const c = CONFIG.center, pulse = Math.sin(t * 3) * 0.5 + 0.5, col = state.done ? "#7ef0c0" : CONFIG.colors.sand;
  g.fillStyle = "rgba(23,19,31,.45)"; g.beginPath(); g.ellipse(c.x, c.y, 78, 36, 0, 0, 7); g.fill();
  g.strokeStyle = col; g.lineWidth = 4; g.globalAlpha = 0.6 + pulse * 0.4;
  g.beginPath(); g.ellipse(c.x, c.y, 78 + pulse * 5, 36 + pulse * 2.5, 0, 0, 7); g.stroke(); g.globalAlpha = 1;
  drawStar(c.x, c.y - 8 - pulse * 4, 17, col);
  g.font = "bold 15px 'Poppins', sans-serif"; g.textAlign = "center"; g.lineWidth = 4; g.strokeStyle = CONFIG.colors.ink;
  const txt = state.done ? "DE NOVO" : "START"; g.strokeText(txt, c.x, c.y + 30); g.fillStyle = "#fff"; g.fillText(txt, c.x, c.y + 30);
}

export function drawParticles(dt) {
  state.parts = state.parts.filter(p => p.life > 0);
  for (const p of state.parts) {
    p.vy += 700 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
    g.globalAlpha = Math.min(1, p.life); g.fillStyle = p.col; g.fillRect(p.x, p.y, p.s, p.s);
  }
  g.globalAlpha = 1;
}
