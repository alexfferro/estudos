var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');
let entrada = lines.map( item => parseInt(item)).sort()

let X = entrada[0]
let Y = entrada[1]
let sum = 0

for (let i = X + 1; i < Y; i++) {
  if (i % 2 != 0) {
    sum = sum + i
  }
}

console.log(sum)