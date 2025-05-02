// C = (F - 32) * 5/9
// F  = (C * 9/5) + 32

const convertToCelsius = function(fahrenheit) {
  let celcius = parseFloat(((fahrenheit - 32) * (5/9)).toFixed(1))
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = parseFloat(((celcius * (9/5)) + 32).toFixed(1))
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
