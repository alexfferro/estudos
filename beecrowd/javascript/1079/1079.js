var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');

for (let i = 1; i <= lines[0]; i++){
  let mediaPesoUm = 2
  let mediaPesoDois = 3
  let mediaPesoTres = 5
  
  let lista = lines[i].split(' ')
  console.log((((mediaPesoUm*lista[0]) + (mediaPesoDois*lista[1]) + (mediaPesoTres*lista[2])) / (mediaPesoUm + mediaPesoDois + mediaPesoTres)).toFixed(1) )
}
