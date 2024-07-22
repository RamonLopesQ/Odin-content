function add7(number){
    return number + 7;
}
function multiply(number1,number2){
    return number1 * number2;
}

function capitalize(string){
    return string[0].toUpperCase() + string.substring(1);
}

function lastLetter(string){
    return string.slice(length-1);
}

console.log(add7(7));
console.log(multiply(5,2));
console.log(capitalize("farofa"));
console.log(lastLetter("hipogrifo"));