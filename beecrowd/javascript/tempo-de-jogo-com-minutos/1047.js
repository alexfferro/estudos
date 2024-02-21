var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');

/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.
Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
*/ 

let horaInicial = lines[0]
let minutoInicial = lines[1]
let horaFinal = lines[2]
let minutoFinal = lines[3]

let resultadoHora = (horaFinal - horaInicial)
let resultadoMinuto = (minutoFinal - minutoInicial)
if (resultadoHora > 24) {
    resultadoHora = resultadoHora % 24
}
if((resultadoHora === 0) & (resultadoMinuto === 0)) {
    resultadoHora = resultadoHora + 24
}
if (resultadoMinuto > 60) {
    resultadoMinuto = resultadoMinuto % 60
}
if (resultadoMinuto < 0) {
    resultadoHora--
    resultadoMinuto = 60 + resultadoMinuto
}
if(resultadoHora < 0 ) {
    resultadoHora = 24 + resultadoHora
}

console.log(`O JOGO DUROU ${resultadoHora} HORA (S) E ${resultadoMinuto} MINUTO (S)`)



