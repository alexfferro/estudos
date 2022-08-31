let input = require('fs').readFileSync('stdin','utf8')
let tempo = +input // esse artificio, transforma uma string em um inteiro.
let segundos = tempo%60
let minutos = Math.floor(tempo/60)%60
let horas = Math.floor((tempo/60)/60)

console.log(`${horas}:${minutos}:${segundos}`)