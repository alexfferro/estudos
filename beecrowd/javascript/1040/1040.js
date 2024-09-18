var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);
[nota1, nota2, nota3, nota4] = lines.map(item => {
  return Number(item)
})
media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + nota4) / 10

if (media > 7.0) {
  console.log("Media:", media.toFixed(1))
  console.log("Aluno aprovado.")
}
if (media < 5.0) {
  console.log("Media:", media.toFixed(1))
  console.log("Aluno reprovado.")
}
if (media >= 5.0 & media <= 6.9){
  console.log("Media:",media.toFixed(1))
  console.log("Aluno em exame.")
  console.log("Nota do exame:",Number(lines[4]).toFixed(1))
  var novaMedia = (media + Number(lines[4])) / 2
  if (novaMedia >= 5.0){
    console.log("Aluno aprovado.")
    console.log("Media final:",novaMedia.toFixed(1))
  }
  else {
    console.log("Aluno reprovado.")
    console.log("Media final:",novaMedia.toFixed(1))
  }
}