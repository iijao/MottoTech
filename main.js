const btnMobile = document.querySelector('#btn-mobile');
const headerMenu = document.querySelector('.header-menu');
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href

    if(url.includes(href)){
        link.classList.add('ativo-bottom');
    }
}
links.forEach(ativarLink);

function toggleMenu (){
    headerMenu.classList.toggle("ativo");
}

btnMobile.addEventListener('click', toggleMenu);


const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(e){
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);