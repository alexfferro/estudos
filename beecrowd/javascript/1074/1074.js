var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

for (let index = 1; index < lines.length; index++){
  const element = parseInt(lines[index]);
  if (element % 2 == 0) {
    if (element > 0) {
      console.log('EVEN POSITIVE')
    }else if (element == 0) {
      console.log('NULL')
    }else {
      console.log('EVEN NEGATIVE')
    }
  }else {
    if (element > 0) {
      console.log('ODD POSITIVE')
    } else {
      console.log('ODD NEGATIVE')
    }
  }
}