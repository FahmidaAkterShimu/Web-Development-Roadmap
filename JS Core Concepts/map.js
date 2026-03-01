const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for (const num of numbers) {
//     doubled.push(num * 2);
// }
// console.log(doubled);


// const doubledIt = num => num * 2;
// const doubled = numbers.map(doubledIt)
// console.log(doubled);


const doubled = numbers.map(num => num * 2);
console.log(doubled);


const squared = numbers.map(num => num * num);
console.log(squared);


const friends = ['zaved', 'naved', 'khaled', 'sajed'];
const friendLetter = friends.map(frnd => frnd[0]);
console.log(friendLetter);


const products = [
    { name: 'laptop', price: 45000 },
    { name: 'phone', price: 15000 },
    { name: 'tablet', price: 25000 },
];

const prices = products.map(product => product.price);
console.log(prices);


const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    console.log(index, upperCaseName, productsArray);
    return upperCaseName;
});

console.log(names);
