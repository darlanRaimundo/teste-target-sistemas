const readline = require("node:readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o número: ", (numero) => {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < numero) {
    let proximoNumero =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximoNumero);
  }

  if (fibonacci.includes(Number(numero))) {
    console.log(`O número ${numero} pertence à sequência Fibonacci.`);
    console.log("Sequência Fibonacci até o número informado:", fibonacci);
    return true;
  } else {
    console.log(`O número ${numero} não pertence à sequência Fibonacci.`);
    console.log("Sequência Fibonacci até o número informado:", fibonacci);
    return false;
  }
});
