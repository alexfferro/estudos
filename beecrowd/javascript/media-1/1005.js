// Multiplique as informações cuja média precisa ser calculada por seus respectivos pesos;

// 2 – Some os resultados dessas multiplicações;

// 3 – Divida o resultado obtido pela soma dos pesos utilizados.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0])*3.5
let B = Number(lines[1])*7.5
let media = (A + B) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)