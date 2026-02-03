// Find the lowest number in the array below.

const numbers = [167, 190, 120, 165, 137];

function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (let number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}

console.log("The Lowest number:", lowestNumber(numbers));
