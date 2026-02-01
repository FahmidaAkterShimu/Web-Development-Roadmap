// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
    const digits = binaryString.split("");
    let count = 0;
    for(let digit of digits) {
        if (digit === '0') {
            count++;
        }
    }
    return count;
}

console.log("There are", count_zero("010100110"), "0's in the given string.");
