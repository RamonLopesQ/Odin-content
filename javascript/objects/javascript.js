const container = document.querySelector("#container");

function sumOfTripledEvens(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            const tripleEvenNumber = array[i] * 3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

// Map():

function addOne(num){
    return num + 1;
}
const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);
console.log(mappedArr);

const mappedArr2 = arr.map((num) => num + 1)
console.log(mappedArr2);

// Filter():

function isOdd(num){
    return num % 2 !== 0
}
const oddNums = arr.filter(isOdd);
console.log(oddNums);
console.log(arr);

const oddNums2 = arr.filter((num) => num % 2 !== 0);
console.log(oddNums2);

// Reduce():

const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums);
console.log(arr);

// Example sumOfTripledEvens(array):

const tripledArray = [1,2,3,4,5,6,7,8,9,10];
function sumOfTripledEvens(tripledArray) {
    return tripledArray
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }
console.log(sumOfTripledEvens(tripledArray))