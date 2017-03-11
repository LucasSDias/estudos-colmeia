var estiloTitulo = '.....................';
var numAbelhas = 0;

import * as readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

var exibirBoasVindas = function (a) {console.log(a)};
var exibirPergunta = (answer: string) => {
    numAbelhas = parseInt(answer);
    incrementaNumAbelhas();

    rl.question('digite qualquer caractere para exibir o número de abelhas: ', function(answer) {
        console.log('abelhas atuais na colmeia: ' + numAbelhas);
        rl.close();
    });
};
var incrementaNumAbelhas = () => {
    setInterval(() => {
        numAbelhas++;
    }, 1000);
}

exibirBoasVindas(estiloTitulo);
exibirBoasVindas('Simulador de colméia');
exibirBoasVindas(estiloTitulo);
exibirBoasVindas('');
exibirBoasVindas('');
exibirBoasVindas('Seja um zangão, um soldado ou uma colheitadeira, viva o mundo da colméia!');

rl.question('Insira o número inicial de abelhas: ', exibirPergunta);