/* Envio do formulário de contato via Formspree (AJAX) */
import { t } from './i18n.js';

export function initContactForm() {
  document.addEventListener("submit", async function(e) {
    if (e.target && e.target.id === "contactForm") {
      e.preventDefault();
      const form = e.target;
      const status = document.getElementById("form-status");
      const btn = document.getElementById("submitBtn");
      
      const data = new FormData(form);
      btn.textContent = t('contactForm.sending');
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'json' }
        });
        
        if (response.ok) {
          status.textContent = t('contactForm.success');
          status.className = "success";
          form.reset();
        } else {
          status.textContent = t('contactForm.error');
          status.className = "error";
        }
      } catch (error) {
        status.textContent = t('contactForm.connectionError');
        status.className = "error";
      } finally {
        btn.textContent = t('contact.form.submitBtn');
        btn.disabled = false;
      }
    }
  });
}
