const sentence = 'I am learning Web Dev.';
console.log(sentence);

// First Solution:
let reverse = '';
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);


// Second Solution:
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);


// Shortcut Solution:
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
