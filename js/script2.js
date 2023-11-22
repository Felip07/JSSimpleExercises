// Operadores relacionais e ternário
function JS0202() {
  newP.innerHTML = "*JS-02.2*";

  var nome = window.prompt("Qual é seu nome?");
  var idade = window.prompt("Qual é sua idade?");
  var hobby = window.prompt("Qual é o seu hobby?");
  var ano = window.prompt("Em que ano você nasceu?");

  newP.innerHTML += `<br>Olá! <strong>${nome}</strong>.`;
  conteudoDiv.appendChild(newP);
  var resultado = idade <= 18 ? "menor" : "maior";
  newP.innerHTML += `<br>Você é <strong>${resultado}</strong> de idade.`;

  resultado =
    hobby.toLowerCase() != "estudar"
      ? "Não seria melhor estudar?"
      : "Você vai longe!";
  newP.innerHTML += `<br>Seu hobby é <strong>${hobby.toLowerCase()}</strong>. ${resultado}`;

  // Verifica o milênio que a pessoa nasceu
  var resultado = ano >= 2000 ? "após o 2º milênio" : "antes do 3º milênio";
  newP.innerHTML += `<br>Você nasceu em <strong>${ano}</strong>, portanto nasceu ${resultado}.`;

  conteudoDiv.appendChild(newP);
}


// Operadores Lógicos e Ternários
function JS0203() {
  newP.innerHTML = "";

  var ano = Number(window.prompt("Digite a série do aluno (1 a 9):"));
  var resultado = ano == 1 || ano == 9 ? "VERMELHO" : "AZUL";

  var media = Number(prompt("Digite a média do aluno:"));
  var resultado = media >= 4 && media <= 5.5 ? "fará" : "não fará";
  newP.innerHTML += `*JS-02.3*<br>
  Categoria do aluno: ${resultado}.<br>
  Esse aluno <strong>${resultado}</strong> recuperação, pois teve média <strong>${media}</strong>.`;

  conteudoDiv.appendChild(newP);
}
