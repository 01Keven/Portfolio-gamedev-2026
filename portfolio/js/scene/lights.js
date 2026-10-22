/* Luzes da cena */
import { scene } from './renderer.js';

const ambient = new THREE.AmbientLight(0x0a0c16, 0.20); 
scene.add(ambient);

const screenLight = new THREE.PointLight(0x00e1ff, 6.0, 8.0, 2.0);
screenLight.position.set(0, 0, 1.5);
scene.add(screenLight);

export const rimLight = new THREE.DirectionalLight(0x00e1ff, 1.5);
rimLight.position.set(8, 5, -2);
rimLight.castShadow = true;
rimLight.shadow.mapSize.width = 1024; 
rimLight.shadow.mapSize.height = 1024;
rimLight.shadow.camera.left = -10;
rimLight.shadow.camera.right = 10;
rimLight.shadow.camera.top = 10;
rimLight.shadow.camera.bottom = -10;
rimLight.shadow.bias = -0.001;
scene.add(rimLight);

export function updateLights(t) {
  rimLight.position.x = 8 + Math.sin(t * 0.5) * 2;
  rimLight.position.z = -2 + Math.cos(t * 0.3) * 1;
}
