function add(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

add(10);

function add2(num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

add2(10);

function fullName(first, last= ""){
    const name = first + " " + last;
    console.log(name);
}

fullName("Kamruzaman");

function multiply(num1, num2=1){
    const result = num1 * num2;
    console.log(result);
}

multiply(50);

