var input = require('fs').readFileSync('stdin', 'utf8');
input = Math.abs(parseInt(input))

if (input === 11) {
    console.log('Sao Paulo')
}else if (input === 19) {
    console.log('Campinas')
}else if (input === 21){
    console.log('Rio de Janeiro')
}else if (input === 27){
    console.log('Vitoria')
}else if (input === 31){
    console.log('Belo Horizonte')
}else if (input === 32){
    console.log('Juiz de Fora')
}else if (input === 61){
    console.log('Brasilia')
}else if (input === 71){
    console.log('Salvador')
}else {
    console.log('DDD nao cadastrado')
}
