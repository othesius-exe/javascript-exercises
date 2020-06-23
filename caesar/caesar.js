const caesar = function(string, shift) {
    let currentCode;
    let cipher = ``;

    if(shift > 0) {
      for(i = 0; i < string.length; i++) {
        currentLetter = string[i];
        currentCode = string.charCodeAt(i);
        cipher += handlePositives(currentCode, shift);
      }
    } else if (shift < 0) {
        for(i = 0; i < string.length; i++) {
            currentLetter = string[i];
            currentCode = string.charCodeAt(i);
            cipher += handleNegatives(currentCode, shift);
        }
    } return cipher;
}

function handlePositives(code, shift) {
    for (shift; shift > 0; shift--) {
        if (code >= 65 && code < 90) { 
            code++;
        } else if (code == 90) {
            code = 65;
            //code++;
        } else if (code >= 97 && code < 122) {
            code++;
        } else if (code == 122) {
            code = 97;
            //code++;
        } else {
            return newLetter = String.fromCharCode(code);
        }
    } return newLetter = String.fromCharCode(code);
}
  
function handleNegatives (code, shift) {
    for (shift; shift < 0; shift++) {
        if (code > 65 && code <= 90) { 
            code--;
        } else if (code == 65) {
            code = 90;
            //code--;
        } else if (code > 97 && code <= 122) {
            code--;
        } else if (code == 97) {
            code = 122;
            //code--;
        } else {
            return newLetter = String.fromCharCode(code);
        }
    } return newLetter = String.fromCharCode(code);
}
  
module.exports = caesar
