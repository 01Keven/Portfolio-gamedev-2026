/* Controle e mãos (animados conforme o personagem anda) */
import { player } from '../core/state.js';
import { scene } from './renderer.js';
import { box } from './helpers.js';

const pad = new THREE.Group(); pad.position.set(0, -1.75, 1.6); pad.rotation.x = 1.0;
scene.add(pad);
const padMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.5 }); 
pad.add(box(1.9, 0.22, 0.85, padMat));
pad.add(box(0.5, 0.24, 0.8, padMat, -0.95, -0.02, 0.2)); pad.add(box(0.5, 0.24, 0.8, padMat, 0.95, -0.02, 0.2));

const stick = new THREE.Group(); stick.position.set(-0.55, 0.12, 0.05); pad.add(stick);
const stickMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 0.22, 12), new THREE.MeshStandardMaterial({ color: 0x060913, roughness: 0.8 })); 
stickMesh.position.y = 0.11; stickMesh.castShadow = true; stickMesh.receiveShadow = true; stick.add(stickMesh);

const btnCols = [0x00e1ff, 0x00a3ff, 0x00e1ff, 0x00a3ff]; const btns = [];
[[0.55, 0.15], [0.8, 0], [0.55, -0.15], [0.3, 0]].forEach((p, i) => {
  const b = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 12), new THREE.MeshStandardMaterial({ color: btnCols[i], roughness: 0.2, metalness: 0.8 }));
  b.position.set(p[0] + 0.15, 0.14, p[1] + 0.05); b.castShadow = true; b.receiveShadow = true; pad.add(b); btns.push(b);
});

const sphG = new THREE.SphereGeometry(1, 16, 12), cylG = new THREE.CylinderGeometry(1, 1, 1, 16);
const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 }); 
const skinMat3D = new THREE.MeshStandardMaterial({ color: 0x8a5a44, roughness: 0.4, metalness: 0.1 }); 

function ball(parent, mat, rx, ry, rz, x, y, z, rotY = 0) {
  const m = new THREE.Mesh(sphG, mat); m.scale.set(rx, ry, rz); m.position.set(x, y, z); m.rotation.y = rotY; m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}

const fistL = new THREE.Group(); stick.add(fistL); ball(fistL, skinMat3D, 0.31, 0.22, 0.31, 0, 0.3, 0);
const aL = new THREE.Mesh(cylG, skinMat3D); aL.scale.set(0.2, 0.9, 0.2); aL.rotation.x = Math.PI / 2; aL.position.set(0, 0.3, 0.55); fistL.add(aL);
const sL = new THREE.Mesh(cylG, sleeveMat); sL.scale.set(0.27, 0.5, 0.27); sL.rotation.x = Math.PI / 2; sL.position.set(0, 0.3, 1.15); fistL.add(sL);

const fistR = new THREE.Group(); fistR.position.set(0.8, 0.52, 0.38); pad.add(fistR); ball(fistR, skinMat3D, 0.31, 0.22, 0.29, 0, 0, 0);
const aR = new THREE.Mesh(cylG, skinMat3D); aR.scale.set(0.2, 0.9, 0.2); aR.rotation.x = Math.PI / 2; aR.position.set(0, 0, 0.55); fistR.add(aR);
const sR = new THREE.Mesh(cylG, sleeveMat); sR.scale.set(0.27, 0.5, 0.27); sR.rotation.x = Math.PI / 2; sR.position.set(0, 0, 1.15); fistR.add(sR);
const handR = { h: fistR };

export function updateController(t) {
  // Celular: só o controle (sem braços), para não atravessarem a mesa na câmera mais próxima
  fistL.visible = fistR.visible = innerWidth > 700;
  const m = player.moving, amp = m ? 1 : 0.25;
  pad.position.y = -1.75 + Math.sin(t * 2) * 0.01;
  let dirx = 0, diry = 0;
  if (m) { dirx = Math.sign(player.tx - player.x) * Math.min(1, Math.abs(player.tx - player.x) / 60);
           diry = Math.sign(player.ty - player.y) * Math.min(1, Math.abs(player.ty - player.y) / 60); }
  stick.rotation.z += (-dirx * 0.45 - stick.rotation.z) * 0.2; stick.rotation.x += (diry * 0.45 - stick.rotation.x) * 0.2;
  const press = Math.max(0, Math.sin(t * (m ? 14 : 3))) * (m ? 1 : 0.35);
  handR.h.position.y = 0.52 - press * 0.11 + Math.sin(t * 6) * 0.008 * amp; handR.h.rotation.x = press * 0.1;
  btns[1].position.y = 0.14 - press * 0.045;
}
