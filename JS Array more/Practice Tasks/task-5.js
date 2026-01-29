// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const numbers = [1, 2, 3];
const copy = [];

for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
        copy.push(99);
    }
    else { 
        copy.push(numbers[i]); 
    }
}

console.log("Original:", numbers);
console.log("Copy:", copy);
