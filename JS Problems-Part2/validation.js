// Number parameters
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, 'seven');
console.log(result);

// String parameters
function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return "Please provide a string"
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Fahmida', 4);
console.log(full);

// object parameter
function getPrice(product) {
    if (typeof product !== 'object') {
        return "Please provide an object";
    }
    const price = product.price;
    return price;
}

// const price = getPrice({ name: 'comb', price: 100, color: 'pink' });
const price = getPrice(5);
console.log(price);


// Array parameter
function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return "Please provide an array";
    }
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}

console.log(getSecond(24,45,54))
