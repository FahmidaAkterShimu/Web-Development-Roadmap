const person = {
    name: 'Korim',
    age: 26,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
};

// console.log(person);


// Dot Notation
console.log(person.profession);
const income = person.salary;
console.log(income);

// Bracket Notation
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

console.log(person['fav places']);

const prof = 'profession';
console.log(person[prof]);
