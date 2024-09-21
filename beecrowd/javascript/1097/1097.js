let flag = 5
let aux = 7

for (let i = 1; i <= 9; i=i+2){
  for(let j = aux; j >= flag; j--){
    console.log(`I=${i} J=${j}`)
  }
  flag = flag + 2
  aux = aux + 2
  j = aux
}
