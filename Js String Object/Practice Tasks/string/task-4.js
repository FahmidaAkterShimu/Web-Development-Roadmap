// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let string = 'Exercise';
let newString;

if (string.includes('x')) {
    newString = string.replace('x', 'y');
}
else if (string.includes('X')) {
    newString = string.replace('X', 'Y');
}
else {
    console.log("There is no 'x' or 'X'");
}

console.log(string);
console.log(newString);
