const input = require('fs').readFileSync('stdin','utf8')
const lines = input.split('\n');
let tempoGasto = +lines[0];
let velocidadeMedia = +lines[1];

function calcularDistancia( velocidadeMedia, tempo) {
  return ( velocidadeMedia * tempo)
}

let combustivelGasto = 12 // km / litro

let litrosNecessarios = calcularDistancia(velocidadeMedia, tempoGasto) / combustivelGasto

console.log(litrosNecessarios.toFixed(3))