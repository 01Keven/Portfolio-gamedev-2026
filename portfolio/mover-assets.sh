#!/usr/bin/env bash
# Mova suas imagens antigas (na raiz do projeto / pasta Images) para a nova estrutura.
# Uso: copie as imagens antigas para esta pasta e rode:  bash mover-assets.sh
set -e
mkdir -p assets/images/projects/la-vem-o-rapa assets/images/projects/vr-adugo
mv_if() { [ -f "$1" ] && mv -f "$1" "$2" && echo "movido: $1 -> $2" || echo "nao encontrado (pulando): $1"; }
mv_if "Gemini_Generated_Image_m49vclm49vclm49v-removebg-preview.png"        assets/images/character-frame.png
mv_if "Monogram_logo_design_KC_20261020100546-removebg-preview.png"         assets/images/logo-kc.png
mv_if "Change_wall_color_to_white_2K_20261013170742-removebg-preview.png"   assets/images/about-photo.png
for f in rapa01.png rapa02.png rapa03.png; do mv_if "Images/la-vem-o-rapa/$f" "assets/images/projects/la-vem-o-rapa/$f"; done
for f in adugo01.jpeg adugo02.jpeg; do mv_if "Images/vr-adugo/$f" "assets/images/projects/vr-adugo/$f"; done
