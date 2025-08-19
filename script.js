document.addEventListener("DOMContentLoaded", () => {
    // Botões "Agende Agora"
    const btnAgendar = document.querySelectorAll(".btn-agendar");
    btnAgendar.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Obrigado! Entraremos em contato para seu agendamento.");
        });
    });

    // Formulário de contato
    const formContato = document.getElementById("formContato");
    if(formContato){
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formContato.reset();
        });
    }

    // Formulário de agendamento
    const formAgendamento = document.getElementById("formAgendamento");
    if(formAgendamento){
        formAgendamento.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Agendamento registrado! Entraremos em contato.");
            formAgendamento.reset();
        });
    }
});
