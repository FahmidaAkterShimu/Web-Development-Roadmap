const products = [
    { name: 'shampoo', price: 300 },
    { name: 'comb', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 },
]

function totalPrice(products) {
    let total = 0;
    for (let product of products) {
        total = total + product.price;
    }
    return total;
}

console.log("Total Price:", totalPrice(products));
