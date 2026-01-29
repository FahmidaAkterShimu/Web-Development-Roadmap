// Check whether a string contains all the vowels a, e, i, o, u

const fName = 'Education';          // 'Education' contains all the vowels
let letter = fName.toLocaleLowerCase();
console.log(letter);

let vowels = ['a', 'e', 'i', 'o', 'u'];
let result;

for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i], "includes:", letter.includes(vowels[i]));
    result = letter.includes(vowels[i]);
    if (letter.includes(vowels[i]) === false) {
        break;
    }
}

console.log("This string contains all the vowels:", result);