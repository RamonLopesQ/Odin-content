const repeatString = function (string, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += string;
    }
    return result;
  };
  
  module.exports = repeatString;