var input = require('fs').readFileSync('stdin', 'utf8');

let lista = {
    61: 'Brasilia',
    71: 'Salvador',
    11: 'Sao Paulo',
    21: 'Rio de Janeiro',
    32: 'Juiz de Fora',
    19: 'Campinas',
    27: 'Vitoria',
    31: 'Belo Horizonte'
}

let array = Object.entries(lista)

resultado = ''
for (const [key, value] of array) {
    if (input === key){
        resultado = value
    }
}
if( resultado == '' ){  
    resultado = 'DDD nao cadastrado'
}

console.log(resultado)

