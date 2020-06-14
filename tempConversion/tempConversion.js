const ftoc = function(temp) {
  celsiusTemp = (temp - 32) * .556;
  return roundedToFixed(celsiusTemp, 1);
}

const ctof = function(temp) {
    fahrenheitTemp = (temp * 1.8) + 32;
    return roundedToFixed(fahrenheitTemp, 1);
}

function roundedToFixed(decimal, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return (Math.round(decimal * multiplier) / multiplier);
}

module.exports = {
  ftoc,
  ctof
}
