// For a given string, check the characters number even or not
// Function with String parameter
function evenString(str) {
    if (str.length % 2 === 0) {
        return true;
    }
    return false;
}

const isEven = evenString("I am very strong. I will never give up")
console.log("This String's characters number is Even:", isEven);


// Function wih Boolean parameter
function doubleOrTriple(number, double) {
    if (double) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

// Function with Array parameter
function numberOfElements(numbers) {
    const len = numbers.length
    return len;
}

numberOfElements([12, 4, 5, 23, 56]);

// Function with Object
function getAge(person) {
    const age = person.age;
    return age;
}

let age = getAge(person = {
    name: "Rafiq",
    age: 40,
    gender: "Male"
})
console.log("Age", age);
