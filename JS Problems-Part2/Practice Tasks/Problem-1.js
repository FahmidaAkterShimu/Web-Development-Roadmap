/*
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces
*/

function wordFrequency(sentence) {
    let words = sentence.toLocaleLowerCase().split(" ");
    console.log(words);
    let wordsCount = {};
    for (let word of words) {
        if(wordsCount.hasOwnProperty(word)){
            wordsCount[word]++;
        }
        else{
            wordsCount[word] = 1;
        }
    }
    return wordsCount;
}

const sentence = "I love JS and I love coding and JS is fun";
console.log("Output", wordFrequency(sentence));
