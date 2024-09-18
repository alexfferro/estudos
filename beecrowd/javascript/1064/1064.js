var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let positivos = []
let media = 0

lines.forEach( (item) => {
  if (Number(item) > 0) {
    positivos.push(item)
    media = media + Number(item)
  }
})

console.log(positivos.length,'valores positivos')
console.log((media / positivos.length).toFixed(1))
