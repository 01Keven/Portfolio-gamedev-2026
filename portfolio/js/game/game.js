/* Loop do mini-jogo 2D: movimento, colisões, desenho do mapa */
import { CONFIG, trees } from '../config/game.js';
import { game, g, player, state, hooks } from '../core/state.js';
import { drawCharacter } from './character.js';
import { worldToCam, drawTree, drawFlag, drawCenter, drawParticles } from './world.js';
import { spawnZombie, updateZombies, drawZombie } from './zombies.js';
import { drawHud } from './hud.js';
import { t as translate } from '../site/i18n.js';

export function triggerCenter(t) {
  state.jumpT = 0;
  state.shake = 1;

  const colors = ["#ff6b57", "#e9cf94", "#7ef0c0", "#7aa8ff", "#ffffff"];
  for (let i = 0; i < 70; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 120 + Math.random() * 320;
    state.parts.push({
      x: CONFIG.center.x, y: CONFIG.center.y - 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed * 0.6 - 260,
      life: 1.2 + Math.random() * 0.8,
      col: colors[i % colors.length], s: 4 + Math.random() * 5
    });
  }

  spawnZombie();
  state.done = true;
  state.ach = { t0: t };
}

export function drawGame(t, dt) {
  if (player.moving && !state.escaped) {
    const dx = player.tx - player.x, dy = player.ty - player.y, d = Math.hypot(dx, dy); const step = CONFIG.walkSpeed * dt;
    if (d <= step) {
      player.x = player.tx; player.y = player.ty; player.moving = false;
      const f = CONFIG.flags.find(f => Math.hypot(f.x - player.x, f.y - player.y) < 75);
      if (f) hooks.enterSite(f.navTarget);
    } else { player.x += dx / d * step; player.y += dy / d * step; if (Math.abs(dx) > 4) player.dir = dx > 0 ? 1 : -1; }
  }
  
  for (const [tx, ty] of trees) {
    const ox = player.x - tx, oy = player.y - ty, od = Math.hypot(ox, oy), R = 34;
    if (od < R && od > 0) { player.x = tx + ox / od * R; player.y = ty + oy / od * R; }
  }
  
  const centerDistance = Math.hypot(player.x - CONFIG.center.x, player.y - CONFIG.center.y);
  if (centerDistance < 45 && !state.onCenter) {
    state.onCenter = true;
    triggerCenter(t);
  } else if (centerDistance > 120) {
    state.onCenter = false;
  }

  if (state.clicked) state.hintAlpha = Math.max(0, state.hintAlpha - dt * 1.8);
  if (state.zombies.length) updateZombies(dt);
  state.shake = Math.max(0, state.shake - dt * 2.5);
  if (state.jumpT >= 0) {
    state.jumpT += dt;
    if (state.jumpT > 0.6) state.jumpT = -1;
  }

  worldToCam();
  const cx = state.cam.x, cy = state.cam.y;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shx = state.shake > 0 && !reduceMotion ? (Math.random() - 0.5) * 9 * state.shake : 0;
  const shy = shx ? (Math.random() - 0.5) * 9 * state.shake : 0;

  g.clearRect(0, 0, game.width, game.height); g.save(); g.translate(-Math.round(cx) + shx, -Math.round(cy) + shy);

  const T = 80; for (let y = 0; y < CONFIG.worldH; y += T) for (let x = 0; x < CONFIG.worldW; x += T) { g.fillStyle = ((x + y) / T) % 2 ? CONFIG.colors.grass : CONFIG.colors.grassDark; g.fillRect(x, y, T, T); }
  g.strokeStyle = CONFIG.colors.sand; g.lineWidth = 46; g.lineCap = "round"; g.lineJoin = "round";
  g.beginPath(); g.moveTo(560, 440); [[1500,520],[1700,1250],[700,1050],[560,440]].forEach(p => g.lineTo(p[0], p[1])); g.stroke();

  g.textAlign = "left"; g.fillStyle = "rgba(23,19,31,.35)"; g.font = "bold 64px 'Poppins'"; g.fillText(CONFIG.name, 304, 236); g.fillStyle = "#fff"; g.fillText(CONFIG.name, 300, 232);
  g.font = "bold 24px 'Poppins'"; g.fillStyle = CONFIG.colors.sand; g.fillText(CONFIG.role, 302, 272);

  drawCenter(t);
  const objs = [...trees.map(p => ({ y: p[1], draw: () => drawTree(p[0], p[1]) })), ...CONFIG.flags.map(f => ({ y: f.y, draw: () => drawFlag(f, t, translate(f.labelKey)) }))].sort((a, b) => a.y - b.y);
  objs.forEach(o => o.draw());
  for (const z of state.zombies) drawZombie(z, t);
  drawParticles(dt);

  if (!state.escaped) {
    const walk = player.moving ? Math.sin(t * 14) : 0; const bob = player.moving ? Math.abs(walk) * 3 : Math.sin(t * 2) * 1;
    const jy = state.jumpT >= 0 ? Math.sin(Math.min(1, state.jumpT / 0.6) * Math.PI) * 46 : 0;
    
    g.fillStyle = "rgba(0,0,0,.22)"; g.beginPath(); g.ellipse(player.x, player.y + 4, 16, 6, 0, 0, 7); g.fill();
    g.save(); g.translate(player.x, player.y);
    drawCharacter(g, walk, bob, jy, player.dir);
    g.restore();
  }

  if (state.marker) {
    const m = state.marker, k = (t - m.t0);
    if (k > 0.6) state.marker = null; else { g.strokeStyle = "#fff"; g.lineWidth = 3; g.globalAlpha = 1 - k / 0.6; g.beginPath(); g.ellipse(m.x, m.y, 8 + k * 40, 4 + k * 20, 0, 0, 7); g.stroke(); g.globalAlpha = 1; }
  }
  g.restore();

  drawHud(t);
}
