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

// acordeon
let secao1 = document.getElementsByClassName("secao1");
let i;

for (i = 0; i < secao1.length; i++) {
    secao1[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel1 = this.nextElementSibling;
        if (panel1.style.display === "block") {
            panel1.style.display = "none";
        } else {
            panel1.style.display = "block";
        }
    });
}