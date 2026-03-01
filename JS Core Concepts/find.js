const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Apel', age: 21 },
    { name: 'Bangi', age: 24 },
    { name: 'Anarosh', age: 23 },
    { name: 'Bel', age: 23 },
    { name: 'Komola', age: 26 },
    { name: 'Malta', age: 25 },
]

const student = students.find(stdn => stdn.name === 'Bel');
console.log(student);

const stu = students.find(stdn => stdn.name[0] === 'A');
console.log(stu);

