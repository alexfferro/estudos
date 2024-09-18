var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);

for (let index = 1; index <= lines; index++) {
  if (index % 2 == 1) {
    console.log(index)
  }
}
