const person = {
    name: 'Sakib',
    id: 121,
    address: 'mohakhali',
    isSingle: true,
    friends: ['Rakib', 'Raaz', 'Salman', 'Amir'],
    favMovies: [{ name: 'no. 1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('Acting like Sakib Khan')
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(person);
person.act();
console.log(person.act);
