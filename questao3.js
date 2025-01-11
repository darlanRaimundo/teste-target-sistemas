const data = require("./dados.json");

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
  let valores = data
    .map((dia) => Number(dia.valor))
    .filter((valor) => valor !== 0);

  let soma = Number(
    valores.reduce((total, valorAtual) => total + valorAtual, 0)
  );
  return (soma / data.length).toFixed(2);
}

console.log("Menor valor de faturamento:", menorValorFaturamento(data));
console.log("Maior valor de faturamento:", maiorValorFaturamento(data));
console.log("Média mensal:", mediaMensal(data));

if (data.filter((dia) => dia.valor > mediaMensal(data)).length > 0) {
  console.log(
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:",
    data.filter((dia) => dia.valor > mediaMensal(data)).length
  );
}
