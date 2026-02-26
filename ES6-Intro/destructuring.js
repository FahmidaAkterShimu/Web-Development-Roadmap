// const product = {
//     name: 'iPhone',
//     price: 1988,
//     description: 'A smartphone by Apple'
// };

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;

// const product = {name: 'iPhone', price: 1988, brand: 'Apple'};
const { name, price: phonePrice, camera } = { name: 'iPhone', price: 1988, brand: 'Apple', camera: '48mp' };
console.log(name);
// console.log(price);
console.log(phonePrice);
console.log(camera);

// const numbers = [10,20];
const [first, second] = [10, 20, 456, 565];
console.log(first, second);

const [height, weight] = numbers;