var  orangePrice = 20;
var chocolate = 0.5;
// var applePrice = '26';
var applePrice = parseInt('26');

var applePrice = parseInt('sdfsdfsdfs');    // NaN = Not a Number

var applePrice = parseInt('26.5');
console.log(applePrice);

var applePrice = parseFloat('26.5');
console.log(applePrice);


console.log(typeof orangePrice);
console.log(typeof chocolate);
console.log(typeof applePrice);
console.log(orangePrice + chocolate);
console.log(orangePrice + applePrice);

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(3));

const num = -50/0;
console.log(num);
