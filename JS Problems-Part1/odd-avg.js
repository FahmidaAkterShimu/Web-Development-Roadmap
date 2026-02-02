function oddAvg(numbers) {
    const oddNum = [];
    let sum = 0;
    let avg;
    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNum.push(number);
            sum = sum + number;
        }
    }
    console.log(oddNum);
    avg = sum / oddNum.length;
    return avg;
}

console.log("Average of odd numbers:", oddAvg([1,35,54,23,6,7,8]));
