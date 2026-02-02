// There is some functions or methods in JavaScript's default Object "Math"
// Just like this:
/*
const Math = {
    min: function min(num1, num2) {
        if (num1 < num2) {
            return num1;
        }
        else {
            return num2;
        }
    }
}

console.log(Math.min(2,1));
*/

const min = Math.min(23, 56, 44, 2, 7, 3, 2, 1, 0, -99);
console.log(min);

const max = Math.max(23, 56, 44, 2, 7, 3, 2, 1, 0, -99);
console.log(max);

console.log(Math.PI);              // Shows the value of PI
console.log(Math.abs(4-8));        // Shows the gap between two numbers
console.log(Math.round(12.45));    // shows the round number
console.log(Math.round(12.5645)); 
console.log(Math.floor(12.5645)); 
console.log(Math.ceil(12.45)); 
console.log(Math.random());         // Gives any number between 0 and 1
console.log(Math.random()*10);      // Gives any number betn 0 to 10
console.log(Math.round(Math.random()*10));    // Gives any round number btn 0 to 10
