// script.js

document.addEventListener("DOMContentLoaded", () => {

    // Login simulado
    const formLogin = document.getElementById("formLogin");
    if(formLogin){
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            // Usuário e senha de exemplo
            if(email === "admin@estetica.com" && senha === "123456"){
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("Email ou senha incorretos.");
            }
        });
    }

    // Agendamento simulado
    const formAgendamento = document.getElementById("formAgendamento");
    if(formAgendamento){
        formAgendamento.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Agendamento recebido! Entraremos em contato.");
            formAgendamento.reset();
        });
    }

    // Contato simulado
    const formContato = document.getElementById("formContato");
    if(formContato){
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formContato.reset();
        });
    }
});
