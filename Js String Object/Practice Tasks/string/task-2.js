// Count how many times a string has the letter a or A

// First Solution
/*
const fName = 'Fahmida Akter';
let count = 0;
for (let letter of fName.toLocaleLowerCase()) {
    console.log(letter);
    if (letter === 'a') {
        count++;
    }
}
console.log("Count of 'a' is", count);
*/

// Second Solution
const fName = 'Fahmida Akter';
let count = 0;
for (let letter of fName) {
    console.log(letter);
    if (letter === 'a' || letter === 'A') {
        count++;
    }
}
console.log("Count of 'a' is", count);
