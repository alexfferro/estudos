let input = require('fs').readFileSync('stdin','utf8')
let cedula = +input

/* A code that calculates the number of notes of each value that are needed to make
up the value of the input. */
console.log(cedula)
let nota100 = Math.floor(cedula/100)
console.log(nota100 + ' nota(s) de R$ 100,00')
cedula = cedula % 100
let nota50 = Math.floor(cedula/50)
console.log(nota50 + ' nota(s) de R$ 50,00')
cedula = cedula % 50
let nota20 = Math.floor(cedula/20)
console.log(nota20 + ' nota(s) de R$ 20,00')
cedula = cedula % 20
let nota10 = Math.floor(cedula/10)
console.log(nota10 + ' nota(s) de R$ 10,00')
cedula = cedula % 10
let nota5 = Math.floor(cedula/5)
console.log(nota5 + ' nota(s) de R$ 5,00')
cedula = cedula % 5
let nota2 = Math.floor(cedula/2)
console.log(nota2 + ' nota(s) de R$ 2,00')
cedula = cedula % 2
let nota1 = Math.floor(cedula/1)
console.log(nota1 + ' nota(s) de R$ 1,00')
cedula = cedula % 1



