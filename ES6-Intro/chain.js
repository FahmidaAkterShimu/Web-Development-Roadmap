const employee = {
    name: 'John Doe',
    1: 'desk one',
    'home-address': " 123 Main St",
    salary: 40000,
    family: {
        father: 'Richard Doe',
        // mother: {
        //     name: 'Jane Doe',
        //     age: 55
        // }
    },
    position: 'Software Engineer'
};

const value = employee.name;
// console.log(employee.family.mother.age);
console.log(employee.family?.mother?.age); //optional chaining

