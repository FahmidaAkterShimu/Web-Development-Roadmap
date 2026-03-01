const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const friends = ['zaved', 'naved', 'khaled', 'nakib', 'sajed', 'nahid'];

const Nfriends = friends.filter(frd => frd[0] === 'n');
console.log(Nfriends);


const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Apel', age: 21 },
    { name: 'Bangi', age: 24 },
    { name: 'Anarosh', age: 23 },
    { name: 'Bel', age: 23 },
    { name: 'Komola', age: 26 },
    { name: 'Malta', age: 25 },
]

const olderStudents = students.filter(stdn => stdn.age > 24);
console.log(olderStudents);
