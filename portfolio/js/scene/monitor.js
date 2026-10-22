/* Monitor: moldura, tela (textura do jogo 2D) e logo */
import { CONFIG } from '../config/game.js';
import { ASSETS } from '../config/assets.js';
import { game } from '../core/state.js';
import { scene } from './renderer.js';
import { box, texLoader } from './helpers.js';

const plastic = new THREE.MeshStandardMaterial({ color: 0x0a0c16, roughness: 0.2, metalness: 0.7 });
const SW = 4.8, SH = SW * CONFIG.screenH / CONFIG.screenW;
export const monitor = new THREE.Group(); monitor.position.y = 0.35; scene.add(monitor);

monitor.add(box(SW + 0.55, SH + 0.55, 0.34, plastic)); 
const tex = new THREE.CanvasTexture(game); tex.encoding = THREE.sRGBEncoding; tex.anisotropy = 4;
const screenMaterial = new THREE.MeshBasicMaterial({ map: tex });
export const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), screenMaterial);
screenMesh.position.z = 0.18; monitor.add(screenMesh);

monitor.add(box(0.5, 0.5, 0.3, plastic, 0, -(SH + 0.55) / 2 - 0.2, -0.05));
monitor.add(box(1.8, 0.1, 0.9, plastic, 0, -(SH + 0.55) / 2 - 0.5, 0.1));

monitor.add(box(0.12, 0.12, 0.02, new THREE.MeshStandardMaterial({ color: 0x00e1ff, emissive: 0x00e1ff, emissiveIntensity: 2 }), SW / 2 + 0.05, -SH / 2 - 0.15, 0.18));

const logoTex = texLoader.load(ASSETS.logo);
const logoMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.26), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true }));
logoMesh.position.set(0, -SH / 2 - 0.14, 0.175);
monitor.add(logoMesh);

export { tex as gameTexture };
