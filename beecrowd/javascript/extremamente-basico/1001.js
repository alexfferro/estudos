var input = require("fs").readFileSync('stdin', 'utf-8')

var [A, B] = input.split(' ').map(item => parseInt(item))

X = A + B
console.log(`X = ${X}`)