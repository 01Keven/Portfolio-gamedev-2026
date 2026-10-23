/* Mascote DOM que acompanha o mouse pelos cards do site */
import { drawCharacter } from '../game/character.js';

const mCanvas = document.getElementById("mascot-canvas");
export const mCtx = mCanvas.getContext("2d");
export const masc = { 
  active: false, x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, dir: 1, moving: false, 
  targetEl: null, spawnY: 0
};

document.addEventListener("mouseover", (e) => {
  const el = e.target.closest('.card, .panel, .top button, .compact-btn, #site h2');
  if (el) masc.targetEl = el;
});
document.addEventListener("mouseout", (e) => {
  const el = e.target.closest('.card, .panel, .top button, .compact-btn, #site h2');
  if (el === masc.targetEl) masc.targetEl = null;
});

export function drawMascot(t, dt) {
  if (!masc.active) return;
  
  if (masc.targetEl) {
    const rect = masc.targetEl.getBoundingClientRect();
    masc.tx = rect.left + rect.width / 2;
    masc.ty = rect.top; 
  } else {
    masc.tx = window.innerWidth - 80;
    masc.ty = window.innerHeight - 20;
  }

  masc.vx += (masc.tx - masc.x) * 0.08;
  masc.vy += (masc.ty - masc.y) * 0.12; 
  masc.vx *= 0.75; 
  masc.vy *= 0.65;
  
  masc.x += masc.vx;
  masc.y += masc.vy;

  masc.moving = Math.abs(masc.vx) > 0.5;
  if (masc.moving) masc.dir = Math.sign(masc.vx) || 1;

  mCanvas.style.transform = `translate(${masc.x - 30}px, ${masc.y - 70}px)`;

  mCtx.clearRect(0, 0, 60, 80);
  const walk = masc.moving ? Math.sin(t * 18) : 0;
  const bob = masc.moving ? Math.abs(walk) * 3 : Math.sin(t * 3) * 1.5;
  const jy = masc.vy < -3 ? 8 : 0; 
  
  mCtx.fillStyle = "rgba(0,0,0,.3)"; mCtx.beginPath(); mCtx.ellipse(30, 75, 14, 4, 0, 0, 7); mCtx.fill();
  mCtx.save(); mCtx.translate(30, 72);
  drawCharacter(mCtx, walk, bob, jy, masc.dir);
  mCtx.restore();
}

/* Mascote "pula" para a tela ao entrar no site */
export function spawnMascot() {
  masc.active = true;
  masc.x = window.innerWidth / 2;
  masc.y = window.innerHeight / 2;
  masc.vx = 0; masc.vy = -10;
}

/* Mascote some ao voltar para o jogo */
export function hideMascot() {
  masc.active = false;
  mCtx.clearRect(0, 0, 60, 80);
}
