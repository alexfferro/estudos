var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

[nome, salario, vendasTotais] = lines.map(item => {
  return Number(item);
})

comissao = vendasTotais*0.15
salarioTotal = salario + comissao
console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)