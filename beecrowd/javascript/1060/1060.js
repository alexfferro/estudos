var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)
var contador = 0;
for ( var i = 0; i < 6 ; i++) {
  if (lines[i] > 0.00) {
    contador ++;
  }
}
console.log(`${contador} valores positivos`);





