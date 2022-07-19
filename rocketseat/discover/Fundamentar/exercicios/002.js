/**
 * Transformar notas escolares
 * Crie um algoritmo que transforme as notas do sistema numéricas
 * para as notas do sistema em caracteres do tipo A B C
 * 
 * de 90 para cima - A
 * de 80 - 89 - B
 * de 70 - 79 - C
 * de 60 - 69 - D
 * menor que 60 - F
 * 
 */

let student = {
  name: 'Alex',
  age: 15,
  score: 1,

}

function scoreNumberToCharacter(score){
  if (score < 0 || score > 100){
    return 'Invalid'
  } else if(score >= 90){
    return 'A'
  } else if (score >= 80){
    return 'B'  
  } else if (score >= 70){
    return 'C'
  } else if(score >= 60){
    return 'D'
  } else {
    return 'F'
  }
}

console.log(`O aluno ${student.name} tirou uma pontuação de ${scoreNumberToCharacter(student.score)}`)