document.addEventListener("DOMContentLoaded", () => {

    // Botões "Agende Agora"
    const btnAgendar = document.querySelectorAll(".btn-agendar");
    btnAgendar.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Obrigado! Vamos entrar em contato para seu agendamento.");
        });
    });

    // Formulário de contato (se existir)
    const formContato = document.getElementById("formContato");
    if(formContato){
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formContato.reset();
        });
    }

    // Formulário de agendamento (se existir)
    const formAgendamento = document.getElementById("formAgendamento");
    if(formAgendamento){
        formAgendamento.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Agendamento registrado! Entraremos em contato.");
            formAgendamento.reset();
        });
    }

    // Formulário de login (se existir)
    const formLogin = document.getElementById("formLogin");
    if(formLogin){
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login efetuado com sucesso!");
            formLogin.reset();
        });
    }
});
