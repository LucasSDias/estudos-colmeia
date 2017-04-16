var numAtualAbelhas; // criando uma variável

numAtualAbelhas = 0; // preenchendo uma variável

function gravarNumInicialAbelhas() {
     numAtualAbelhas = parseInt(document.getElementById("numInicialAbelhas").value);
}

function exibirAbelhas() {
    document.getElementById("spanNumAtualAbelhas").innerText = numAtualAbelhas;
}

function iniciarContagem() {
    setInterval (parirAbelhas, 1000)}

function parirAbelhas(){
    numAtualAbelhas = numAtualAbelhas + 1;
}

