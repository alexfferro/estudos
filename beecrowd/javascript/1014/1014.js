var input = require('fs').readFileSync('stdin','utf8')
var [distanciaTotalPercorrida, combustivelGasto] = input.split('\n').map(item => parseFloat(item))
var consumoMedio = (distanciaTotalPercorrida/combustivelGasto)
console.log(`${consumoMedio.toFixed(3)} km/l`)