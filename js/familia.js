const btnAbrir = document.querySelector(".fale-gente");
const overlay = document.querySelector(".contato-overlay");
const btnFechar = document.querySelector(".fechar");

// abrir
btnAbrir.addEventListener("click", () => {
    overlay.classList.add("ativo");
});

// fechar SOMENTE no X
btnFechar.addEventListener("click", () => {
    overlay.classList.remove("ativo");
});
