var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');
var array = []
for (i in lines){
  array.push(Number(lines[i]))
}

function maiorValor(array){
  let maior = 0;
  for (let i = 0; i < array.length - 1; i++) {
    elemento = (array[i] + array[i+1] + Math.abs(array[i] - array[i+1]))/2
    if (elemento > maior){
      maior = elemento;
    }
  }
  return maior;
}


console.log(`${maiorValor(array)} eh o maior`)