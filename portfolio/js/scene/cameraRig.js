/* Câmera: paralaxe do mouse e zoom ao chegar perto das bandeiras */
import { CONFIG } from '../config/game.js';
import { player, state, ui } from '../core/state.js';
import { reducedMotion } from '../core/runtime.js';
import { camera } from './renderer.js';
import { monitor } from './monitor.js';
import { look } from './input.js';

export function updateCamera(dt) {
  const d = camera.userData.d, p = reducedMotion ? 0 : 0.35;
  const near = Math.min(...CONFIG.flags.map(f => Math.hypot(f.x - player.x, f.y - player.y)));
  let zt = Math.max(0, Math.min(1, (420 - near) / 340)); zt = zt * zt * (3 - 2 * zt);
  if (ui.entering || state.escaped) zt = 1.9;
  ui.zoom += (zt - ui.zoom) * Math.min(1, dt * 3);
  const zk = reducedMotion ? 0.3 : 1, lift = ui.zoom * 0.3 * zk;
  camera.position.set(look.x * p, -0.25 + lift - look.y * p * 0.6, d * (1 - 0.3 * ui.zoom * zk)); camera.lookAt(0, -0.25 + lift, 0);
  monitor.rotation.y += ((look.x * 0.12) - monitor.rotation.y) * 0.05;
}
