/**
 * Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

Entrada
A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

Saída
Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
  let [x, y] = lines[i].split(' ').map(item => parseInt(item));

  if (x === y) {
    break;
  }

  if (x < y) {
    console.log('Crescente')
  }
  else {
    console.log('Decrescente')
  }

}