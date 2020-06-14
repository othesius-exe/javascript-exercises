const leapYears = function(year) {

    if (year % 4 != 0) {
        return false;
    } else if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 != 0) {
                return false;
            }
        }
    } return true;
}

module.exports = leapYears
