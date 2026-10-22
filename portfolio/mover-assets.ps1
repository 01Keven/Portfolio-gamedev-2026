# Mova suas imagens antigas (na raiz do projeto / pasta Images) para a nova estrutura.
# Uso (PowerShell, dentro desta pasta):  .\mover-assets.ps1
$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force assets/images/projects/la-vem-o-rapa, assets/images/projects/vr-adugo | Out-Null
function Mover($de, $para) {
  if (Test-Path $de) { Move-Item -Force $de $para; Write-Host "movido: $de -> $para" }
  else { Write-Host "nao encontrado (pulando): $de" }
}
Mover "Gemini_Generated_Image_m49vclm49vclm49v-removebg-preview.png"      "assets/images/character-frame.png"
Mover "Monogram_logo_design_KC_20261020100546-removebg-preview.png"       "assets/images/logo-kc.png"
Mover "Change_wall_color_to_white_2K_20261013170742-removebg-preview.png" "assets/images/about-photo.png"
foreach ($f in "rapa01.png","rapa02.png","rapa03.png") { Mover "Images/la-vem-o-rapa/$f" "assets/images/projects/la-vem-o-rapa/$f" }
foreach ($f in "adugo01.jpeg","adugo02.jpeg") { Mover "Images/vr-adugo/$f" "assets/images/projects/vr-adugo/$f" }
