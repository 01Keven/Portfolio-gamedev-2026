/* Sistema de internacionalização (i18n) */
let currentLang = 'pt-BR';

export const translations = {
  'pt-BR': {
    // Navegação
    nav: {
      jogo: '↑ Jogo',
      projetos: 'Projetos',
      sobre: 'Sobre',
      contato: 'Contato'
    },
    // Hero / Game screen
    hero: {
      downBtn: 'Explorar Portfólio ↓'
    },
    // Game
    game: {
      start: 'INICIAR',
      again: 'DE NOVO'
    },
    // Página de Projetos
    projects: {
      title: 'Projetos em Destaque',
      more: 'Ver na página do projeto'
    },
    // Página Sobre
    about: {
      title: 'Sobre Mim',
      kicker: 'Quem sou eu 👋',
      bio: `Olá! Eu sou <strong>Keven Christian Alves Cândido</strong>, desenvolvedor de jogos, principalmente com Unity e C#, e <strong>engenheiro de software</strong> em formação. Sou apaixonado por transformar ideias em experiências que as pessoas realmente querem jogar. Sou apaixonado por jogos, e foi jogando que aprendi a enxergar o que faz uma mecânica ser divertida, um sistema ser claro e uma experiência ser memorável. Hoje, levo esse olhar de jogador para dentro do código. Aqui, você vai encontrar projetos que refletem minha paixão por criar experiências interativas, desde jogos independentes até sistemas complexos.`,
      specialties: {
        title: 'FERRAMENTAS',
        subtitle: 'Stack Tecnológico',
        desc: 'Tecnologias que uso no dia a dia para construir, testar e publicar jogos e sistemas interativos.',
        items: ['Unity 3D/2D', 'C#', 'Godot', 'Mobile', 'Game Design', 'VR / OpenXR', 'Git & GitHub', 'Firebase', 'Photon Networking', 'WebGL']
      },
      journey: {
        label: 'MINHA JORNADA',
        title: 'Atuação Atual',
        items: [
          {
            role: 'Residência em Desenvolvimento de Jogos',
            org: 'CEPEDI · Projeto RESTIC 56',
            desc: 'Desenvolvimento e produção de games em ambiente estruturado, com foco Programação de Jogos 2D e 3D, Programação para Realidade Aumentada (AR) e Virtual (VR), Dispositivos Móveis (Mobile), Qualidade e Testes, Game Design, Roteiro e Ilustração.'
          },
          {
            role: 'Engenharia de Software',
            org: 'Estácio · desde 2025',
            desc: 'Bacharelado em andamento, com base sólida em lógica, arquitetura e boas práticas.'
          }
        ]
      }
    },
    // Página Contato
    contact: {
      title: 'Contato',
      intro: 'Tem alguma proposta, dúvida ou quer trocar ideia sobre games? Mande uma mensagem diretamente por aqui!',
      form: {
        nameLabel: 'Seu Nome',
        namePlaceholder: 'Como devo te chamar?',
        emailLabel: 'Seu E-mail',
        emailPlaceholder: 'seu@email.com',
        messageLabel: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
        submitBtn: 'Enviar Mensagem'
      },
      links: {
        email: 'E-mail',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        itch: 'Itch.io'
      }
    },
    // Footer
    footer: 'Projetado com paixão e Three.js por Keven Cândido.',
    // Language switcher
    langSwitcher: {
      current: 'PT-BR',
      other: 'EN'
    },
    // Carousel
    carousel: {
      badge: '📷 {count} fotos'
    },
    // Contact Form Messages
    contactForm: {
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso! Obrigado pelo contato.',
      error: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.',
      connectionError: 'Erro de conexão. Verifique sua internet.'
    }
  },
  'en': {
    // Navigation
    nav: {
      jogo: '↑ Game',
      projetos: 'Projects',
      sobre: 'About',
      contato: 'Contact'
    },
    // Hero / Game screen
    hero: {
      downBtn: 'Explore Portfolio ↓'
    },
    // Game
    game: {
      start: 'START',
      again: 'AGAIN'
    },
    // Projects Page
    projects: {
      title: 'Featured Projects',
      more: 'View project page'
    },
    // About Page
    about: {
      title: 'About Me',
      kicker: 'Who am I 👋',
      bio: `Hi! I'm <strong>Keven Christian Alves Cândido</strong>, a game developer, mainly with Unity and C#, and <strong>software engineer</strong> in training. I'm passionate about turning ideas into experiences people actually want to play. I love games, and it was through playing that I learned what makes a mechanic fun, a system clear, and an experience memorable. Today, I bring that player's perspective into my code. Here, you'll find projects reflecting my passion for creating interactive experiences, from indie games to complex systems.`,
      specialties: {
        title: 'TOOLS',
        subtitle: 'Tech Stack',
        desc: 'Technologies I use daily to build, test, and publish games and interactive systems.',
        items: ['Unity 3D/2D', 'C#', 'Godot', 'Mobile', 'Game Design', 'VR / OpenXR', 'Git & GitHub', 'Firebase', 'Photon Networking', 'WebGL']
      },
      journey: {
        label: 'MY JOURNEY',
        title: 'Current Work',
        items: [
          {
            role: 'Game Development Residency',
            org: 'CEPEDI · Project RESTIC 56',
            desc: 'Game development and production in a structured environment, focusing on 2D/3D Game Programming, Augmented Reality (AR) and Virtual Reality (VR) Programming, Mobile Devices, Quality & Testing, Game Design, Scriptwriting, and Illustration.'
          },
          {
            role: 'Software Engineering',
            org: 'Estácio · since 2025',
            desc: 'Bachelor\'s degree in progress, with a solid foundation in logic, architecture, and best practices.'
          }
        ]
      }
    },
    // Contact Page
    contact: {
      title: 'Contact',
      intro: 'Have a proposal, question, or want to chat about games? Send a message right here!',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'What should I call you?',
        emailLabel: 'Your Email',
        emailPlaceholder: 'your@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Write your message here...',
        submitBtn: 'Send Message'
      },
      links: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        itch: 'Itch.io'
      }
    },
    // Footer
    footer: 'Crafted with passion and Three.js by Keven Cândido.',
    // Language switcher
    langSwitcher: {
      current: 'EN',
      other: 'PT-BR'
    },
    // Carousel
    carousel: {
      badge: '📷 {count} photos'
    },
    // Contact Form Messages
    contactForm: {
      sending: 'Sending...',
      success: 'Message sent successfully! Thanks for reaching out.',
      error: 'An error occurred while sending. Please try again later.',
      connectionError: 'Connection error. Check your internet.'
    }
  }
};

export function getCurrentLang() {
  return currentLang;
}

export function setLang(lang) {
  if (translations[lang]) {
    currentLang = lang;
    document.documentElement.lang = lang;
    return true;
  }
  return false;
}

export function t(key) {
  const keys = key.split('.');
  let result = translations[currentLang];
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key; // fallback to key if not found
    }
  }
  return result;
}

// Initialize from localStorage or default to pt-BR
export function initI18n() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && translations[saved]) {
    currentLang = saved;
    document.documentElement.lang = saved;
  }
  return currentLang;
}

export function initLangSwitcher() {
  const btnPt = document.getElementById('lang-pt');
  const btnEn = document.getElementById('lang-en');
  if (!btnPt || !btnEn) return;

  const updateButtons = () => {
    if (currentLang === 'pt-BR') {
      btnPt.classList.add('active');
      btnPt.setAttribute('aria-pressed', 'true');
      btnEn.classList.remove('active');
      btnEn.setAttribute('aria-pressed', 'false');
    } else {
      btnEn.classList.add('active');
      btnEn.setAttribute('aria-pressed', 'true');
      btnPt.classList.remove('active');
      btnPt.setAttribute('aria-pressed', 'false');
    }
  };

  const switchLang = (lang) => {
    if (lang === currentLang) return;
    setLang(lang);
    localStorage.setItem('portfolio-lang', lang);
    updateButtons();
    // Rebuild site with new language
    import('./build.js').then(({ buildSite }) => {
      buildSite();
      // Dispatch event for other modules to re-initialize
      window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    });
  };

  btnPt.addEventListener('click', () => switchLang('pt-BR'));
  btnEn.addEventListener('click', () => switchLang('en'));

  updateButtons();
}