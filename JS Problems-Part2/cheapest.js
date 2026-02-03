const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xaomi', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 310000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' }
]

function cheapestPhone(phones) {
    let min = phones[0];
    for (let phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

console.log(cheapestPhone(phones));
