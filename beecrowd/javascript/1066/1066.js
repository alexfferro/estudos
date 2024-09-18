var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

lines.forEach( (item) => {
  let newItem = parseInt(item)
  if (newItem % 2 == 0){
    pares++
  }
  if (Math.abs(newItem % 2) == 1) {
    impares++
  }
  if (newItem > 0) {
    positivos++
  }
  if (newItem < 0) {
    negativos++
  }
})


console.log(pares,'valor(es) par(es)')
console.log(impares, 'valor(es) impar(es)')
console.log(positivos, 'valor(es) positivo(s)')
console.log(negativos, 'valor(es) negativo(s)')