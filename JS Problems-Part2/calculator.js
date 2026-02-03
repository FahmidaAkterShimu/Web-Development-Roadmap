function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else {
        return "Only 'add', 'subtract', 'multiply' and 'divide' operation is allowed"
    }
}

console.log("Calculator operation's result:", calculator(3, 7, 'add'));
console.log("Calculator operation's result:", calculator(3, 7, 'subtract'));
console.log("Calculator operation's result:", calculator(3, 7, 'multiply'));
console.log("Calculator operation's result:", calculator(3, 7, 'divide'));
