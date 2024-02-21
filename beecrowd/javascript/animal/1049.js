var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines[0].split('\r')
let linha2 = lines[1].split('\r')
let linha3 = lines[2].split('\r')
let resultado = ''

if (linha1[0] === 'vertebrado') {
    if (linha2[0] === 'ave') {
        if (linha3[0] === 'carnivoro') {
            resultado = 'aguia'
        } else if(linha3[0] === 'onivoro'){
            resultado = 'pomba'
        }
    }else if (linha2[0] === 'mamifero'){
        if (linha3[0] === 'onivoro') {
            resultado = 'homem'
        }else if(linha3[0] === 'herbivoro'){
            resultado = 'vaca'
        }
    }
}else if (linha1[0] ==='invertebrado'){
    if (linha2[0] === 'inseto') {
        if (linha3[0] === 'hematofago') {
            resultado = 'pulga'
        }else if(linha3[0] === 'herbivoro'){
            resultado = 'lagarta'
        }
    }else if (linha2[0] === 'anelideo'){
        if (linha3[0] === 'hematofago') {
            resultado = 'sanguessuga'
        }else if (linha3[0] === 'onivoro') {
            resultado = 'minhoca'
        }
    }
}

console.log(resultado)