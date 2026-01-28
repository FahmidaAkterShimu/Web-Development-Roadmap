const country = 'Bangladesh';
console.log(typeof country);

const division = "Dhaka";
console.log(typeof division);

const district = `Dinajpur`
console.log(typeof district);

// const thana = new String('Mirpur');
// console.log(typeof thana);


// Array is mutable --> the array elements are changeable
const numbers = [23, 24, 65, 32, 21, 78];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[0]);
numbers[1] = 11;
console.log(numbers);


//String is immutable --> not changeable
const capital = 'Dha ka';
console.log(capital.length);
console.log(capital[4]);

console.log(capital);
capital[0] = 'P';
console.log(capital);
