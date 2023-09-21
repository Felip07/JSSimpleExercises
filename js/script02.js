// Operadores relacionais e ternário
function JS0202() {
  var nome = window.prompt("Qual é seu nome?");
  var idade = window.prompt("Qual é sua idade?");
  var hobby = window.prompt("Qual é o seu hobby?");
  var ano = window.prompt("Em que ano você nasceu?");

  document.write(`Olá! <strong>${nome}</strong>.`);
  var resultado = idade <= 18 ? "menor" : "maior";
  document.write(`<br>Você é <strong>${resultado}</strong> de idade.`);

  resultado =
    hobby.toLowerCase() != "estudar"
      ? "Não seria melhor estudar?"
      : "Você vai longe!";
  document.write(
    `<br>Seu hobby é <strong>${hobby.toLowerCase()}</strong>. ${resultado}`
  );

  // Verifica o milênio que a pessoa nasceu
  var resultado = ano >= 2000 ? "após o 2º milênio" : "antes do 3º milênio";
  document.write(
    `<br>Você nasceu em <strong>${ano}</strong>, portanto nasceu ${resultado}.`
  );

  document.write("<br><button>Recarregar</button>");
}

// Operadores Lógicos e Ternários
function JS0203() {
  var ano = Number(window.prompt("Digite a série do aluno (1 a 9):"));
  var resultado = ano == 1 || ano == 9 ? "VERMELHO" : "AZUL";
  document.write(`Categoria do aluno: ${resultado}.`);

  var media = Number(prompt("Digite a média do aluno:"));
  var resultado = media >= 4 && media <= 5.5 ? "fará" : "não fará";
  document.write(
    `<br>Esse aluno <strong>${resultado}</strong> recuperação, pois teve média <strong>${media}</strong>.`
  );
}
