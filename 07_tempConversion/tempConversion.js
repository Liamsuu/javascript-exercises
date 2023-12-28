const convertToCelsius = function (temperature_f) {
  return Math.round((((temperature_f - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (temperature_c) {
  return Math.round((temperature_c * 1.8 + 32) * 10) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
