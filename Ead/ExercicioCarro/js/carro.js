var rodizio = "";

function placa() {
  rodizio = prompt(
    "Dia da semana do seu rodizio",
    "Digita o numero final da sua placa"
  );

  if (rodizio <= 3) {
    alert("Proibido as: Segunda-Feiras");
  } else {
    if (rodizio > 9) {
      alert("Digite certo o numero final de sua placa");
    } else {
      if (rodizio >= 6) {
        alert("Proibido as: Quarta-Feiras");
      } else {
        alert("Proibido as: Sexta-Feiras");
      }
    }
  }
}

function placa2() {
  rodizio = prompt(
    "Dia da semana do seu rodizio",
    "Digita o final da sua placa"
  );

  switch (rodizio) {
    case "1":
      alert("Proibido as: Segundas");
      break;

    case "2":
      alert("Proibido as: Segundas");
      break;

    case "3":
      alert("Proibido as: Segundas");
      break;

    case "4":
      alert("Proibido as: Sextas");
      break;

    case "5":
      alert("Proibido as: Sextas");
      break;

    case "6":
      alert("Proibido as: Quartas");
      break;

    case "7":
      alert("Proibido as: Quartas");
      break;

    case "8":
      alert("Proibido as: Quartas");
      break;

    case "9":
      alert("Proibido as: Quartas");
      break;

    default:
      alert("Digite certo o numero final de sua placa");
      break;
  }
}
