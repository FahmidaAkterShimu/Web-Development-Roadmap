/*
What will be the result of the following code:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/

const a = isNaN('11');
console.log(a);
/*
>> '11' is a string, but JavaScript tries to convert it to a number.
>> '11' can be successfully converted to the number 11.
>> Since 11 is a valid number, it is NOT NaN. 
*/


const b = isNaN(2-10);
console.log(b);
/*
>> 2 - 10 equals -8
>> -8 is a valid number.
>> Since it’s a number, it is not NaN.
*/
