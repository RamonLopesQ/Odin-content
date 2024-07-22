const fibonacci = function fibonacci(numMember){
    
    const fibonacciSequence = [0,1];
    for (let i = 2; i <= numMember;i++){
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i - 2];
    }
    (numMember < 0) ? fibonacciSequence[numMember] = "OOPS" : numMember;
    return fibonacciSequence[numMember];
}

module.exports = {fibonacci}