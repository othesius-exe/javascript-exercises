const reverseString = function(string) {
    let stringArray = Array.from(string);
    let reverseArray = [];
    let reversedString = '';

    let i = 0;
    let j = stringArray.length;

    while (i <= stringArray.length) {
        reverseArray.push(stringArray[j]);
        i++;
        j--;
    }

    reversedString = reverseArray.join('');
    return reversedString;

}

module.exports = reverseString
