// Use a for...of loop to concatenate all the elements of an array into a single string.

const numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let string = "";
for (let num of numbers) {
    string = string + num;
}
console.log(string);
