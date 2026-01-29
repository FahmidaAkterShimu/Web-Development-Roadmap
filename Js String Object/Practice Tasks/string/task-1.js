// Count how many times a string has the letter a

const fName = 'Fahmida Akter';
let count = 0;
for (let letter of fName) {
    console.log(letter);
    if (letter === 'a'){
        count++;
    }
}
console.log("Count of 'a' is", count);
