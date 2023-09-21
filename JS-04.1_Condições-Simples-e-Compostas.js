// Condição Simples
/* var vel = 50;
var limite = 60;
console.log(`A velocidade do seu carro é ${vel}Km/h`);
if (vel > limite) {
  console.log(`Você ultrapassou a velocidade permitida. Você foi multado!`);
}
console.log("Dirija com cuidado"); */


// Condições Compostas
/* var país = "Brasil";
console.log(`${país}`);
if (país != "Brasil") {
  console.log("O usuario é estrangeiro.");
} else {
  console.log("O usuario é brasileiro.");
} */


// Condições Aninhadas
var horaSistema = new Date();
// console.log(horaSistema);
var hora = horaSistema.getHours()
var minutos = horaSistema.getMinutes()
var segundos = horaSistema.getSeconds()
console.log(`Agora são exatamente - ${hora}:${minutos}:${segundos}`)
if (hora > 0 && hora < 5) {
    console.log('Boa madrugada.')
} else if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite.')
} else {
    console.log('Ops! Hora inválida.')
}