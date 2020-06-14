const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR";
    } else if (num1 <= 0 || num2 <= 0) {
        return "ERROR";
     } else if (num1 > num2) {
        let i = num1;
        while (i >= num2) {
            sum += i;
            i--;
        }
    } else if (num1 < num2) {
        let i = num1;
        while (i <= num2) {
            sum += i;
            i++;
        }
    } 
    return sum;

    }

module.exports = sumAll
