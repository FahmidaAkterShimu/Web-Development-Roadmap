const sum = (a, b) => {
    console.log(a, b);
}
// sum(5); 

const student = {
    name: "Fahmida",
    age: 22,
};

console.log(student.marks);

delete student.name;
console.log(student.name);


const arr = [1, 4, 6, 3];
console.log(arr[5]);

delete arr[1];
console.log(arr);
console.log(arr[1]);

console.log(typeof undefined);
console.log(typeof null);

function test() {
    console.log('Hello');
    return;
}

const result = test();
console.log(result);
