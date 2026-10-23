/* Página: Sobre (os estilos ficam em css/about.css) */
import { ASSETS } from '../../config/assets.js';

export const aboutPage = {
  title: "Sobre Mim",
  html: () => `
      <section class="about-layout">

        <!-- HERO -->
        <div class="about-hero panel reveal">
          <div class="about-portrait">
            <img class="about-photo" src="${ASSETS.aboutPhoto}" alt="Foto de Keven Cândido" loading="lazy" />
          </div>
          <div class="about-intro">
            <span class="about-kicker">Quem sou eu 👋</span>
            <p class="about-bio">
              Olá! Eu sou <strong>Keven Christian Alves Cândido</strong>, Game Developer e <strong>Unity & C#</strong> enthusiast, apaixonado por criar experiências interativas que encantam e engajam. Sou
              apaixonado por transformar ideias em experiências que as pessoas realmente querem jogar.
            </p>
            <p class="about-bio">
              Também trabalho com
              <strong>Godot (C#)</strong>, o que me dá flexibilidade para escolher a melhor engine para
              cada ideia, sem perder a profundidade na ferramenta que domino.
            </p>

            <div class="about-specialties">
              <div class="about-specialty">
                <span class="about-specialty-number">01</span>
                <div>
                  <strong>Gameplay & Sistemas</strong>
                  <small>Mecânicas, controles e sistemas interativos com Unity e C#</small>
                </div>
              </div>
              <div class="about-specialty">
                <span class="about-specialty-number">02</span>
                <div>
                  <strong>Multiplataforma</strong>
                  <small>Desktop, Mobile, WebGL e VR</small>
                </div>
              </div>
              <div class="about-specialty">
                <span class="about-specialty-number">03</span>
                <div>
                  <strong>Multiplayer & Online</strong>
                  <small>Networking com Photon e serviços com Firebase</small>
                </div>
              </div>
              <div class="about-specialty">
                <span class="about-specialty-number">04</span>
                <div>
                  <strong>Do protótipo ao lançamento</strong>
                  <small>Jogos publicados no itch.io</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-columns">

          <!-- STACK -->
          <article class="about-panel panel reveal">
            <div class="about-panel-heading">
              <span class="about-panel-icon">&lt;/&gt;</span>
              <div>
                <span class="about-panel-label">FERRAMENTAS</span>
                <h3>Stack Tecnológico</h3>
              </div>
            </div>
            <p class="about-panel-description">
              Tecnologias que uso no dia a dia para construir, testar e publicar jogos e sistemas interativos.
            </p>
            <div class="about-tech-list">
              ${["Unity 3D/2D", "C#", "Godot", "Mobile", "Game Design", "VR / OpenXR", "Git & GitHub", "Firebase", "Photon Networking", "WebGL"].map((t, i) =>
                `<span class="about-tech" style="--i:${i}">${t}</span>`
              ).join("")}
            </div>
          </article>

          <!-- JORNADA -->
          <article class="about-panel panel reveal">
            <div class="about-panel-heading">
              <span class="about-panel-icon">↗</span>
              <div>
                <span class="about-panel-label">MINHA JORNADA</span>
                <h3>Atuação Atual</h3>
              </div>
            </div>
            <div class="about-journey">
              <div class="about-journey-item">
                <span class="about-journey-marker"></span>
                <div class="about-journey-content">
                  <strong>Residência em Desenvolvimento de Jogos</strong>
                  <p>CEPEDI · Projeto RESTIC 56</p>
                  <small>Desenvolvimento e produção de games em ambiente estruturado, com foco em Programação de Jogos 2D e 3D, Programação para Realidade Aumentada (AR) e Virtual (VR), Dispositivos Móveis (Mobile),  Qualidade e Testes, além de Game Design, Roteiro e Ilustração.</small>
                </div>
              </div>
              
              <div class="about-journey-item">
                <span class="about-journey-marker"></span>
                <div class="about-journey-content">
                  <strong>Engenharia de Software</strong>
                  <p>Estácio · desde 2025</p>
                  <small>Bacharelado em andamento, com base sólida em lógica, arquitetura e boas práticas.</small>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>
    `
};