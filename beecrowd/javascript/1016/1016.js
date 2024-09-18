var input = require('fs').readFileSync('stdin','utf8')
let distancia = +input

/**
 * Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

  Leia a distância (em km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

  1 km = 2 minutos
 */


console.log(`${distancia*2} minutos`)
