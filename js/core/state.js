/* Estado global compartilhado entre jogo 2D, cena 3D e site */
import { CONFIG } from '../config/game.js';

export const game = document.createElement("canvas");
game.width = CONFIG.screenW; game.height = CONFIG.screenH;
export const g = game.getContext("2d");

export const player = { x: 560, y: 440, tx: 560, ty: 440, moving: false, dir: 1, step: 0 };
export const state = { 
  jumpT: -1, 
  shake: 0, 
  ach: null, 
  onCenter: false, 
  done: false, 
  parts: [], 
  clicked: false, 
  hintAlpha: 1, 
  escaped: false, 
  cam: { x: 0, y: 0 }, 
  zombies: [],
  // Flags de controle de áudio
  audioStarted: false,  // Se a música já foi iniciada (política de autoplay)
  musicStopped: false   // Se a música já foi parada ao sair do jogo
};

// Estado da interface 3D/site (antes eram variáveis soltas: zoom e entering)
export const ui = { zoom: 0, entering: false };

// Ganchos para evitar dependência circular entre módulos (preenchidos no main.js)
export const hooks = { enterSite: () => {} };
