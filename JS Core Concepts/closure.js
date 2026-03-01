function outerFunction() {
    function innerFunction() {
        console.log('This is the inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result();
// console.log("In the outside", result);

function counter(owner) {
    let count = 0;
    function increment() {
        count++;
        console.log("value of count:", owner, count);
    }
    return increment;
}

const rahimCounter = counter('Rahim');
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
const karimCounter = counter('Karim');
karimCounter();
karimCounter();
rahimCounter();
rahimCounter();


// const count1 = counter();
// console.log(count1);
// count1();
// count1();
// count1();
// count1();
