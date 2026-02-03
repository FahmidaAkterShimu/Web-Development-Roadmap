const prices = [20000, 16000, 50000, 100000, 12000, 30000];

function getMin(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log("The minimum number:", getMin([20000, 16000, 50000, 100000, 12000, 30000]));
