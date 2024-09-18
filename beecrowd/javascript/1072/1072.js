var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');
let dentro = 0
let fora = 0
for (let index = 1; index < lines.length; index++) {
  if(lines[index] >= 10 && lines[index] <= 20) {
    dentro++
  }else {
    fora++
  }
}

console.log(dentro,'in')
console.log(fora,'out')