/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (celsius) * (5/9) + 32;
};