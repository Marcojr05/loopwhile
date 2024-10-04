let capacidadeMaxima = 50;
let vagasDisponiveis = capacidadeMaxima;

function adicionarClien() {
    let numClientes = Number(document.getElementById("nembClients").value);

    if (isNaN(numClientes) || numClientes <= 0) {
        MessageChannel.textContent = "Por favor, insira um número válido de clientes!";
        return;
    }

    while (vagasDisponiveis > 0 && numClientes <= vagasDisponiveis) {
        vagasDisponiveis -= numClientes;
        document.getElementById("VagaDispon").innerText = vagasDisponiveis;
        break;
    }

    if (vagasDisponiveis <= 0) {
        document.getElementById("avisoMessage").innerText = "Lotado, não há mais vagas disponíveis."
        document.getElementById("adicionarClie").disabled = true;
    }
}

let soma = 0;

function calcularSoma() {
    let valor = document.getElementById("valor").value;

    if (isNaN(valor) || valor.trim() === "") {
    }

    soma += Number(valor);
    document.getElementById("valor").value = "";
    document.getElementById("soma").textContent = "Soma atual: " + soma;
}

function finali() {
    document.getElementById("inserirButton").disabled = true;
}



function progGeo() {
    let inicio = Number(document.getElementById("inicio").value);
    let passo = Number(document.getElementById("passo").value);
    let repeticoes = Number(document.getElementById("repeticoes").value);
    let resultado = [];

    for (let i = 0; i < repeticoes; i++) {
        resultado.push(inicio * Math.pow(passo, i));
    }

    document.getElementById("resposta5").innerText = "Progressão Geométrica: " + resultado.join(", ");
}

function progGeo1() {
    let inicio1 = Number(document.getElementById("inicio1").value);
    let passo1 = Number(document.getElementById("passo1").value);
    let repeticoes1 = Number(document.getElementById("repeticoes1").value);
    let resultado1 = [];
    let i1 = 0;

    while (i1 < repeticoes1) {
        resultado1.push(inicio1 * Math.pow(passo1, i1));
        i1++;
    }

    document.getElementById("resposta6").innerText = "Progressão Geométrica: " + resultado1.join(", ");
}


function progGeo2() {
    let inicio2 = Number(document.getElementById("inicio2").value);
    let passo2 = Number(document.getElementById("passo2").value);
    let repeticoes2 = Number(document.getElementById("repeticoes2").value);
    let resultado2 = [];
    let i2 = 0;

    do {
        resultado2.push(inicio2 * Math.pow(passo2, i2));
        i2++;
    } while (i2 < repeticoes2);

    document.getElementById("resposta7").innerText = "Progressão Geométrica: " + resultado2.join(", ");
}



function progAritFor() {
    let inicio = Number(document.getElementById("inicioFor").value);
    let passo = Number(document.getElementById("passoFor").value);
    let repeticoes = Number(document.getElementById("repeticoesFor").value);
    let resultado = [];

    for (let i = 0; i < repeticoes; i++) {
        resultado.push(inicio + (passo * i));
    }

    document.getElementById("respostaFor").innerText = "Progressão Aritmética: " + resultado.join(", ");
}


function progAritWhile() {
    let inicio = Number(document.getElementById("inicioWhile").value);
    let passo = Number(document.getElementById("passoWhile").value);
    let repeticoes = Number(document.getElementById("repeticoesWhile").value);
    let resultado = [];
    let i = 0;

    while (i < repeticoes) {
        resultado.push(inicio + (passo * i));
        i++;
    }

    document.getElementById("respostaWhile").innerText = "Progressão Aritmética: " + resultado.join(", ");
}

function progAritDoWhile() {
    let inicio = Number(document.getElementById("inicioDoWhile").value);
    let passo = Number(document.getElementById("passoDoWhile").value);
    let repeticoes = Number(document.getElementById("repeticoesDoWhile").value);
    let resultado = [];
    let i = 0;

    do {
        resultado.push(inicio + (passo * i));
        i++;
    } while (i < repeticoes);

    document.getElementById("respostaDoWhile").innerText = "Progressão Aritmética: " + resultado.join(", ");
}