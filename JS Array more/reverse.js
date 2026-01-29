// First Way
const num = [1, 2, 3, 4, 5, 6];
console.log(num);

num.reverse();
console.log(num);


//Second Way
const numbers = [23, 434, 56, 87, 34, 6];
const revNumbers = [];
for (const number of numbers) {
    revNumbers.unshift(number);
}
console.log(numbers);
console.log(revNumbers);


// Third way
console.log(numbers);
const revNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const n = numbers[i];
    revNum.push(n);
}
console.log(revNum);
