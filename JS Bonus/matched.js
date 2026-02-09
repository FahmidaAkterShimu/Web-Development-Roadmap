const numbers = [45, 56, 76, 34, 91];

// for(let i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'xiaomi phone', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'mac book air', price: 19000 },
    { id: 4, name: 'lenovo laptop', price: 19000 },
    { id: 5, name: 'dell laptop', price: 19000 },
    { id: 6, name: 'hp laptop', price: 19000 },
    { id: 7, name: 'samsung phone', price: 19000 },
    { id: 8, name: 'nokia phone', price: 19000 },
    { id: 9, name: 'Phone one', price: 19000 },
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){

    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        };
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);
