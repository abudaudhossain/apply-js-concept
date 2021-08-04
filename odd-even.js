function isEven(number) {
    return number % 2 == 0;
}

function isOdd(number) {
    return number % 2 != 0;
}

let myNumber = 232;
let myResult = isEven(myNumber);
let myResult2 = isOdd(myNumber);

console.log('It is even number.. it is', myResult);
console.log('It is Odd number.. it is', myResult2);
