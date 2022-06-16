var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var [A,B,C,D] = lines.map( item => {
  return Number(item)
})

var diferenca = ((A*B) - (C*D));

console.log(`DIFERENCA = ${diferenca}`)