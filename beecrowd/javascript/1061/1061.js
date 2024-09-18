var input = require('fs').readFileSync('stdin', 'utf8').split('\n');

let diaInicial = input[0].trim()
let horaInicial = input[1].trim()
let diaFinal = input[2].trim()
let horaFinal = input[3].trim()

let initialDay = parseInt(diaInicial.replace('Dia ', ''))
let finalDay = parseInt(diaFinal.replace('Dia ', ''))
let inicialHour = horaInicial.replace(/\s+/g, '')
let finalHour = horaFinal.replace(/\s+/g, '')

let startDate = new Date(`2024-09-${String(initialDay).padStart(2, '0')}T${inicialHour}`);
let endDate = new Date(`2024-09-${String(finalDay).padStart(2, '0')}T${finalHour}`);

let diffInMs = endDate - startDate;

// Convertendo para dias, horas, minutos e segundos
let seconds = Math.floor((diffInMs / 1000) % 60);
let minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
let hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
let days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

console.log(days,'dia(s)')
console.log(hours,'hora(s)')
console.log(minutes,'minuto(s)')
console.log(seconds,'segundo(s)')
