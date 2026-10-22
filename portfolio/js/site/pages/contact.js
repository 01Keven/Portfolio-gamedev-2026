/* Página: Contato */
import { ITCH } from '../data/links.js';

export const contactPage = {
  title: "Contato",
  html: () => `
      <div class="contact-container reveal">
        <p style="text-align: center; margin-bottom: 24px; color: #cbd5e1;">Tem alguma proposta, dúvida ou quer trocar ideia sobre games? Mande uma mensagem diretamente por aqui!</p>
        
        <!-- Formulário funcional integrado com Formspree (Substitua f/seu-form-id pelo seu endpoint gratuito do Formspree) -->
        <form class="contact-form" id="contactForm" action="https://formspree.io/f/xeaeyrpp" method="POST">
          <div class="form-group">
            <label for="name">Seu Nome</label>
            <input type="text" id="name" name="name" required placeholder="Como devo te chamar?">
          </div>
          
          <div class="form-group">
            <label for="email">Seu E-mail</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com">
          </div>
          
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message" required placeholder="Escreva sua mensagem aqui..."></textarea>
          </div>
          
          <button type="submit" class="form-submit-btn" id="submitBtn">Enviar Mensagem</button>
          <div id="form-status"></div>
        </form>

        <!-- Botões de Contato Compactos -->
        <div class="compact-links">
          <a class="compact-btn" href="mailto:kevenchristiancode@gmail.com">E-mail</a>
          <a class="compact-btn" href="https://www.linkedin.com/in/keven-christian-649576266" target="_blank" rel="noopener">LinkedIn</a>
          <a class="compact-btn" href="https://github.com/01Keven" target="_blank" rel="noopener">GitHub</a>
          <a class="compact-btn" href="${ITCH}" target="_blank" rel="noopener">Itch.io</a>
        </div>
      </div>
    `
};
