const palindromes = function(string) {
    let drome = string;
    let punc = [`,`, `?`, `!`, `.`, `;`, `:`, `'`, `"`];
    
    let array1 = drome.split('');
    for (i = 0; i < array1.length; i++ ) {
      for (j = 0; j< punc.length; j++) {
        if (array1.includes(punc[j])) {
          let itemIndex = array1.indexOf(punc[j]);
          array1.splice(itemIndex, 1);
        }
      }
    }
    let array2 = [];
    array2.push(...array1);
    array2.reverse();
    let forwardString = array1.join(``).toLowerCase().replace(/\s+/g,'');
    let reverseString = array2.join(``).toLowerCase().replace(/\s+/g,'');

    if(forwardString === reverseString) {
        return true;
    } else {
        return false;
    }

}

module.exports = palindromes
