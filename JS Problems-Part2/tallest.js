const heights = [65, 66, 68, 72, 78, 60];

function getMax(numbers) {
    let max = numbers[0];
    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

console.log("The maximum value:", getMax([65, 66, 68, 72, 78, 60]));
