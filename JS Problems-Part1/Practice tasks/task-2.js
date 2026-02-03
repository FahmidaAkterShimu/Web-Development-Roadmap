/* You are given an array of numbers. Count how many times a number is repeated in the array.

sample-input: 
numbers = [5, 6, 11, 12, 98, 5]
find: 5
output: 2


sample-input:
numbers = [5, 6, 11, 12, 98, 5]
find: 25
output: 0 */

function numberCounts(numbers, find) {
    let count = 0;
    for (let number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}

console.log(numberCounts([5, 6, 11, 12, 98, 5], 5));
console.log(numberCounts([5, 6, 11, 12, 98, 5], 25));
