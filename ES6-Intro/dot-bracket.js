const employee = {
    name: 'John Doe',
    1: 'desk one',
    'home-address': " 123 fsdf",
    salary: 40000,
    position: 'Software Engineer'
};

//dot notation
console.log(employee.name);
// console.log(employee.1);
// console.log(employee.home-address);


// bracket notation
console.log(employee["home-address"]);
console.log(employee[1]);
console.log(employee['name']);
console.log(employee['salary']);

const key = 'position';
console.log(employee[key]);
