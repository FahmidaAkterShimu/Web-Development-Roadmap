// Capitalize Every first Letter of each word in a String

const string = "I am learning web development."
let split = string.split(' ');
console.log(split);
let capWords = [];

for (i = 0; i < split.length; i++) {
    let firstChar = split[i].slice(0, 1).toLocaleUpperCase();
    let rest = split[i].slice(1);
    let word = firstChar + rest;
    capWords.push(word);
}
let finalString = capWords.join(" ");
console.log(finalString);
