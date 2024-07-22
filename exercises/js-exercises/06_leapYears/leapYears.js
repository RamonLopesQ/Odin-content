const leapYears = function leapYears(year){
    let result;
    ((year % 4 == 0) && ((year % 400 == 0) || (year % 100 != 0))) ? result = true : result = false;
    return result;
}
module.exports = leapYears;