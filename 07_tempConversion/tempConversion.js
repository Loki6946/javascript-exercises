const convertToCelsius = function(temperature) {
  const celcius = (temperature - 32) * (5 / 9);
  return celcius === 0 ? celcius : parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = (temperature * 9/5) + 32;
  return fahrenheit === 0 ? fahrenheit : parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
