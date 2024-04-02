$(document).ready(function() {
    $('#botão_mobile').on('click', function() {
        $('#menu_mobile').toggleClass('active')
        $('#botão_mobile').find('i').toggleClass('fa-x')
    })
})

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
