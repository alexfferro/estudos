var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split(' ')
var A,B;

[ A, B ] = lines.map(item => {
  return Number(item);
})


/*
Para um número ser múltiplo de outro, é necessário que o resto da divisão seja 0
no código abaixo, verifico qual dos dois números é maior, para garantir que a divisão será feita normalmente.
*/

function isMultiple(n1, n2) {
  if (n1 > n2) {
    if (n1 % n2 === 0){
      return 'Sao Multiplos';
    }
    else {
      return 'Nao sao Multiplos';
    }
  }
  else {
    if (n2 % n1 === 0){
      return 'Sao Multiplos';
    }
    else {
      return 'Nao sao Multiplos';
    }
  }
}

console.log(isMultiple(A,B))