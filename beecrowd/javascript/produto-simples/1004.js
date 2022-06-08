var input = require('fs').readFileSync('stdin','utf8')
var [num1, num2] = input.split('\n').map(item => parseInt(item))
console.log(`PROD = ${num1*num2}`)