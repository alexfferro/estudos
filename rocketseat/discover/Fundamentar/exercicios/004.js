/**
 * Transformar Celsius em Fahrenheit
 * 
 * Crie uma função que receba uma string em celsius ou fahrenheit
 * e faça a transformação de uma unidade para outra.
 * 
 * C = (F - 32) * 5/9
 * F = C * 9/5 + 32
 * 
 */

// Modelo de entrada transform(50F)

function celsiusToFahrenheit(celsius){
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit){
  let celsius = (fahrenheit - 32) * 5/9
  return celsius;
}

function transform(str){
  let value = str.split('');
  let temperature = value.pop();
  let valueTemperature = value.join('');
  console.log(value, temperature, valueTemperature);
  if ( temperature == 'F') {
    return fahrenheitToCelsius(Number(valueTemperature)) + 'C';
  } else {
    return celsiusToFahrenheit(Number(valueTemperature)) + 'F';
  }
}

console.log(transform('68F'))