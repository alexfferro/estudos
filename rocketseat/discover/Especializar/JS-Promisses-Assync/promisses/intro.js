/** Promisses Explanation
 *
 * Promisses é um objeto JavaScript com a promessa de que algo será realizado
 * é usado para operações assíncronas
 *
 * 1. Carregar um arquivo
 * 2. Leitura de dados de uma API
 *
 * Ela pode ter 4 estados
 *
 * Pending -> Estado Inicial, assim que o objeto da promessa é iniciado
 * Fulfilled -> A promessa foi concluída com sucesso.
 * Rejected -> A promessa foi rejeitada, houve um erro.
 * Settled -> Seja sucesso ou com erro, ela foi finalmente concluída.
 */

console.log("Pedir Uber");
const promessa = new Promise((resolve, reject) => {
  return reject("pedido cancelado");
});
console.log("Aguardando . . .");
promessa
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log('Finalizado'))
