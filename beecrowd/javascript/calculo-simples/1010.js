var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

[piece1 , piece2] = lines.map(item => {
  return item.split(' ')
})

valorTotal = (piece1[1]*piece1[2]) + (piece2[1]*piece2[2])

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)