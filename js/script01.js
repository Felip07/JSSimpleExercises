// Exemplo 03
function JS0103() {
  window.alert("**Iniciando os estudos no Javascript**");
  window.confirm("Vamos começar?");
  var nome = window.prompt("Qual seu nome?");
  var idade = Number(window.prompt("Qual sua idade?"));
  var hobby = window.prompt("Qual seu hobby?");

  // document.write(
  //   nome + ", tenho " + idade + " anos e meu hobby é " + hobby + "."
  // );

  const conteudoDiv = document.getElementById("conteudo");
  const newP = document.createElement("p");
  newP.innerHTML = `*JS-01.03*<br>Me chamo <strong>${nome}</strong>, tenho <strong>${idade}</strong> anos e curto <strong>${hobby}</strong>.`;
  conteudoDiv.appendChild(newP);
}

// Exemplo 04
function JS0104() {
  var n1 = Number(window.prompt("Digite um numero: "));
  var n2 = Number(window.prompt("Digite outro numero: "));
  var soma = n1 + n2;
  const conteudoDiv = document.getElementById("conteudo");
  const newP = document.createElement("p");
  newP.innerHTML = `*JS-01.04*<br>A soma desses numeros é <strong>${soma}</strong>`;
  conteudoDiv.appendChild(newP);
}

// Exemplo 05a
function JS0105a() {
  var nome = String(window.prompt(`Digite o seu nome: `));
  var nNome = nome.length;
  var nomeMa = nome.toUpperCase();
  var nomeMi = nome.toLowerCase();
  document.write(
    `Olá, <b>${nome}</b>! Seu nome tem ${nNome} letras.<br>Seu nome em maiúsculas é ${nomeMa}.<br>Seu nome em minúsculas é ${nomeMi}.`
  );
}

// Exemplo 05b
function JS0105b() {
  var salario = Number.parseInt(window.prompt(`Digite seu futuro salário:`));
  var salarioFloat = salario.toFixed("2");
  var salarioVir = salario.toFixed(2).replace(".", ",");
  var salarioBRL = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  var salarioUSD = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
  });
  var salarioEUR = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "EUR",
  });
  document.write(
    `Seu futuro salário com duas casas decimais: ${salarioFloat}.<br>Seu futuro salário com vírgula: ${salarioVir}.<br>Seu futuro salário em moeda Real: ${salarioBRL}.<br>Seu futuro salário em moeda Euro: ${salarioEUR}.<br>Seu futuro salário em moeda Dólar: ${salarioUSD}.<br>`
  );
}

// Exemplo 06
function JS0106() {
  window.alert("**TRABALHANDO COM OPERADORES EM JAVASCRIPT**");
  window.onload(operadores());

  function operadores() {
    n = Number(window.prompt("Digite um número de 1 a 5:"));

    if (n <= 5 && n >= 0) {
      // Soma
      var soma = n + n;
      document.write(`<br>A soma de ${n} e ${n} é igual a ${soma}. `);

      // Multiplicação
      var multiplicacao = soma * n;
      document.write(
        `<br>A multiplicação de ${soma} e ${n} é igual a ${multiplicacao}. `
      );

      // Subtração
      var subtracao = multiplicacao - n;
      document.write(
        `<br>A subtração de ${multiplicacao} e ${n} é igual a ${subtracao}`
      );

      // Potência
      var potencia = subtracao ** n;
      document.write(
        `<br>A potência de ${subtracao} elevado a ${n} é igual a ${potencia}`
      );

      // Divisão
      var divisao = potencia / n;
      document.write(
        `<br>A divisão de ${potencia} por ${n} é igual a ${divisao}`
      );

      // Resto da Divisão
      var restoDivisao = divisao % n;
      document.write(
        `<br>O resto da divisão de ${divisao} por ${n} é igual a ${restoDivisao}<br>`
      );

      // Operador de Atribuição x 3
      restoDivisao += n;
      document.write(`<br>${restoDivisao}`);
      restoDivisao += n;
      document.write(`<br>${restoDivisao}`);
      restoDivisao += n;
      document.write(`<br>${restoDivisao}`);
    } else {
      window.alert(`Numero invalido! Tente novamente`);
      operadores();
    }
  }
}
