function LeapYear(year){
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
        return true
    } else {
        return false
    }
}
console.log(LeapYear(2016))

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));

// if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )