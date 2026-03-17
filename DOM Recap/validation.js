const number = 23;
if (typeof number === 'number') {
    console.log("value is a number");
}
else {
    console.log("value is not a number")
}

const numbers= [43,44,56,6];
console.log(typeof numbers);
console.log(Array.isArray(numbers));


const student = {
    name: "Monali",
    id: 2
}
console.log(typeof student);
console.log(Array.isArray(student));


// NaN = Not a Number
const num = "3534"
console.log(isNaN(num));    // false
