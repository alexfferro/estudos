var input = parseInt(require('fs').readFileSync('stdin', 'utf8'));

for (let index = 1; index <= input; index++) {
  if( index % 2 == 0){
    console.log(`${index}^2 = ${index**2}`)
  }
}