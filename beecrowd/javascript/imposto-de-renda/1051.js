var renda = parseFloat(require('fs').readFileSync('stdin', 'utf8'));

if (renda <= 2000) {
    console.log('Isento')
}else {
    if (renda > 4500) {
        console.log('R$',rendaNivel4(renda).toFixed(2))
    }else if (renda > 3000.01 & renda <= 4500){
        console.log('R$', rendaNivel3(renda).toFixed(2))
    }else{
        console.log('R$', rendaNivel2(renda).toFixed(2))
    }
}

function rendaNivel4(renda){
    let rendaNivel4 = renda - 4500
    let rendaAux = 4500
    rendaNivel4 *= 0.28
    return rendaNivel3(rendaAux, rendaNivel4)
}

function rendaNivel3(renda, imposto=0) {
    let rendaNivel3 = renda % 3000
    renda-= rendaNivel3
    rendaNivel3 *= 0.18
    imposto += rendaNivel3
    return rendaNivel2(renda, imposto)
}

function rendaNivel2(renda, imposto) {
    imposto = typeof imposto !== "undefined" ? imposto : 0;
    let rendaNivel2 = renda % 2000
    renda-= rendaNivel2
    rendaNivel2 *= 0.08
    imposto += rendaNivel2
    return (renda, imposto)
}