/** 
 * Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).
 * Entrada
  O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.
 * Saída
  Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.
**/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i <= lines.length; i++) {
  let numeros = lines[i].split(' ');
  let M = parseInt(numeros[0]);
  let N = parseInt(numeros[1]);

  if (M <= 0 || N <= 0) {
    break;
  }

  let menor = Math.min(M, N);
  let maior = Math.max(M, N);
  let soma = 0;
  let sequenciaDeNumeros = '';

  for (let j = menor; j <= maior; j++) {
    sequenciaDeNumeros += j + ' ';
    soma += j;
  }

  console.log(`${sequenciaDeNumeros}Sum=${soma}`);
}