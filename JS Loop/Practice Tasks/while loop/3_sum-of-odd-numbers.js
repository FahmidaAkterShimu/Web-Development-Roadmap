/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

console.log("Sum of all the Odd numbers:")
let i = 81;
let sum = 0;
while(i <= 131){
    if( i % 2 !== 0){
       sum = sum + i;
    }
    i++;
}
console.log(sum);



/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

console.log("Sum of all the Even numbers:")
let n = 206;
let sm = 0;
while(n <= 311){
    if( n % 2 === 0 ){
        sm = sm + n;
    }
    n++;
}
console.log(sm);
