var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');
let entrada = lines[0]

function verificarImpar(numero) {
  if (numero % 2 == 1) {
    return numero
  }
}
for (let i = 1; i <= entrada; i++) {
  let X = lines[i].split(' ')[0]
  let Y = lines[i].split(' ')[1]
  let lista = []
  lista.push(parseInt(X))
  lista.push(parseInt(Y))
  lista.sort((a, b) => a - b)
  let soma = 0
  for (let j = lista[0] + 1; j < lista[1]; j++) {
    let impar = verificarImpar(j)
    if (impar) {
      soma += impar
    }
  }
  console.log(soma)
}