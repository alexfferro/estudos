var input = parseInt(require('fs').readFileSync('stdin', 'utf8'));

for (let i = 1; i <= 10; i++){
  console.log(`${i} x ${input} = ${i*input}`)
}