var input = require('fs').readFileSync('stdin','utf8')
var [ponto1, ponto2] = input.split('\n')
var ponto1 = ponto1.split(' ');
var x1 = parseFloat(ponto1[0])
var y1 = parseFloat(ponto1[1])
var ponto2 = ponto2.split(' ');
var x2 = parseFloat(ponto2[0])
var y2 = parseFloat(ponto2[1])

function distancia(x1,y1, x2, y2){
  return console.log(Math.sqrt((x2-x1)**2 + (y2-y1)**2).toFixed(4))
}

distancia(x1,y1, x2, y2)