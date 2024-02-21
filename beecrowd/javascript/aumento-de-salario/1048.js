var input = parseFloat(require('fs').readFileSync('stdin', 'utf8'));

function reajusteSalarial(salario){
    let percent = 0
    let ajuste = 0
    let salarioNovo = 0

    if (salario >= 0 & salario <= 400) {
     percent = 0.15
     ajuste = salario * percent
     salarioNovo = salario + ajuste
    }else if (salario > 400 & salario <= 800) {
     percent = 0.12
     ajuste = salario * percent
     salarioNovo = salario + ajuste
    }else if (salario > 800 & salario <= 1200) {
     percent = 0.10
     ajuste = salario * percent
     salarioNovo = salario + ajuste
    }else if (salario > 1200 & salario <= 2000) {
     percent = 0.07
     ajuste = salario * percent
     salarioNovo = salario + ajuste
    }else if (salario > 2000) {
     percent = 0.04
     ajuste = salario * percent
     salarioNovo = salario + ajuste
    }

    return console.log(`   	
Novo salario: ${salarioNovo.toFixed(2)}\nReajuste ganho: ${ajuste.toFixed(2)}\nEm percentual: ${(percent * 100).toFixed(0)} %
        `)
    }   

reajusteSalarial(input)
