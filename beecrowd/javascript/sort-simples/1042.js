var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ')

/* 
1. Primeiro preciso guardar a ordem em que os números foram lidos
2. Depois preciso ordenar em forma crescente
3. Imprimir na tela os números ordenados, seguido por uma linha em branco
4. Depois os número na ordem original.
*/
arr = []
// 4. Ordem Original
for (item of lines) {
  arr.push(Number(item))
}

/**
 * It swaps the values of two elements in an array
 * @param array - the array to be sorted
 * @param xp - the index of the first element to swap
 * @param xy - the index of the element to be swapped
 */
function swap(array, xp, xy) {
  var aux = array[xp]
  array[xp] = array[xy]
  array[xy] = aux
}

/**
 * For each element in the array, compare it to the next element and swap them if
 * the first element is greater than the second element.
 * @param array - the array to be sorted
 * @param n - the length of the array
 * @returns The array is being returned.
 */
function bubbleSort(array, n) {
 for (i = 0; i < n-1; i++) {
  for (j = 0; j < n-i-1; j++) {
    if(array[j] > array[j+1]){
      swap(array, j, j+1);
    }
  }
 }
 return array
}

bubbleSort(arr, arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log()
console.log(Number(lines[0]))
console.log(Number(lines[1]))
console.log(Number(lines[2]))
