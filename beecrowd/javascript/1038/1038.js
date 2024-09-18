var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ');
[item, quantidade] = lines.map(item => {
  return Number(item);
})


produtos = {
  1: 4.00,
  2: 4.50,
  3: 5.00,
  4: 2.00,
  5: 1.50
}

for (const [key, value] of Object.entries(produtos)){
  if (key == item) {
    console.log(`Total: R$ ${(value*quantidade).toFixed(2)}`)
  }
}