const SaibaMais = document.getElementById("botao-sobre");

const Novotexto = document.getElementById("Novo-texto");

SaibaMais.addEventListener("click",function(){
    const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent =
    "Me faça um pix.";

    Novotexto.appendChild(novoParagrafo);
})
const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

formulario.addEventListener("submit",function(event){

    console.log("Formulário enviado!");
});

formulario.addEventListener("submit",function(event){

    event.preventDefault();
    
    console.log("Nome:",nome.value);
    console.log("E-mail:",email.value);
});
const mensagemSucesso = 
        document.getElementById("mensagem-sucesso");
mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

const contador = document.getElementById("contador");

mensagem.addEventListener("input",function(){
    contador.textContent = mensagem.value.length + "caracteres";
});

let mostrandoMais = false;

SaibaMais.addEventListener("click", function(){
    if (mostrandoMais === false) {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = 
        "Me faça um pix.";

        Novotexto.appendChild(novoParagrafo);

        SaibaMais.textContent = "Ver menos";
        mostrandoMais = true;

    } else{
        Novotexto.innerHTML = "";
        SaibaMais.textContent = "Ver mais";
        mostrandoMais = false;
    }
});
