let aux = 0
let j = 1

function formatarNumero(numero) {
  if (numero == 1.9999999999999998) {
    return numero = 2
  }
  // Verifica se o número tem parte decimal
  if (Number.isInteger(numero)) {
    return numero.toFixed(0); // Sem casas decimais
  } else {
    return numero.toFixed(1); // Uma casa decimal
  }
}

for (let i = 0; i <= 2; i = i + 0.2) {
  for(j; j <= 3 + aux; j++){
    console.log(`I=${formatarNumero(i)} J=${formatarNumero(j)}`);
  }
  aux = aux + 0.2;
  j = 1 + aux;
}