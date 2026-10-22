/* Clique na tela 3D do monitor vira clique no mapa 2D */
import { CONFIG } from '../config/game.js';
import { game, player, state } from '../core/state.js';
import { clock } from '../core/runtime.js';
import { canvas, camera } from './renderer.js';
import { screenMesh } from './monitor.js';

export const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
export const look = { x: 0, y: 0 };
function toNDC(e) { const r = canvas.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); }

export function initInput() {
  canvas.addEventListener("pointerdown", e => {
    if (state.escaped) return;
    toNDC(e);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObject(screenMesh, false)[0];
    if (!hit || !hit.uv) return;

    const wx = state.cam.x + hit.uv.x * game.width;
    const wy = state.cam.y + (1 - hit.uv.y) * game.height;
    player.tx = Math.max(20, Math.min(CONFIG.worldW - 20, wx));
    player.ty = Math.max(80, Math.min(CONFIG.worldH - 20, wy));
    player.moving = Math.hypot(player.tx - player.x, player.ty - player.y) > 2;
    state.clicked = true;
    state.hintAlpha = 0;
    state.marker = { x: player.tx, y: player.ty, t0: clock.elapsedTime };

    if (Math.hypot(wx - CONFIG.center.x, wy - CONFIG.center.y) < 110) {
      player.tx = CONFIG.center.x;
      player.ty = CONFIG.center.y;
      player.moving = true;
    }
  });
  canvas.addEventListener("pointermove", e => { look.x = (e.clientX / innerWidth - 0.5); look.y = (e.clientY / innerHeight - 0.5); });
}
