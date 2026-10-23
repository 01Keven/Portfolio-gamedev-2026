/* Página: Contato */
import { ITCH } from '../data/links.js';
import { t } from '../i18n.js';

export const contactPage = {
  titleKey: 'contact.title',
  html: () => {
    const contact = t('contact');
    return `
        <div class="contact-container reveal">
          <p style="text-align: center; margin-bottom: 24px; color: #cbd5e1;">${contact.intro}</p>
          
          <!-- Formulário funcional integrado com Formspree (Substitua f/seu-form-id pelo seu endpoint gratuito do Formspree) -->
          <form class="contact-form" id="contactForm" action="https://formspree.io/f/xeaeyrpp" method="POST">
            <div class="form-group">
              <label for="name">${contact.form.nameLabel}</label>
              <input type="text" id="name" name="name" required placeholder="${contact.form.namePlaceholder}">
            </div>
            
            <div class="form-group">
              <label for="email">${contact.form.emailLabel}</label>
              <input type="email" id="email" name="email" required placeholder="${contact.form.emailPlaceholder}">
            </div>
            
            <div class="form-group">
              <label for="message">${contact.form.messageLabel}</label>
              <textarea id="message" name="message" required placeholder="${contact.form.messagePlaceholder}"></textarea>
            </div>
            
            <button type="submit" class="form-submit-btn" id="submitBtn">${contact.form.submitBtn}</button>
            <div id="form-status"></div>
          </form>

          <!-- Botões de Contato Compactos -->
          <div class="compact-links">
            <a class="compact-btn" href="mailto:kevenchristiancode@gmail.com">${contact.links.email}</a>
            <a class="compact-btn" href="https://www.linkedin.com/in/keven-christian-649576266" target="_blank" rel="noopener">${contact.links.linkedin}</a>
            <a class="compact-btn" href="https://github.com/01Keven" target="_blank" rel="noopener">${contact.links.github}</a>
            <a class="compact-btn" href="${ITCH}" target="_blank" rel="noopener">${contact.links.itch}</a>
          </div>
        </div>
      `
  }
};