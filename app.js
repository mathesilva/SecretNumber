let listaDeNumerosSorteados = [];
let limiteDeTentativa = 10;
let numeroSecreto = gerarNumberAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemIniciar(){ 
        exibirTextoNaTela('h1','Secret Number');
        exibirTextoNaTela('p','Escolha um número entre 1 e 10'); 
    }
    mensagemIniciar()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o secret number com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    

    console.log(chute == numeroSecreto);
}

function gerarNumberAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeTentativa + 1);
    let quantidadaDeElementos =listaDeNumerosSorteados.length;

    if(quantidadaDeElementos == limiteDeTentativa);
        listaDeNumerosSorteados = [];

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumberAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumberAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIniciar();
}
