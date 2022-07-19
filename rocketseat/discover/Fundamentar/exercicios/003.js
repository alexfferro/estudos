/**
 * Crie um programa tenha como entrada as receitas e as despesas de uma familia
 * e depois crie uma função que ira calcular se o saldo da familia ta positivo ou negativo
 * 
 */

let family = {
  incomes: [1200],
  expenses: [201.35, 86.50, 50, 1235.12]
}

function sum(arr){
  let sumTotal = 0;
  for(item of arr){
    sumTotal += item
  }
  return sumTotal;
}

function calculateBalance(object){
  let calculateIncomes = sum(object.incomes);
  let calculateExpenses = sum(object.expenses);
  let balanceFamily = calculateIncomes - calculateExpenses.toFixed(2);
  let isOk = balanceFamily >= 0;

  if (isOk) {
    console.log(`Seu saldo está positivo. R$ ${balanceFamily}`)
  } else {
    console.log(`Seu saldo esta negativo, está na hora de poupar gastos. Atualmente com R$ ${balanceFamily}`)
  }
}

calculateBalance(family)