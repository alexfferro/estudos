var input = require('fs').readFileSync('stdin','utf8')
var [A, B] = input.split('\n').map(item => parseInt(item))
console.log(`SOMA = ${A+B}`)