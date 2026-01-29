const persons = ['Rakib', 'Sakib', 'Nakib', 'Akib', 'Dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// Sort -->
const numbers = [4, 7, 8, 2, 4, 1, 9];
// console.log(numbers.sort());

const num = [4, 7, 8, 12, 43, 1, 9];
// console.log(num.sort());

const numAsc = num.sort(function (a, b) { return a - b });
console.log(numAsc);

const numDesc = num.sort(function (a, b) { return b - a });
console.log(numDesc);
