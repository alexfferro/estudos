/**
 * 1. Declare uma variável de nome weight
 */
let weight;
/**
 * 2. que tipo de dado é a variável acima ?
 */
console.log(typeof weight)
/**
 * 3. Declare uma variável e atribua valores para cada um dos dados
 * name: String
 * age: Number(Integer)
 * stars: Number(float)
 * isSubscribed: Boolean
 */
{
  let name = 'Alex'
  let age = 25
  let stars = 5.0
  let isSubscribed = true
}
/**
 * 4. A variável student abaixo é de que tipo de dados?
 *  4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3
 *  4.2 - Mostre no console  a seguinte mensagem:
 *        <name> de idade <age> pesa <weight> kg.
 *        Atenção, substitua <name> <age> e <weight> pelos valores
 *        de cada propriedade do objeto
 */

let student = {
  name: 'Alex',
  age: 25,
  isSubscribed: true,
  weight: 70.2
}
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/**
 * 5. Declare uma variável do tipo array, de nome students e atribua a ela um valor, ou seja, somente o array vazio
 */

let students = [];

/**
 * 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array.)
 */

students.push(student);

/**
 * 7. Coloque no console o valor da posição zero do array acima.
 */

console.log(students[0])

/**
 * 8. crie um novo student e coloque na posição 1 do array students.
 */

let johnny = {
  name: 'Johnny',
  age: 18,
  isSubscribed: false,
  weight: 88.2,
}
students.push(johnny);
console.log(students[1])

/**
 * 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? após a sua resposta, rode o código e veja se você acertou.
 * 
 * console.log(a);
 * var a = 1;
 * 
 * a resposta é undefined, pois o JS fez o hoisting da variável a, ja que ela possui um escopo global.
 */

console.log(a);
var a = 1;