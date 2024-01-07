//pergunta ao jogador qual o seu nome em uma janel ade prompt
function perguntar() {
    let NOME = window.prompt("Qual seu nome? ");
    document.getElementById('p1').innerHTML = (`<strong>BEM-VINDO A PEDRA, PAPEL E TESOURA, ${NOME.toUpperCase()}</strong>.`);

    if (NOME.length == 0) {
        document.getElementById('p1').innerHTML = `<strong>BEM-VINDO A PEDRA, PAPEL E TESOURA.`
    }
}


//pegando elementos e atribuindo a variaveis
let Ppt = document.getElementById("Pe");
let pPt = document.getElementById("Pa");
let ppT = document.getElementById("Te");

//adicionando eventos DOM a essas variaveis
Ppt.addEventListener("mouseenter", deixar_verde);
Ppt.addEventListener("mouseleave", deixar_preto);

ppT.addEventListener("mouseenter", verde);
ppT.addEventListener("mouseleave", preto);

pPt.addEventListener("mouseenter", Verde);
pPt.addEventListener("mouseleave", Preto);


//funções que mudam a cor das letras nos botões ao passar o mouse
function deixar_verde() {
    Ppt.style.color = 'green';

}

function deixar_preto() {
    Ppt.style.color = 'black';

}

function verde() {
    ppT.style.color = 'green';
}

function preto() {
    ppT.style.color = 'black';

}

function Verde() {
    pPt.style.color = 'green';

}

function Preto() {
    pPt.style.color = 'black';

}

//evento disparado ao clicar no botao TESOURA
ppT.addEventListener('click', function clicar() {
    let imagem = document.getElementById('foto');
    imagem.setAttribute('src', 'img/tesoura.jpg');

    let jogada = document.getElementById('bot');
    let image = document.getElementById('img_bot');

    //definindo jogada do bot
    let NPC = Math.floor(Math.random() * (3));
    let adversario;

    jogada.innerHTML = ('JOGOU');
    switch (NPC) {
        case 0:
            jogada.innerHTML += (' - <strong>🪨 PEDRA 🪨</strong>');
            image.setAttribute('src', 'img/pedra.jpg');
            adversario = "PEDRA";
            break;

        case 1:
            jogada.innerHTML += (' - <strong>📜 PAPEL 📜</strong>');
            image.setAttribute('src', 'img/papel.jpg');
            adversario = "PAPEL";
            break;

        case 2:
            jogada.innerHTML += (' - <strong>✂️ TESOURA ✂️</strong>');
            image.setAttribute('src', 'img/tesoura.jpg');
            adversario = "TESOURA";


    }

    //resultadoS
    let resposta = document.getElementById('res');

    if (ppT.value == "TESOURA ✂️" && adversario == "PEDRA") {
        resposta.innerHTML = ('RESULTADO: VOCÊ PERDEU!!! &#10060');
        resposta.style.color = 'red';

    } else if (ppT.value == "TESOURA ✂️" && adversario == "PAPEL") {
        resposta.innerHTML = ('RESULTADO: VOCÊ GANHOU. PARABÉNS!!! &#9989');
        resposta.style.color = 'green';

    } else if (ppT.value == "TESOURA ✂️" && adversario == "TESOURA") {
        resposta.innerHTML = ('RESULTADO: EMPATE!!! &#10069');
        resposta.style.color = 'gray';

    }
})


//evento disparado ao clicar no botao PAPEL
pPt.addEventListener('click', function clicar() {
    let imagem = document.getElementById('foto');
    imagem.setAttribute('src', 'img/papel.jpg');

    let jogada = document.getElementById('bot');
    let image = document.getElementById('img_bot');

    //definindo jogada do bot
    let NPC = Math.floor(Math.random() * (3));
    let adversario;

    jogada.innerHTML = ('JOGOU');
    switch (NPC) {
        case 0:
            jogada.innerHTML += (' - <strong>🪨 PEDRA 🪨</strong>');
            image.setAttribute('src', 'img/pedra.jpg');
            adversario = "PEDRA";
            break;

        case 1:
            jogada.innerHTML += (' - <strong>📜 PAPEL 📜</strong>');
            image.setAttribute('src', 'img/papel.jpg');
            adversario = "PAPEL";
            break;

        case 2:
            jogada.innerHTML += (' - <strong>✂️ TESOURA ✂️</strong>');
            image.setAttribute('src', 'img/tesoura.jpg');
            adversario = "TESOURA";


    }

    //resultadoS
    let resposta = document.getElementById('res');

    if (pPt.value == "PAPEL 📜" && adversario == "PEDRA") {
        resposta.innerHTML = ('RESULTADO: VOCÊ GANHOU. PARABÉNS!!! &#9989');
        resposta.style.color = 'green';

    } else if (pPt.value == "PAPEL 📜" && adversario == "PAPEL") {
        resposta.innerHTML = ('RESULTADO: EMPATE!!! &#10069');
        resposta.style.color = 'gray';

    } else if (pPt.value == "PAPEL 📜" && adversario == "TESOURA") {
        resposta.innerHTML = ('RESULTADO: VOCÊ PERDEU!!! &#10060');
        resposta.style.color = 'red';

    }
})


//evento disparado ao clicar no botao PEDRA
Ppt.addEventListener("click", function clicar() {
    let imagem = document.getElementById('foto');
    imagem.setAttribute('src', 'img/pedra.jpg');

    let jogada = document.getElementById('bot');
    let image = document.getElementById('img_bot');

    //definindo jogada do bot
    let NPC = Math.floor(Math.random() * (3));
    let adversario;

    jogada.innerHTML = ('JOGOU');
    switch (NPC) {
        case 0:
            jogada.innerHTML += (' - <strong>🪨 PEDRA 🪨</strong>');
            image.setAttribute('src', 'img/pedra.jpg');
            adversario = "PEDRA";
            break;

        case 1:
            jogada.innerHTML += (' - <strong>📜 PAPEL 📜</strong>');
            image.setAttribute('src', 'img/papel.jpg');
            adversario = "PAPEL";
            break;

        case 2:
            jogada.innerHTML += (' - <strong>✂️ TESOURA ✂️</strong>');
            image.setAttribute('src', 'img/tesoura.jpg');
            adversario = "TESOURA";


    }

    //resultadoS
    let resultado = document.getElementById('res');

    if (Ppt.value == "PEDRA 🪨" && adversario == "PEDRA") {
        resultado.innerHTML = ('RESULTADO: EMPATE!!! &#10069');
        resultado.style.color = 'gray';

    } else if (Ppt.value == "PEDRA 🪨" && adversario == "PAPEL") {
        resultado.innerHTML = ('RESULTADO: VOCÊ PERDEU!!! &#10060');
        resultado.style.color = 'red';

    } else if (Ppt.value == "PEDRA 🪨" && adversario == "TESOURA") {
        resultado.innerHTML = ('RESULTADO: VOCÊ GANHOU. PARABÉNS!!! &#9989');
        resultado.style.color = 'green';

    }
})

//pegando o elemento LIMPAR 
let limpar_res = document.getElementById('res');
let limpar_jogada = document.getElementById('bot');

//evento disparado ao clicar no botao LIMPAR
function limpar() {
    let apagar = document.getElementById('foto');
    apagar.setAttribute('src', '');

    let apagar_bot = document.getElementById('img_bot');
    apagar_bot.setAttribute('src', '');

    limpar_jogada.innerHTML = ('JOGADA');

    limpar_res.innerHTML = ('RESULTADO: O resultado aparecerá aqui');
    limpar_res.style.color = 'black';
}

let btn_apagar = document.getElementById('limpar');

//evento de aumentar e diminuir de tamanho adicionado a variavel btn_apagar ao passar o mouse pelo botao LIMPAR
btn_apagar.addEventListener('mouseenter', aumentar);

function aumentar() {
    btn_apagar.style.height = '29px';
    btn_apagar.style.width = '77px';

    btn_apagar.style.position = 'relative';
    btn_apagar.style.left = '145px';

}


btn_apagar.addEventListener('mouseleave', diminuir)

function diminuir() {

    btn_apagar.style.height = '';
    btn_apagar.style.width = '';

    btn_apagar.style.position = 'relative';
    btn_apagar.style.left = '155px';
}
