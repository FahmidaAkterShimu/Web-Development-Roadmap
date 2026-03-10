const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem('number', number);
};



const setObjectToLS = () => {
    const customer = { name: 'rohim khalu', products: 3, price: 75 };
    console.log(customer);

    // ------- To convert object into String --------
    // const customerString = JSON.stringify(customer);
    // console.log(customerString);

    // ------- To convert String into object --------
    // console.log(JSON.parse(customerString));

    const customerJSON = JSON.stringify(customer);
    localStorage.setItem('customer', customerJSON);
};
// setObjectToLS();

const readObjectFromLS = () => {
    const customerJSON = localStorage.getItem(('customer'));
    const customer = JSON.parse(customerJSON);
    console.log(customer);
};


const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number);
};


const arr = ['a', 'b', 'c'];
console.log(arr.toString());

