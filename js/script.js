let capacidadeMaxima = 50;
let vagasDisponiveis = capacidadeMaxima;

function adicionarClien() {
    let numClientes = Number(document.getElementById("nembClients").value);

    if (isNaN(numClientes)|| numClientes <= 0) {
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

            // Verifica se o valor é válido
            if (isNaN(valor) || valor.trim() === "") {
                alert("Por favor, insira um valor numérico válido.");
                return;
            }

            soma += Number(valor);
            document.getElementById("valor").value = "";
            document.getElementById("soma").textContent = "Soma atual: " + soma;
        }

        function finali() {
            document.getElementById("inserirButton").disabled = true;
        }