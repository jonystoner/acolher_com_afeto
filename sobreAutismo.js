
// acordeon
let secao1 = document.getElementsByClassName("secao1");
let i;

for (i = 0; i < secao1.length; i++) {
    secao1[i].addEventListener("click", function () {
        this.classList.toggle("ativado");

        let panel1 = this.nextElementSibling;
        if (panel1.style.display === "block") {
            panel1.style.display = "none";
        } else {
            panel1.style.display = "block";
        }
    });
}