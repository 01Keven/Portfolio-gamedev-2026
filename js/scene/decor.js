/* Decoração do quarto: estante, luminária, caneca, partículas e animações */
import { reducedMotion } from '../core/runtime.js';
import { scene } from './renderer.js';
import { desk } from './room.js';

/* Decoração do Quarto */
const decor = new THREE.Group(), anim = new THREE.Group(); scene.add(decor, anim);
const mDark = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.5 });
const mSlate = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
const mBlack = new THREE.MeshStandardMaterial({ color: 0x0a0c16, roughness: 0.3, metalness: 0.6 });
const mCyan = new THREE.MeshBasicMaterial({ color: 0x00e1ff }), mBlue = new THREE.MeshBasicMaterial({ color: 0x00a3ff });
const lineMat = new THREE.LineBasicMaterial({ color: 0x00a3ff, transparent: true, opacity: 0.55 });   

const put = (mesh, x, y, z, parent = decor) => { mesh.position.set(x, y, z); parent.add(mesh); return mesh; };
const dbox = (w, h, d, mat, x, y, z, outline = false) => {
  const m = put(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat), x, y, z);
  if (outline) m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), lineMat));
  return m;
};
const cyl = (r, h, mat, x, y, z, rz = 0) => { const m = put(new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 14), mat), x, y, z); m.rotation.z = rz; return m; };
const disc = (a, b, mat, x, y, z) => put(new THREE.Mesh(b ? new THREE.RingGeometry(a, b, 24) : new THREE.CircleGeometry(a, 20), mat), x, y, z);
const plane = (w, h, mat, x, y, z, rx = 0, rz = 0) => { const m = put(new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat), x, y, z); m.rotation.set(rx, 0, rz); return m; };

function gradTex(w, h, radial) {
  const c = document.createElement("canvas"); c.width = w; c.height = h; const x = c.getContext("2d");
  const gr = radial ? x.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2) : x.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = gr; x.fillRect(0, 0, w, h); return new THREE.CanvasTexture(c);
}
const glowTex = gradTex(64, 64, true), beamTex = gradTex(4, 64, false);
const additive = (map, color, opacity, extra = {}) => ({ map, color, opacity, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, ...extra });
const sprite = (x, y, z, size, color, opacity, parent = decor) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial(additive(glowTex, color, opacity))); s.scale.set(size, size, 1); return put(s, x, y, z, parent);
};

const slats = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 7.4, 0.14), mDark, 26), mx = new THREE.Matrix4();
for (let i = 0; i < 26; i++) { mx.setPosition(-4 + i * 0.32, 1.45, -4.95); slats.setMatrixAt(i, mx); }
slats.frustumCulled = false; decor.add(slats);                      
dbox(8.4, 0.05, 0.05, mCyan, 0, -1.55, -4.85); dbox(8.4, 0.05, 0.05, mBlue, 0, 4.0, -4.85);
sprite(0, 0.6, -4.8, 12, 0x00e1ff, 0.2);                            
sprite(6, 2, -4.9, 7, 0x00e1ff, 0.16);                              
plane(2.4, 7, new THREE.MeshBasicMaterial(additive(beamTex, 0x00e1ff, 0.1, { side: THREE.DoubleSide })), 4.3, -1.07, -4.8, 0, -0.5);

desk.add(new THREE.LineSegments(new THREE.EdgesGeometry(desk.geometry), lineMat));
plane(8, 3.2, new THREE.MeshBasicMaterial(additive(glowTex, 0x00e1ff, 0.16)), 0, -2.235, 0.4, -Math.PI / 2);

dbox(0.9, 1.5, 0.8, mDark, -3.9, -1.5, -1.0, true);
disc(0.2, 0, mBlack, -3.9, -1.65, -0.595); disc(0.2, 0.27, mCyan, -3.9, -1.65, -0.594);
disc(0.09, 0, mBlack, -3.9, -1.0, -0.595); disc(0.09, 0.12, mBlue, -3.9, -1.0, -0.594);
cyl(0.03, 1.0, mBlack, -3.0, -1.65, 0.7); cyl(0.3, 0.06, mDark, -3.0, -2.22, 0.7);
put(new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 8, 20, Math.PI), mSlate), -3.0, -1.55, 0.7);
[-3.4, -2.6].forEach(x => cyl(0.2, 0.14, mDark, x, -1.6, 0.7, Math.PI / 2));
[-3.49, -2.51].forEach(x => cyl(0.21, 0.02, mCyan, x, -1.6, 0.7, Math.PI / 2));
cyl(0.2, 0.38, mSlate, -3.35, -2.06, 1.1);
disc(0.18, 0, mBlack, -3.35, -1.87, 1.1).rotation.x = -Math.PI / 2;
put(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 6, 12, Math.PI), mSlate), -3.15, -2.06, 1.1).rotation.z = -Math.PI / 2;

cyl(0.35, 0.08, mDark, 3.4, -2.21, 0.7);
const lampCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-0.05, 0.9, 0), new THREE.Vector3(-0.5, 1.45, 0), new THREE.Vector3(-0.8, 1.3, 0)]);
put(new THREE.Mesh(new THREE.TubeGeometry(lampCurve, 24, 0.035, 6), mBlack), 3.4, -2.2, 0.7);
put(new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.4, 14), mDark), 2.6, -1.05, 0.7);
put(new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), mCyan), 2.6, -1.28, 0.7);
sprite(2.6, -1.3, 0.7, 1.1, 0x00e1ff, 0.55);
plane(2.4, 1.6, new THREE.MeshBasicMaterial(additive(glowTex, 0x00e1ff, 0.22)), 2.6, -2.235, 0.7, -Math.PI / 2);
dbox(1.2, 0.25, 0.85, mDark, 4.1, -2.12, -1.4, true); dbox(0.9, 0.03, 0.02, mCyan, 4.1, -2.1, -0.97);

dbox(3, 0.1, 0.5, mDark, -5.5, 0.6, -4.75, true);
[-6.3, -5.85, -5.4].forEach((x, i) => {
  const h = 0.55 + i * 0.06; dbox(0.38, h, 0.07, mSlate, x, 0.65 + h / 2, -4.75, true); dbox(0.38, 0.07, 0.075, i % 2 ? mBlue : mCyan, x, 0.65 + h - 0.12, -4.75);
});
put(new THREE.Mesh(new THREE.OctahedronGeometry(0.17), mCyan), -4.75, 0.82, -4.75);
dbox(3, 0.1, 0.5, mDark, 6.0, -0.3, -4.75, true);
dbox(0.9, 0.7, 0.6, mDark, 5.4, 0.1, -4.75, true); dbox(0.6, 0.45, 0.02, mCyan, 5.35, 0.1, -4.44);
dbox(0.03, 0.6, 0.03, mBlack, 5.2, 0.7, -4.75).rotation.z = 0.4; dbox(0.03, 0.6, 0.03, mBlack, 5.6, 0.7, -4.75).rotation.z = -0.4;
[0, 1, 2].forEach(i => dbox(0.8, 0.12, 0.6, i % 2 ? mSlate : mDark, 6.6, -0.19 + i * 0.12, -4.75, true));

decor.traverse(o => { o.matrixAutoUpdate = false; o.updateMatrix(); });   

const crystal = put(new THREE.Mesh(new THREE.OctahedronGeometry(0.3), new THREE.MeshStandardMaterial({ color: 0x00e1ff, emissive: 0x00e1ff, emissiveIntensity: 1.4, flatShading: true, roughness: 0.2 })), 4.0, -0.9, -0.8, anim);
const crystalGlow = sprite(4.0, -0.9, -0.8, 1.6, 0x00e1ff, 0.45, anim);
const steam = [0, 1, 2].map(() => sprite(-3.35, -1.7, 1.1, 0.3, 0x00e1ff, 0, anim));
const DUST = 70, dustPos = new Float32Array(DUST * 3), dustSeed = new Float32Array(DUST);
for (let i = 0; i < DUST; i++) { dustPos[i * 3] = (Math.random() - 0.5) * 14; dustPos[i * 3 + 1] = -2 + Math.random() * 6; dustPos[i * 3 + 2] = -4 + Math.random() * 7; dustSeed[i] = Math.random() * 6.28; }
const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0x00e1ff, size: 0.05, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
dust.frustumCulled = false; anim.add(dust);

export function updateDecor(t, dt) {
  if (reducedMotion) return;
  crystal.rotation.y = t * 0.8; crystal.position.y = crystalGlow.position.y = -0.9 + Math.sin(t * 1.4) * 0.12;
  crystalGlow.material.opacity = 0.45 + Math.sin(t * 2) * 0.1;
  steam.forEach((s, i) => { const k = (t * 0.4 + i / 3) % 1; s.position.y = -1.7 + k * 0.7; s.position.x = -3.35 + Math.sin(k * 6 + i) * 0.05; s.material.opacity = Math.sin(k * Math.PI) * 0.22; s.scale.setScalar(0.25 + k * 0.3); });
  for (let i = 0; i < DUST; i++) {
    dustPos[i * 3 + 1] += dt * (0.05 + dustSeed[i] * 0.01); dustPos[i * 3] += Math.sin(t * 0.3 + dustSeed[i]) * dt * 0.05;
    if (dustPos[i * 3 + 1] > 4) dustPos[i * 3 + 1] = -2;
  }
  dustGeo.attributes.position.needsUpdate = true;
}
