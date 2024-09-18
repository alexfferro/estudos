var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let A = Number(lines[0])*2
let B = Number(lines[1])*3
let C = Number(lines[2])*5

let media = (A+B+C)/10

console.log(`MEDIA = ${media.toFixed(1)}`)

