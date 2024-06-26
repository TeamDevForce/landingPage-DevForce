const faqs = document.querySelectorAll(".perguntas-frequentes-questoes");

faqs.forEach ((pfq) => {
    pfq.addEventListener("click", () => {
        pfq.classList.toggle("active");
    });
    
});function enviarMensagem() {

    var mensagem = document.getElementById("inputMensagem").value;

    // Formate a mensagem para a URL do WhatsApp
    var mensagemFormatada = encodeURIComponent(mensagem);

    var link = "https://wa.me/5575981477952?text=" + mensagem;

    // Abra o aplicativo do WhatsApp
    window.open(link, "_blank");

}

function enviarEmail() {

    var mensagem = document.getElementById("inputMensagem").value;

    // Formate o link "mailto" com os parâmetros do e-mail
    var linkEmail = "mailto:teamdevforce@gmail.com?subject=" + encodeURIComponent("Mentoria DevForce") + "&body=" + encodeURIComponent(mensagem);

    // Abra o link "mailto" em outra aba
    window.open(linkEmail, "_blank");
}
function comprarMentoria() {
    var link = "https://loja.infinitepay.io/marcelosenna/tfu6817-mentoria-devforce";

    window.open(link, "_blank");
}

window.addEventListener("scroll", function(){
    var header = document.querySelector('#nav-bar')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

ScrollReveal().reveal('.principal-sobre-nos', {
    origin: 'left',
    duration: 1700,
    distance: '20%'

});

ScrollReveal().reveal('#nav-bar', {
    origin: 'left',
    duration: 1500,
    distance: '20%'
});

ScrollReveal().reveal('.boas-vindas', {
    origin: 'left',
    duration: 1500,
    distance: '20%'
});

ScrollReveal().reveal('.sobre-nos', {
    origin: 'left',
    duration: 1500,
    distance: '20%'
});

ScrollReveal().reveal('.principal-nossos-diferenciais, h2, p', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
});

ScrollReveal().reveal('.publico-alvo', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
});

ScrollReveal().reveal('.nossos-profissionais', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
});

ScrollReveal().reveal('.principal-produto-preco', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
});

ScrollReveal().reveal('.perguntas-frequentes', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
});

$(document).ready(function() {
    $('#botão_mobile').on('click', function() {
        $('#menu_mobile').toggleClass('active')
        $('#botão_mobile').find('i').toggleClass('fa-x')
    })
})
