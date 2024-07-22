const convertToCelsius = function convertToCelsius(tempF){
    let result = Math.round(((tempF-32) * (5/9)) * 10) / 10;
    return result;
}

const convertToFahrenheit = function convertToFahrenheit(tempC){
    let result = Math.round((tempC * 1.8 + 32) * 10) / 10;
    return result; 
}

module.exports = {convertToCelsius, convertToFahrenheit};