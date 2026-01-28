const person = {
    name: 'Korim',
    age: 26,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
};

person.salary = 30000;
person['age'] = 27;

const prof = 'profession';
person[prof] = 'devops';

console.log(person);
