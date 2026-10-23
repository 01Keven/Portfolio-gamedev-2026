/* Renderer, cena e câmera principais */
import { CONFIG } from '../config/game.js';

export const canvas = document.getElementById("stage");
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const ROOM_BG = 0x060913; 
export const scene = new THREE.Scene();
scene.background = new THREE.Color(ROOM_BG); 
scene.fog = new THREE.FogExp2(ROOM_BG, 0.06); 

export const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);

export function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight; renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  camera.userData.d = Math.max(5.6 / (2 * t), (camera.aspect < 0.8 ? 5.2 : 5.9) / (2 * t * camera.aspect));  // celular em pé: a tela do jogo ocupa quase toda a largura
}
