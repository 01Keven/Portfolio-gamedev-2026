/* Estrutura do quarto: parede, chão, mesa, janela e quadro */
import { ASSETS } from '../config/assets.js';
import { scene } from './renderer.js';
import { box, texLoader } from './helpers.js';

const wallMat = new THREE.MeshStandardMaterial({ color: 0x080c16, roughness: 0.85, metalness: 0.1 });
const wall = new THREE.Mesh(new THREE.PlaneGeometry(50, 30), wallMat);
wall.position.z = -5.1;
wall.receiveShadow = true; 
scene.add(wall);

const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 30), wallMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -4;
floor.receiveShadow = true;
scene.add(floor);

const deskMat = new THREE.MeshStandardMaterial({ color: 0x0f111a, roughness: 0.4, metalness: 0.2 });
export const desk = new THREE.Mesh(new THREE.BoxGeometry(20, 0.5, 8), deskMat);
desk.position.set(0, -2.5, -1);
desk.receiveShadow = true;
scene.add(desk);

const windowGroup = new THREE.Group();
windowGroup.position.set(6, 2, -5.0);
scene.add(windowGroup);
const winMat = new THREE.MeshStandardMaterial({ color: 0x00e1ff, roughness: 0.9, metalness: 0.5 }); 
const glassMat = new THREE.MeshStandardMaterial({ color: 0x00e1ff, metalness: 0.8, roughness: 0.2, transparent: true, opacity: 0.4 }); 
windowGroup.add(box(3.2, 4.2, 0.1, winMat));
windowGroup.add(box(3.0, 4.0, 0.11, glassMat));
windowGroup.add(box(0.1, 4.0, 0.15, winMat)); 
windowGroup.add(box(3.0, 0.1, 0.15, winMat)); 

const frameGroup = new THREE.Group();
frameGroup.position.set(-5.5, 2.5, -5.0);
scene.add(frameGroup);
frameGroup.add(box(2.6, 2.6, 0.1, new THREE.MeshStandardMaterial({ color: 0x00e1ff, roughness: 0.5, metalness: 0.8 }))); 
frameGroup.add(box(2.4, 2.4, 0.12, new THREE.MeshStandardMaterial({ color: 0x00e1ff }))); 
const charTex = texLoader.load(ASSETS.characterFrame);
const charMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 2.3), new THREE.MeshBasicMaterial({ map: charTex, transparent: true }));
charMesh.position.z = 0.07;
frameGroup.add(charMesh);
