var numAtualAbelhas; // criando uma variável

numAtualAbelhas = 0; // preenchendo uma variável

var gravarNumInicialAbelhas = function() {
     numAtualAbelhas = document.getElementById("numInicialAbelhas").value;
}

var exibirAbelhas = function() {
    document.getElementById("spanNumAtualAbelhas").innerText = numAtualAbelhas;
}