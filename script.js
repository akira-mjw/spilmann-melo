document.addEventListener("DOMContentLoaded", () => {
  // --- LOGIN ---
  const loginForm = document.querySelector("form[action='#'][method='post']:has(input[name='email'], input[name='senha'])");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector("input[name='email']").value.trim();
      const senha = loginForm.querySelector("input[name='senha']").value.trim();

      if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
      }

      // Aqui você pode integrar com um backend futuramente
      alert("Login realizado com sucesso!");
    });
  }

  // --- CADASTRO ---
  const cadastroForm = document.querySelector("form[action='#'][method='post']:has(input[name='confirmar_senha'])");
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = cadastroForm.querySelector("input[name='nome']").value.trim();
      const email = cadastroForm.querySelector("input[name='email']").value.trim();
      const telefone = cadastroForm.querySelector("input[name='telefone']").value.trim();
      const senha = cadastroForm.querySelector("input[name='senha']").value.trim();
      const confirmarSenha = cadastroForm.querySelector("input[name='confirmar_senha']").value.trim();

      if (!nome || !email || !telefone || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
      }

      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      cadastroForm.reset();
    });
  }

  // Função auxiliar para validar e-mail
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
