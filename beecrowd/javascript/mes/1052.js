var input = parseInt(require('fs').readFileSync('stdin', 'utf8'));
input = Math.abs(input)
var calendar = {
  1 : 'January',
  2 : 'February',
  3 : 'March',
  4 : 'April',
  5 : 'May',
  6 : 'June',
  7 : 'July',
  8 : 'August',
  9 : 'September',
  10 : 'October',
  11 : 'November',
  12 : 'December'
}

for (i in calendar) {
  if (input.toString() === i) {
    console.log(calendar[i])
  }
}