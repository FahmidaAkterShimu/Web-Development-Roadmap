/* Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */

function longWord(string) {
    const words = string.split(" ");
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longWord("I am learning Programming to become a programmer"));
