const ftoc = function(temp) {
  let celsius = Math.round((temp - 32) * (5/9) * 10) / 10;
  return celsius;
}

const ctof = function(temp) {
    let fahrenheit = Math.round((temp * (9/5) + 32) * 10) / 10;
    return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
