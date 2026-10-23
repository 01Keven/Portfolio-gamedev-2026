/* Minigame de zumbis: nascem ao passar pelo centro, perseguem e somem */
import { CONFIG } from '../config/game.js';
import { ZOMBIE, ZOMBIE_NAMES } from '../config/zombies.js';
import { g, player, state } from '../core/state.js';

let lastZombieName = "";

export function spawnZombie() {
  if (state.zombies.length >= ZOMBIE.max) state.zombies.shift();

  const angle = Math.random() * Math.PI * 2;
  const radius = 260 + Math.random() * 200;
  let name;
  do {
    name = ZOMBIE_NAMES[Math.floor(Math.random() * ZOMBIE_NAMES.length)];
  } while (name === lastZombieName && ZOMBIE_NAMES.length > 1);
  lastZombieName = name;

  state.zombies.push({
    x: Math.max(40, Math.min(CONFIG.worldW - 40, player.x + Math.cos(angle) * radius)),
    y: Math.max(100, Math.min(CONFIG.worldH - 40, player.y + Math.sin(angle) * radius * 0.8)),
    age: 0, name, dir: 1, seed: Math.random() * Math.PI * 2
  });
}

export function updateZombies(dt) {
  for (const z of state.zombies) {
    z.age += dt;
    if (z.age < 0.4 || z.age >= ZOMBIE.life) continue;

    const dx = player.x - z.x, dy = player.y - z.y;
    const distance = Math.hypot(dx, dy) || 1;
    if (distance > 28) {
      z.x += dx / distance * ZOMBIE.speed * dt;
      z.y += dy / distance * ZOMBIE.speed * dt;
    }
    if (Math.abs(dx) > 4) z.dir = dx > 0 ? 1 : -1;

    for (const other of state.zombies) {
      if (other === z || other.age >= ZOMBIE.life) continue;
      const ox = z.x - other.x, oy = z.y - other.y, separation = Math.hypot(ox, oy);
      if (separation < 26 && separation > 0) {
        z.x += ox / separation * 40 * dt;
        z.y += oy / separation * 40 * dt;
      }
    }
  }
  state.zombies = state.zombies.filter(z => z.age < ZOMBIE.life + 1);
}

export function drawZombie(z, t) {
  const dead = z.age >= ZOMBIE.life;
  const deathTime = dead ? z.age - ZOMBIE.life : 0;
  const rise = Math.min(1, z.age / 0.4);
  const fall = Math.min(1, deathTime / 0.45);
  const alpha = dead ? 1 - Math.max(0, (deathTime - 0.45) / 0.55) : 1;
  const walk = dead ? 0 : Math.sin(t * 9 + z.seed);

  g.save();
  g.globalAlpha = alpha;
  g.fillStyle = "rgba(0,0,0,.22)";
  g.beginPath(); g.ellipse(z.x, z.y + 4, 16, 6, 0, 0, Math.PI * 2); g.fill();
  g.translate(z.x, z.y);
  g.scale(z.dir, rise);
  g.rotate(-fall * Math.PI / 2);

  g.fillStyle = "#3b4a3a";
  g.fillRect(-9, -18, 7, 18 + walk * 3);
  g.fillRect(2, -18, 7, 18 - walk * 3);
  g.fillStyle = "#6e7f4a"; g.fillRect(-11, -42, 22, 26);
  g.fillStyle = "#4d5c34"; g.fillRect(-11, -24, 8, 8);
  g.fillStyle = "#8fbf7a"; g.fillRect(4, -40, 18, 6); g.fillRect(4, -30, 16, 6);
  g.fillStyle = "#8fbf7a"; g.fillRect(-9, -62, 18, 20);
  g.fillStyle = dead ? "#17131f" : "#ff3b3b";
  g.fillRect(2, -55, 4, 4); g.fillRect(-4, -55, 3, 4);
  g.restore();

  if (z.age > 0.4) {
    g.save();
    g.globalAlpha = alpha;
    g.font = "bold 14px 'Poppins', sans-serif";
    g.textAlign = "center";
    g.lineWidth = 4;
    g.strokeStyle = CONFIG.colors.ink;
    g.strokeText(z.name, z.x, z.y - 78 + fall * 40);
    g.fillStyle = "#7ef0c0";
    g.fillText(z.name, z.x, z.y - 78 + fall * 40);
    g.restore();
  }
}
