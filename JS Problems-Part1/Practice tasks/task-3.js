// Write a function to count the number of vowels in a string.

function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const chars = string.toLocaleLowerCase().split("");
    console.log(chars);
    let count = 0;
    for (let char of chars) {
        if (vowels.includes(char) === true) {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels in the given string:", countVowels("I want to be a web developer"));
