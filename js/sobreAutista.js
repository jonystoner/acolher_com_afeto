let secoes = document.querySelectorAll(".secao1");

secoes.forEach(secao => {
    secao.addEventListener("click", () => {
        secao.classList.toggle("active");
        let painel = secao.nextElementSibling;
        painel.classList.toggle("active");
    });
});
