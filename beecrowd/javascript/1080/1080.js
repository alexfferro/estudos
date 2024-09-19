var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let maior = 0
let posicao = 1

for (let i = 0; i <= lines.length; i++) {
  if (parseInt(lines[i]) > maior) {
    maior = parseInt(lines[i])
    posicao = i + 1
  }
}
console.log(maior)
console.log(posicao)