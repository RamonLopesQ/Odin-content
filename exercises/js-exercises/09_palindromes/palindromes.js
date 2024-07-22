const palindromes = function palindromes(word){
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
    const onlyLetters = word.toLowerCase().split('').filter((letter) => alphanum.includes(letter)).join('')
    const reverseWord = onlyLetters.split('').reverse().join('');
    let result = (reverseWord === onlyLetters) ? true : false;
    return result;
}

module.exports = {palindromes}