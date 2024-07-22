const sumAll = function sumAll(numIni,numFim){
    let result = 0;
    if ((numIni > 0) && (numFim > 0)){
        if ((typeof numIni === "string") || (typeof numFim === "string")){
            result = "ERROR";
        } else if (numIni > numFim){
            for (let i = numIni; i >= numFim; i--){
                result += i;
            }
        } else if (numIni < numFim){
            for (let i = numFim; i >= numIni; i--){
                result += i;
            }
        } else {
            result = "ERROR";
        }
    } else {
        result = "ERROR";
    }
    return result;
}
module.exports = sumAll;