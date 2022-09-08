
/**
 * setTimeout(function, delay)
 * é uma função que usa callback
 * ela basicamente vai chamar uma função depois de um determinado período / delay.
 * o delay é contado em milissegundos, por exemplo: 1000 ms == 1 seg
 */

setTimeout(function() {
  console.log('Olá mundo, depois de 1s')
}, 1000)