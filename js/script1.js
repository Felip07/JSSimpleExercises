const newP = document.createElement("p");
const conteudoDiv = document.getElementById("conteudo");

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

  newP.innerHTML = `*JS-01.3*<br>Me chamo <strong>${nome}</strong>, tenho <strong>${idade}</strong> anos e curto <strong>${hobby}</strong>.`;
  conteudoDiv.appendChild(newP);
}

// Exemplo 04
function JS0104() {
  var n1 = Number(window.prompt("Digite um numero: "));
  var n2 = Number(window.prompt("Digite outro numero: "));
  var soma = n1 + n2;
  newP.innerHTML = `*JS-01.4*<br>A soma desses numeros é <strong>${soma}</strong>`;
  conteudoDiv.appendChild(newP);
}

// Exemplo 05a
function JS0105a() {
  var nome = String(window.prompt(`Digite o seu nome: `));
  var nNome = nome.length;
  var nomeMa = nome.toUpperCase();
  var nomeMi = nome.toLowerCase();
  newP.innerHTML = `*JS-01.5a*<br>Olá, <strong>${nome}</strong>! Seu nome tem <strong>${nNome}</strong> letras.<br>Seu nome em maiúsculas é <strong>${nomeMa}</strong>.<br>Seu nome em minúsculas é <strong>${nomeMi}</strong>.`;
  conteudoDiv.appendChild(newP);
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
  salarioUSD = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
  });
  salarioEUR = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "EUR",
  });
  newP.innerHTML = `*JS-01.5b*<br>Seu futuro salário: <strong>${salario}</strong><br>Seu futuro salário com duas casas decimais: <strong>${salarioFloat}</strong>.<br>Seu futuro salário com vírgula: <strong>${salarioVir}</strong>.<br>Seu futuro salário em moeda Real: <strong>${salarioBRL}</strong>.<br>Seu futuro salário em moeda Euro: <strong>${salarioEUR}</strong>.<br>Seu futuro salário em moeda Dólar: <strong>${salarioUSD}</strong>.<br>`;
  conteudoDiv.appendChild(newP);
}

// Exemplo 06
function JS0106() {
  n = Number(window.prompt("Digite um número de 1 a 5:"));

  if (n <= 5 && n > 0) {

    var soma = n + n;
    var multiplicacao = soma * n;
    var subtracao = multiplicacao - n;
    var potencia = subtracao ** n;
    var divisao = potencia / n;
    var restoDivisao = divisao % n;
    

    newP.innerHTML = `*JS-01.6*<br>
    A soma de <strong>${n}</strong> e <strong>${n}</strong> é igual a <strong>${soma}</strong>.
    <br>A multiplicação de <strong>${soma}</strong> e <strong>${n}</strong> é igual a <strong>${multiplicacao}</strong>. 
    <br>A subtração de <strong>${multiplicacao}</strong> e <strong>${n}</strong> é igual a <strong>${subtracao}</strong>.
    <br>A potência de <strong>${subtracao}</strong> elevado a <strong>${n}</strong> é igual a <strong>${potencia}</strong>.
    <br>A divisão de <strong>${potencia}</strong> por <strong>${n}</strong> é igual a <strong>${divisao}</strong>.
    <br>O resto da divisão de <strong>${divisao}</strong> por <strong>${n}</strong> é igual a <strong>${restoDivisao}</strong><br>`;

    restoDivisao += n;
    newP.innerHTML += `<br><strong>${restoDivisao}</strong>`;
    restoDivisao += n;
    newP.innerHTML += `<br><strong>${restoDivisao}</strong>`;
    restoDivisao += n;
    newP.innerHTML += `<br><strong>${restoDivisao}</strong>`;

    conteudoDiv.appendChild(newP);
  } else {
    window.alert(`Numero invalido! Tente novamente`);
    JS0106();
  }
}
