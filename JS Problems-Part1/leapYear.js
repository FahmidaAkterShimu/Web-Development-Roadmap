// Simple logic
// the year is divisible by 4:
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log("Leap Year:", isLeapYear(2100));

// Those year that is not divisible by 100, if the year is divisible by 4, then it will be leap year
// or, the year is divisible by 100 and 400, then it will be leap year

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}
