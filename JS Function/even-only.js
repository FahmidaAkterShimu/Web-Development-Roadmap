// Create function that will return only the even numbers
// Return the sum of even numbers

function sumEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    console.log("Only Even Numbers:", evenNumbers);

    let sum = 0;
    for (let i = 0; i < evenNumbers.length; i++) {
        sum = sum + evenNumbers[i];
    }
    return sum;
}

console.log("Sum of even numbers:", sumEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
