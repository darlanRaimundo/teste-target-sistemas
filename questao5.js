const readline = require("node:readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a string: ", (string) => {
  let stringInvertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  console.log(`String invertida: ${stringInvertida}`);

  rl.close();
});
