// (==) --> Loose Equality

console.log(2 == 2);
console.log(2 == '2');          // convert the string '2' to number 2
console.log(1 == true);         // true is converted to 1
console.log(0 == false);        // false is converted to 0
console.log(true == '1');       // true and '1' both are converted to number
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);
console.log([] == '');
console.log([5] == '6');         // [] is converted to string ''
console.log({} == {});
console.log([] == []);
