const faqs = document.querySelectorAll(".perguntas-frequentes-questoes");

faqs.forEach ((pfq) => {
    pfq.addEventListener("click", () => {
        pfq.classList.toggle("active");
    });
});