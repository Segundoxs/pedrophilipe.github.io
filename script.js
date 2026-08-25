const SaibaMais = document.getElementById("botao-sobre");

const Novotexto = document.getElementById("Novo-texto");

SaibaMais.addEventListener("click",function(){
    const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent =
    "Me faça um pix.";

    Novotexto.appendChild(novoParagrafo);
})
