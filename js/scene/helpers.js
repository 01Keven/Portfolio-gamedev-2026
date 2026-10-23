/* Utilitários de criação de objetos 3D */
export const box = (w, h, d, mat, x = 0, y = 0, z = 0) => { 
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); 
  m.position.set(x, y, z); 
  m.castShadow = true; 
  m.receiveShadow = true; 
  return m; 
};

export const texLoader = new THREE.TextureLoader();
