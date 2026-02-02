// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;
for (let prop in student) {
    count++;
    console.log(count, ":", prop)
}
console.log("Total properties:", count);
