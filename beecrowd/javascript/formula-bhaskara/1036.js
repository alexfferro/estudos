var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

[a, b, c] = lines.map(item => {
  return Number(item);
})

delta = (b**2) - (4*a*c)
R1 = (-b + Math.sqrt(delta))/(2*a)
R2 = (-b - Math.sqrt(delta))/(2*a)

if (delta < 0 || a === 0){
  console.log('Impossivel calcular')
}
else {
  console.log('R1 = ' + R1.toFixed(5))
  console.log('R2 = ' + R2.toFixed(5))
}


