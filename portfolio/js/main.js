/* Ponto de entrada: liga jogo 2D, cena 3D e site, e roda o loop principal */
import { state, hooks } from './core/state.js';
import { clock } from './core/runtime.js';
import { drawGame } from './game/game.js';
import { masc, drawMascot } from './mascot/mascot.js';
import { renderer, scene, camera, resize } from './scene/renderer.js';
import { updateLights } from './scene/lights.js';
import { gameTexture } from './scene/monitor.js';
import { updateController } from './scene/controller.js';
import { updateDecor } from './scene/decor.js';
import { updateCamera } from './scene/cameraRig.js';
import { initInput } from './scene/input.js';
import { buildSite } from './site/build.js';
import { initCarousels } from './site/carousel.js';
import { initContactForm } from './site/contactForm.js';
import { initNavigation, enterSite } from './site/navigation.js';

// Site (HTML das páginas) e interações
buildSite();
initCarousels();
initContactForm();
initNavigation();
hooks.enterSite = enterSite;   // o jogo 2D chama isso ao chegar numa bandeira
initInput();

addEventListener("resize", resize); resize();

function loop() {
  const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;

  drawGame(t, dt); gameTexture.needsUpdate = true;
  drawMascot(t, dt);

  if (scrollY > innerHeight * 1.05 && !masc.active) { requestAnimationFrame(loop); return; }

  updateCamera(dt);
  updateController(t);
  updateLights(t);
  updateDecor(t, dt);
  renderer.render(scene, camera); requestAnimationFrame(loop);
}
loop();
