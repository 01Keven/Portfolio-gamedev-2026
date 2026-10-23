/* Dados dos projetos exibidos nos cards (edite aqui para adicionar jogos) */
export const PROJECTS = [
  { 
    initials: "LR", 
    name: "Lá Vem o Rapa!", 
    genre: "Arcade Action / Runner / Game Jam",
    text: "Jogo arcade desenvolvido para a GameJamPlus 26/27. Desenvolvido sob o tema 'One More Time'. A mecânica central abraça a resiliência de um trabalhador de rua que, mesmo perdendo suas mercadorias, volta no dia seguinte para tentar bater sua meta mais uma vez. Atuei como Product Owner (PO) organizando e gerenciando a equipe de 3 pessoas além de mim: Lucas Aguiar (frontend), Jessé Oliveira (backend) e Celeste Moraes (arte). Também contribuí na programação, principalmente no GameManager.",
    techs: [
      { name: "Unity", class: "devicon-unity-original" },
      { name: "C#", class: "devicon-csharp-plain" },
      // { name: "WebGL", class: "devicon-chrome-plain" }
    ],
    tags: ["Game Jam Plus", "Management", "Arcade", "Rogue Like", "PO & Dev"], 
    bg: "linear-gradient(135deg,#00e1ff,#0f172a)", 
    url: "https://keven-christian.itch.io", 
    images: [
      "assets/images/projects/la-vem-o-rapa/rapa01.png",
      "assets/images/projects/la-vem-o-rapa/rapa02.png",
      "assets/images/projects/la-vem-o-rapa/rapa03.png",
    ] 
  },
  // { 
  //   initials: "DS", 
  //   name: "DoomScroll", 
  //   genre: "Sátira Social / Simulation",
  //   text: "Uma experiência satírica que simula o impacto psicológico do vício em feeds infinitos e algoritmos de vídeos curtos. Enfrente a perda do foco e o caos digital acumulado.",
  //   techs: [
  //     { name: "Unity", class: "devicon-unity-original" },
  //     { name: "C#", class: "devicon-csharp-plain" },
  //     { name: "Shader Graph", class: "devicon-opengl-plain" }
  //   ],
  //   tags: ["Sátira", "Simulation", "2D/3D Hybrid"], 
  //   bg: "linear-gradient(135deg,#1e293b,#04060d)", 
  //   url: "https://keven-christian.itch.io", 
  //   images: [
  //     ""
  //   ] 
  // },
  { 
    initials: "1S", 
    name: "One Soul, One Cat", 
    genre: "Narrative Adventure / Puzzle / Game Jam",
    text: "Jogo focado em história e puzzles feito inteiramente por mim para a Mini Code for a Cause!, com tema 'You Only Get One!'. A mecânica principal: você pode escolher UMA única habilidade entre as comuns em jogos (Jump, Sprint, Shot, Grapple) mas só tem UMA chance de usá-la por fase. O jogo gira em torno de fases de puzzle onde você deve escolher com sabedoria qual skill única vai permitir passar. Desenvolvido na Godot Engine, explore a conexão emocionante entre as memórias de um gato e a alma perdida do seu dono.",
    techs: [
      { name: "Godot", class: "devicon-godot-plain" },
      { name: "C#", class: "devicon-csharp-plain" }
    ],
    tags: ["Narrativo", "Puzzle", "Game Jam", "Solo Dev", "Godot", "One Mechanic"], 
    bg: "linear-gradient(135deg,#0f172a,#1e293b)", 
    url: "https://keven-christian.itch.io", 
    images: [
      "assets/images/projects/one-soul/one0.png",
      "assets/images/projects/one-soul/one01.png",
      "assets/images/projects/one-soul/one02.png",
      "assets/images/projects/one-soul/one03.png",
      "assets/images/projects/one-soul/one05.png",
    ] 
  },
  { 
    initials: "VR", 
    name: "VR Piano", 
    genre: "Virtual Reality / Music / Educational / Health",
    text: "Projeto VR em equipe ainda em desenvolvimento, criado durante a Residência de Games. Minha responsabilidade: programação de gerenciamento de interação com VR (usando o simulador de VR da Unity) e integração de sensores nas pernas do usuário (via SlimeVR) para capturar o movimento de pisar e interagir com as teclas do piano. O projeto é pensado para a área da saúde, com foco em fisioterapia e estimulo motor gamificado.",
    techs: [
      { name: "Unity VR", class: "devicon-unity-original" },
      { name: "C#", class: "devicon-csharp-plain" },
      { name: "OpenXR", class: "devicon-android-plain" },
      { name: "SlimeVR", class: "devicon-bluetooth-plain" }
    ],
    tags: ["Realidade Virtual", "Residência Games", "Interativo", "Em Desenvolvimento", "Saúde", "Fisioterapia", "SlimeVR"], 
    bg: "linear-gradient(135deg,#00a3ff,#0f172a)", 
    url: "https://keven-christian.itch.io", 
    images: [
      "assets/images/projects/vr-adugo/adugo01.jpeg",
      "assets/images/projects/vr-adugo/adugo02.jpeg",
    ] 
  }
];