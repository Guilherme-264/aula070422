/* celsius-to-fahrenheit.js */
const converters = require('./converter.js');

// Pega a 3ª entrada de uma lista de argumentos
const celsiusInput = process.argv[2]; 
const fahrenheitValue =  converters.celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} graus Celsius = ${fahrenheitValue} graus Fahrenheit`);