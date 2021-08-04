function leapYear(year) {
    return ((year % 4 == 0 && year % 100 != 0)|| year % 400 == 0);
}

let year = 2020;
// let isLeapYear = leapYear(year);

if(leapYear(year)){
    console.log(year,"Is leap year");
}else{
    console.log(year,"Is not leap year");
}