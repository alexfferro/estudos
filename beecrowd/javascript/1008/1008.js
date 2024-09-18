var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let [number, hours, moneyPerHours] = lines.map(item => {
  return Number(item);
})

let salary = hours * moneyPerHours;

// console.log(`
// NUMBER = ${number}
// SALARY = U$ ${salary.toFixed(2)}
// `);
console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)