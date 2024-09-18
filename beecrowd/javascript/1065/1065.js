var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let count = 0
lines.forEach((item) => {
  let newItem = parseInt(item)
  if ((newItem % 2) == 0)  {
    count++
  }
})
console.log(count,'valores pares')
