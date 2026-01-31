// Menu do hamburger
const hamburger = document.querySelector(".hamburger");
const navegacao = document.querySelector(".navegacao");
hamburger.addEventListener("click", () => navegacao.classList.toggle("active"));

const searchbnt = document.getElementById('search-btn');
const barraBusca = document.getElementById('barra-de-busca');
const input = document.getElementById('pesquisar');

searchbnt.addEventListener('click', () => {
    barraBusca.classList.toggle('active');

    if (barraBusca.classList.contains('active')) {
        input.focus();
    }
});

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