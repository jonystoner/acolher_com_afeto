// Botão do contato - parte da home
const btnAbrir = document.querySelector(".entre-contato");
const contatoSecao = document.querySelector(".contato-secao");
const btnFechar = document.querySelector(".fechar");

btnAbrir.addEventListener("click", () => {
    contatoSecao.classList.add("ativo");
});

btnFechar.addEventListener("click", () => {
    contatoSecao.classList.remove("ativo");
});