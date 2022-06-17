var array = [
  [1,1,1,1],
  [1,1]
];

var neko = {
  name: 'Kuro',
  age: 100,
  color: ['Black','Cian', 'White'],
  walk : () => { console.log('Walking . . .')},
  roar : () => { console.log('Rawr . . . ')}
}

/*
For ([Expressão Inicial]; [Condição Logica]; [Incremento])
Example : For(let i = 0; i < 10; i++){
  Bloco de Código
}

A ideia de acessar uma matriz é igual ao python.
*/

// for(let i = 0; i < array.length; i++) {
//   for(let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j])
// }}

/* 
For In , funciona como uma repetição a partir de uma propriedade

for([indice] in [Objeto ou array]){
  Bloco de Código
}

Amigável, é possível fazer algo igual com python.
*/

// for(indice in array[0]){
//   console.log(array[0][indice])
// }

/*
For Of -> Funciona como uma repetição a partir de um valor

Uso interessante, é possível acessar os valores dentro de um array ou objeto, sem precisar utilizar os indices.
*/

for(let i of array){
  console.log(i)
}

for (let i of neko.color){
  console.log(i)
}

/**
 * While - enquanto for verdade, faça
 * while (a < 10) {
 * a++
 * }
 */