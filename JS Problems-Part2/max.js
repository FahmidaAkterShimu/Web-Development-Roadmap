const disha = 30;
const salman = 57;

if (disha > salman) {
    console.group("Disha will get the prize");
}
else {
    console.log("Salman will get the prize");
}

//inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log(getMax(34, 67));

const max1 = getMax(45, 88);
const max2 = getMax(87, 32);
console.log('max of two is:', getMax(max1, max2));
