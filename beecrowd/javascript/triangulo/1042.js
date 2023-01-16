var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ')
var A,B,C;
[A,B,C] = lines.map(item => {
  return Number(item)
})

/**
 * If the sum of any two sides is greater than the third side, then it is a
 * triangle.
 * @param a - side 1
 * @param b - side 2 
 * @param c - side 3
 * @returns true if segments is a triangle.
 */
function isTriangle(a,b,c) {
  if ((a + b > c)  & (b + c > a) & (a + c > b)){
    return true
  } 
}
/**
 * It takes three numbers, adds the first two together, multiplies the sum by the
 * third number, and then divides the product by two.
 * @param a - the first side of the trapezoid
 * @param b - base
 * @param c - the height of the trapezoid
 * @returns The area of a trapezoid.
 */

function isTrapezio(a,b,c){
  return ((a+b)*c)/2
}

if (isTriangle(A,B,C)){
  console.log(`Perimetro = ${(A+B+C).toFixed(1)}`)
}else {
  console.log(`Area = ${isTrapezio(A,B,C).toFixed(1)}`)
}