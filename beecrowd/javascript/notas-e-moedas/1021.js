let input = require('fs').readFileSync('stdin','utf8')
let cedula = +input

/* A code that calculates the number of notes of each value that are needed to make
up the value of the input. */
console.log('NOTAS:')
let nota100 = Math.floor(cedula/100)
console.log(nota100 + ' nota(s) de R$ 100.00')
cedula = cedula % 100
let nota50 = Math.floor(cedula/50)
console.log(nota50 + ' nota(s) de R$ 50.00')
cedula = cedula % 50
let nota20 = Math.floor(cedula/20)
console.log(nota20 + ' nota(s) de R$ 20.00')
cedula = cedula % 20
let nota10 = Math.floor(cedula/10)
console.log(nota10 + ' nota(s) de R$ 10.00')
cedula = cedula % 10
let nota5 = Math.floor(cedula/5)
console.log(nota5 + ' nota(s) de R$ 5.00')
cedula = cedula % 5
let nota2 = Math.floor(cedula/2)
console.log(nota2 + ' nota(s) de R$ 2.00')
cedula = cedula % 2
console.log('MOEDAS:')
let moeda1 = Math.floor(cedula/1)
console.log(moeda1.toFixed(0) + ' moeda(s) de R$ 1.00')
cedula = cedula % 1.00 + 0.00001
let moeda50 = Math.floor(cedula/0.50)
console.log(moeda50.toFixed(0) + ' moeda(s) de R$ 0.50')
cedula = cedula % 0.50 + 0.00001
let moeda25 = Math.floor(cedula/0.25) 
console.log(moeda25 + ' moeda(s) de R$ 0.25')
cedula = cedula % 0.25 + 0.00001
let moeda10 = Math.floor(cedula/0.10) 
console.log(moeda10.toFixed(0) + ' moeda(s) de R$ 0.10')
cedula = cedula % 0.10 + 0.00001
let moeda5 = Math.floor(cedula/0.05)
console.log(moeda5.toFixed(0) + ' moeda(s) de R$ 0.05')
cedula = cedula % 0.05 + 0.00001
let moeda01 = Math.floor(cedula/0.01)
console.log(moeda01.toFixed(0) + ' moeda(s) de R$ 0.01')
cedula = cedula % 0.01 + 0.00001



