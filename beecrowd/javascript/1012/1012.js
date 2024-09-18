var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');
/**
 * Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
 */
[A, B, C] = lines.map(item => {
  return Number(item);
})

PI = 3.14159;

triangulo =  (A*C)/2
circulo = PI*(C**2)
trapezio = ((A+B)*C)/2
quadrado = B*B
retangulo = A*B

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)


