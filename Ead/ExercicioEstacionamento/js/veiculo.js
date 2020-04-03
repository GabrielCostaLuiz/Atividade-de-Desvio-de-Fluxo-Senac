var veiculo = "";
var horas = "";
var Carro = "c";
var Ônibus = "o";
var Caminhão = "t";
var valor = "";
var valorcarro = 2.0;
var valorônibus = 3.0;
var valorcaminhão = 4.0;
valorcarro = parseFloat(valorcarro);
valorônibus = parseFloat(valorônibus);
valorcaminhão = parseFloat(valorcaminhão);

veiculo = prompt("Insira seu veiculo");

if (veiculo == Carro) {
  horas = prompt("Quantas horas seu carro ficou estacionado ?");
  valor = alert("O valor do estacionamento ficou: R$" + horas * valorcarro);
} else {
  if (veiculo == Ônibus) {
    horas = prompt("Quantas horas seu ônibus ficou estacionado ?");
    valor = alert("O valor do estacionamento ficou: R$" + horas * valorônibus);
  } else {
    if (veiculo == Caminhão) {
      horas = prompt("Quantas horas seu caminhão ficou estacionado ?");
      valor = alert(
        "O valor do estacionamento ficou: R$" + horas * valorcaminhão
      );
    }
  }
}
