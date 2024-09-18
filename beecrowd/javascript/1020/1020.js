let input = require('fs').readFileSync('stdin','utf8')
let days = +input // esse artificio, transforma uma string em um inteiro.
let years = 0;
let months = 0;
let day = 0;
while(days > 0)
  if (days >= 365){
    years += 1
    days -= 365
  }

  else if (days >= 30 ){
    months += 1
    days -= 30
  }

  else if (days >= 0){
    day += 1
    days -= 1
  }

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${day} dia(s)`)
