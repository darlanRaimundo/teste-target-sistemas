const readline = require("node:readline");
const data = require("./dados.json");

// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// let indice = 13;
// let soma = 0;
// let k = 0;

// while (k < indice) {
//   k = k + 1;
//   soma = soma + k;
// }

// console.log("soma: ", soma);

// -------------------------------------------------------------------------------------

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Digite o número: ", (numero) => {
//   let fibonacci = [0, 1];

//   while (fibonacci[fibonacci.length - 1] < numero) {
//     let proximoNumero =
//       fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     fibonacci.push(proximoNumero);
//   }

//   if (fibonacci.includes(Number(numero))) {
//     console.log(`O número ${numero} pertence à sequência Fibonacci.`);
//     console.log("Sequência Fibonacci até o número informado:", fibonacci);
//     return true;
//   } else {
//     console.log(`O número ${numero} não pertence à sequência Fibonacci.`);
//     console.log("Sequência Fibonacci até o número informado:", fibonacci);
//     return false;
//   }
// });

// -------------------------------------------------------------------------------------

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// console.log(data);

function menorValorFaturamento(data) {
  let menorValor = Number(data[0].valor);
  for (let i = 1; i < data.length; i++) {
    if (Number(data[i].valor) < menorValor && Number(data[i].valor) !== 0) {
      menorValor = Number(data[i].valor);
    }
  }
  return menorValor;
}

function maiorValorFaturamento(data) {
  let maiorValor = Number(data[0].valor);
  for (let i = 1; i < data.length; i++) {
    if (
      Number(data[i].valor) > maiorValor &&
      Number(Number(data[i].valor)) !== 0
    ) {
      maiorValor = Number(data[i].valor);
    }
  }
  return maiorValor;
}

function mediaMensal(data) {
  let soma = data.reduce((acc, curr) => acc + curr, 0);
  return soma / data.length;
}

console.log("Menor valor de faturamento:", menorValorFaturamento(data));
console.log("Maior valor de faturamento:", maiorValorFaturamento(data));
console.log("Média mensal:", mediaMensal(data));

if (data.filter((valor) => valor > mediaMensal(data)).length > 0) {
  console.log(
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:",
    data.filter((valor) => valor > mediaMensal(data)).length
  );
}
