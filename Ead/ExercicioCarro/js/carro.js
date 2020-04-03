var rodizio = "";

rodizio = prompt("Dia da semana do seu rodizio", "Digita o final da sua placa");

if (rodizio <= 3) {
  alert("Segunda-Feira");
} else {
    if (rodizio > 9) {
        alert("Digite certo o final de sua placa");
      }else{
  if (rodizio >= 6) {
    alert("Quarta-Feira");
  } else {
      alert("Sexta-Feira");
    }
  }
}
