function add(price1, price2){
    return price1 + price2;
}

const bill = add(20, 40);
console.log("Bill: ", bill);

function doMath(num1,num2){
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mult = sum * sub;
    return mult/2;
}

const result = doMath(10, 5);
console.log("Math result:", result);
