// While
console.log('Repetição com While');
let n1 = 4;
let n2 = 12;
let passo = 4;

while (n1 <= n2) {
  console.log(`Contando: ${n1}`);
  n1 += passo;
}

// Do While
console.log('Repetição com Do While');
n1 = 10;
n2 = 20;
passo = 5;


do {
    console.log(`Contando: ${n1}`)
    n1 += passo
} while (n1 <= n2)

// For
console.log('Repetição com For')
n1 = 100
n2 = 1000
passo = 100

for(var cont = n1; cont <= n2; cont += passo) {
  console.log(`Contando: ${cont}`)
}

console.log('Fim!')