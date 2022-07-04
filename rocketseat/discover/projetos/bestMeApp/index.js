const questions = [
  "O que aprendi hoje? ",
  "O que me deixou aborrecido? E o que posso fazer para melhorar?",
  "O que me deixou feliz?",
  "Quantas pessoas eu ajudei hoje?"
]

const ask = ( index = 0) => {
  process.stdout.write(questions[index] + "\n")
}

ask()