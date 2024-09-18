var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');

PI = 3.14159
raio = Number(lines[0])**3
volume = (4/3)*PI*raio

console.log(`VOLUME = ${volume.toFixed(3)}`)
