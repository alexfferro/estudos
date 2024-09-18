var input = require('fs').readFileSync('stdin', 'utf8')
let count = 1
let flag = true
let number = parseInt(input)
while(flag) {
  if (count > 6){
    flag = false
  }
  if (number % 2 != 0) {
    console.log(number)
    count++
  }
  number++
}