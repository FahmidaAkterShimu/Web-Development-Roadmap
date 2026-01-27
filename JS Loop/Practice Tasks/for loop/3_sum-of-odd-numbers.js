/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

console.log("Sum of all the Odd numbers:")
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

console.log("Sum of all the Even numbers:")
let sm = 0;
for (let n = 51; n <= 85; n++) {
    if (n % 2 === 0) {
        sm = sm + n;
    }
}
console.log(sm);
