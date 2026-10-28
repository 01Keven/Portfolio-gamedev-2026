## Estrutura

```
index.html              só a casca: links de CSS, canvas e <script type="module">
css/
  base.css              fundo, hero, botão principal
  layout.css            menu, containers, tipografia, painéis, rodapé
  cards.css             cards de projeto, carrossel, tecnologias, tags
  contact.css           formulário e botões de contato
  mascot.css            camada do mascote
  animations.css        reveal + keyframes globais
  about.css             seção Sobre
js/
  main.js               ponto de entrada + loop principal
  config/
    game.js             CONFIG do jogo 2D (tamanho do mapa, bandeiras, centro) e árvores
    zombies.js          parâmetros e lista de nomes dos zumbis
    assets.js           caminhos de TODAS as imagens
  core/
    state.js            canvas do jogo, player, state, ui, hooks
    runtime.js          clock e reducedMotion
  game/                 jogo 2D que aparece no monitor
    game.js             loop do jogo (movimento, colisão, desenho)
    world.js            árvores, bandeiras, centro, partículas, câmera do mapa
    zombies.js          spawn / perseguição / morte dos zumbis
    hud.js              nome, dica, conquista
    character.js        desenho do personagem (jogo + mascote)
  scene/                cena 3D
    renderer.js         renderer, scene, camera, resize
    lights.js           luzes
    room.js             parede, chão, mesa, janela, quadro
    decor.js            estante, luminária, caneca, partículas
    monitor.js          monitor + textura do jogo + logo
    controller.js       controle e mãos
    input.js            clique na tela 3D -> clique no mapa
    cameraRig.js        paralaxe e zoom da câmera
    helpers.js          box() e texLoader
  mascot/mascot.js      mascote que pula para a página
  site/                 landing page
    build.js            monta menu e seções
    navigation.js       entrar no site / voltar ao jogo / rolagem
    carousel.js         carrossel dos cards
    contactForm.js      envio do formulário (Formspree)
    data/projects.js    ← adicione/edite seus projetos aqui
    data/links.js       links externos
    components/projectCard.js
    pages/              projects.js, about.js, contact.js, index.js (registro)
  utils/dom.js          esc()
assets/images/          logo, personagem, foto do Sobre e imagens dos projetos
```
