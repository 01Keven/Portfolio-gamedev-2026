/* Desenho do personagem (usado no jogo e no mascote) */
export function drawCharacter(ctx, walk, bob, jy, dir) {
  ctx.save(); ctx.translate(0, -bob - jy); ctx.scale(dir, 1);
  ctx.fillStyle = "#2b3a67"; ctx.fillRect(-9, -18, 7, 18 + walk * 3); ctx.fillRect(2, -18, 7, 18 - walk * 3);
  ctx.fillStyle = "#00E5FF"; ctx.fillRect(-11, -42, 22, 26);
  ctx.fillStyle = "#f1b98a"; ctx.fillRect(-9, -62, 18, 20);
  ctx.fillStyle = "#17131f"; ctx.fillRect(-10, -66, 20, 8); ctx.fillRect(-10, -62, 4, 8); ctx.fillRect(3, -54, 3, 4);
  ctx.restore();
}
