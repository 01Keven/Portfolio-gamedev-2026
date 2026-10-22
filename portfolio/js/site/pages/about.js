/* Página: Sobre (os estilos ficam em css/about.css) */
import { ASSETS } from '../../config/assets.js';

export const aboutPage = {
  title: "Sobre Mim",
  html: () => `
      <section class="about-layout">
        <div class="about-hero panel reveal">
          <div class="about-portrait">
            <img class="about-photo" src="${ASSETS.aboutPhoto}" alt="Foto de Keven Christian Alves Cândido" loading="lazy" />
          </div>
          <div class="about-intro">
            <span class="about-kicker">Quem sou eu 👋</span>
            <p class="about-bio">
              Sou <strong>Keven Christian Alves Cândido</strong>, desenvolvedor de jogos focado na criação
              de experiências imersivas, sistemas interativos e mecânicas
              envolventes. Trabalho principalmente com Unity e C#, além
              de utilizar Godot e ferramentas modernas de controle
              de versão.
            </p>
            <div class="about-specialties">
              <div class="about-specialty">
                <span class="about-specialty-number">01</span>
                <div>
                  <strong>Gameplay & Sistemas</strong>
                  <small>Mecânicas e experiências interativas</small>
                </div>
              </div>
              <div class="about-specialty">
                <span class="about-specialty-number">02</span>
                <div>
                  <strong>Multiplataforma</strong>
                  <small>Desktop, Mobile, WebGL e VR</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-columns">
          <article class="about-panel panel reveal">
            <div class="about-panel-heading">
              <span class="about-panel-icon">&lt;/&gt;</span>
              <div>
                <span class="about-panel-label">FERRAMENTAS</span>
                <h3>Stack Tecnológico</h3>
              </div>
            </div>
            <p class="about-panel-description">
              Tecnologias e ferramentas utilizadas no desenvolvimento de jogos e sistemas interativos.
            </p>
            <div class="about-tech-list">
              ${["Unity 3D/2D", "C#", "Godot", "C++", "VR / OpenXR", "Git & GitHub", "Firebase", "Photon Networking", "WebGL"].map((t, i) =>
                `<span class="about-tech" style="--i:${i}">${t}</span>`
              ).join("")}
            </div>
          </article>
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
                  <small>Foco na criação e produção de games.</small>
                </div>
              </div>
              <div class="about-journey-item">
                <span class="about-journey-marker"></span>
                <div class="about-journey-content">
                  <strong>Engenharia de Software</strong>
                  <p>Estácio</p>
                  <small>Bacharelado em andamento.</small>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    `
};
