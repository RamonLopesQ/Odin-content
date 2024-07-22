const add = function add(num1, num2){
    return num1 + num2;
}

const subtract = function subtract(num1,num2){
    return num1 - num2;
}

const sum = function sum(array){
    return array.reduce((total,num) => {
        return total += num;
    }, 0);
}

const multiply = function multiply(array){
    return array.reduce((total,num) => {
        return total *= num;
    },1);
}

const power = function power(num1, num2){
    return Math.pow(num1,num2);
}

const factorial = function factorial(num){
    let total = 1;
    while (num > 0){
        total *= num
        num--
    }
    return total;
}

module.exports = {add,subtract,sum,multiply,power,factorial}