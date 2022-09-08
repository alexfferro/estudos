// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
  console.log(dado())
}

// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({nome: 'Alex'})
// imprimirDado([1, 2, 3])

// é possível também executar uma função dentro de outra função.

imprimirDado(function () {
  return 'Olá Mundo'
})

/** 
 * Então basicamente, uma callback function é uma função que chama outra função.
*/
