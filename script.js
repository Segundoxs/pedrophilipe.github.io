const SaibaMais = document.getElementById("botao-sobre");
const Novotexto = document.getElementById("Novo-texto");
let mostrandoMais = false;

SaibaMais.addEventListener("click", function(){
    if (mostrandoMais === false) {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = "Estou sempre aberto a novas oportunidades e aprendizados. Entre em contato!";
        Novotexto.appendChild(novoParagrafo);
        SaibaMais.textContent = "Ver menos";
        mostrandoMais = true;
    } else {
        Novotexto.innerHTML = "";
        SaibaMais.textContent = "Ver mais";
        mostrandoMais = false;
    }
});

const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

mensagem.addEventListener("input", function(){
    contador.textContent = mensagem.value.length + " caracteres";
});

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Formulário enviado!");
    console.log("Nome:", nome.value);
    console.log("E-mail:", email.value);
    console.log("Mensagem:", mensagem.value);
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    mensagemSucesso.style.display = "block";
    formulario.reset();
    contador.textContent = "0 caracteres";
});
