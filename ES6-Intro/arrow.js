console.log(add(20, 40));
// function declaration
function add(num1, num2) {
    return num1 + num2;
};
console.log(add(20, 40));


// console.log(add2(30, 40));
// function expression
const add2 = function (num1, num2) {
    return num1 + num2;
}
console.log(add2(30, 40));


// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 40));

const multiply = (a, b) => a * b;

const tenTimes = x => x * 10;
const tenTimes2 = x => (x) * 10;
const getPi = () => 3.1416;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isEven = num => num % 2 === 0;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
