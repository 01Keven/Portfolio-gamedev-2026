/* Configuração do mini-jogo 2D que roda dentro do monitor */
// Celular: o jogo é desenhado numa área menor (mostra menos mapa), então tudo aparece maior na tela
const COMPACT = matchMedia("(max-width: 700px)").matches;

export const CONFIG = {
  name: "Keven Christian Alves Cândido", role: "Game Developer · Unity · C#",
  screenW: COMPACT ? 576 : 960, screenH: COMPACT ? 360 : 600, worldW: 2600, worldH: 1700, walkSpeed: 170,
  colors: { room: 0x060913, plastic: 0x2a2438, grass: "#4b9b6e", grassDark: "#438c62", sand: "#e9cf94", flag: "#ff6b57", skin: "0x00e1ff", ink: "#17131f" },
  center: { x: 1300, y: 850 },
  // Flags use translation keys; labels will be resolved at draw time via i18n
  flags: [
    { labelKey: 'nav.projetos', navTarget: 'projetos', x: 1500, y: 520 },
    { labelKey: 'nav.sobre', navTarget: 'sobre', x: 700, y: 1050 },
    { labelKey: 'nav.contato', navTarget: 'contato', x: 1700, y: 1250 }
  ]
};

export const trees = [[282,300],[882,200],[1040,700],[2000,420],[2200,980],[420,1300],[1000,1420],[1950,1500],[2350,1400],[160,880],[1350,1320],[2250,260]];
