var input = parseInt(require('fs').readFileSync('stdin', 'utf8'));

for (let i = 1; i < 10000; i++) {
  if (i % input == 2) {
    console.log(i)
  }
}