/* Envio do formulário de contato via Formspree (AJAX) */
export function initContactForm() {
  document.addEventListener("submit", async function(e) {
    if (e.target && e.target.id === "contactForm") {
      e.preventDefault();
      const form = e.target;
      const status = document.getElementById("form-status");
      const btn = document.getElementById("submitBtn");
      
      const data = new FormData(form);
      btn.textContent = "Enviando...";
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'json' }
        });
        
        if (response.ok) {
          status.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
          status.className = "success";
          form.reset();
        } else {
          status.textContent = "Ocorreu um erro ao enviar. Tente novamente mais tarde.";
          status.className = "error";
        }
      } catch (error) {
        status.textContent = "Erro de conexão. Verifique sua internet.";
        status.className = "error";
      } finally {
        btn.textContent = "Enviar Mensagem";
        btn.disabled = false;
      }
    }
  });
}
