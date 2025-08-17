// Abrir o formulário de agendamento
function abrirFormulario() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

// Validação simples do formulário
document.getElementById("form-agendamento").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Agendamento realizado com sucesso! Entraremos em contato em breve.");
  this.reset();
});
