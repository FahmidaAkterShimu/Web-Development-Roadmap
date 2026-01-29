// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'
const sentence = statement.split(" ");
const words = [];
let revSentence;
for (let word of sentence) {
    words.unshift(word);
}
revSentence = words.join(" ");
console.log(revSentence);
