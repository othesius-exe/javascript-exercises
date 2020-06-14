const repeatString = function(string, number) {
    let repeatStringArray = [];
    let timesToRepeat = number;
    let stringToRepeat = string;
    let repeatedString = ``;
    
    if (timesToRepeat >= 0) {
        let i = 0;
        while (i < timesToRepeat) {
            repeatStringArray.push(stringToRepeat);
            i++
        } repeatedString = repeatStringArray.join('');
    } else {
        repeatedString = 'ERROR'
    } return repeatedString;
}

module.exports = repeatString
