var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');
let entrada = parseInt(lines[0])
let coelhos = 0
let sapos = 0
let ratos = 0

for (let i = 1; i < entrada+1; i++){
  let lista = lines[i].trim().split(' ')
  if (lista[1] == 'C') {
    coelhos = coelhos + parseInt(lista[0])
  }
  if (lista[1]=='R') {
    ratos = ratos + parseInt(lista[0])
  }
  if (lista[1]=='S'){
    sapos = sapos + parseInt(lista[0])
  }
}
let total = coelhos+sapos+ratos

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${((coelhos/total)*100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((ratos/total)*100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((sapos/total)*100).toFixed(2)} %`)
