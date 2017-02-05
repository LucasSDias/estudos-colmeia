var estiloTitulo = '.....................';
var numAbelhas = 0;

import * as fs from "fs";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o número inicial de abelhas: ', (answer) => {
    numAbelhas = answer;
    console.log('Número de abelhas iniciais: ' + numAbelhas);
    rl.close();
});

function exibir(a) {
    console.log(a);
}

exibir(estiloTitulo);
exibir('Simulador de colméia');
exibir(estiloTitulo);
exibir('');
exibir('');
exibir('Seja um zangão, um soldado ou uma colheitadeira, viva o mundo da colméia!');