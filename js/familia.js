const btnAbrir = document.querySelector(".fale-gente");
const overlay = document.querySelector(".contato-overlay");
const btnFechar = document.querySelector(".fechar");

btnAbrir.addEventListener("click", () => {
    overlay.classList.add("ativo");
});

btnFechar.addEventListener("click", () => {
    overlay.classList.remove("ativo");
});
