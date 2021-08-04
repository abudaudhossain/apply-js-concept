function feets (inches) {
    return inches / 12;
}

function getKilomiter(miles) {
    let km = miles * 1.60934;
    return km;
}

var myInches = 123;

myFeets = feets(myInches);
console.log(myFeets, "feet");

let mymile = 230;
let myKolomitar = getKilomiter(mymile);
console.log(mymile, "is that : ", myKolomitar);

