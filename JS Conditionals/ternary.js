/*
=========== Ternary --> three parts =========
                ?      :
Condition ? do something when true : do something when false
*/

const age = 17;
if(age >= 18){
    console.log('You can vote.');
}
else{
    console.log("You can't");
}

age >= 18 ? console.log('You can vote.') : console.log("You can't")

//============================
let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);

// Ternary:
price = isLeader === true ? 0 : price + 100;


// ================= Semi-advanced ternary ================
if(isLeader == true){
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 100;
}

// Ternary:
// price = isLeader == true ? price > 1000 ? price/2 :  0 : price + 100;

price = isLeader == true ?
    price > 1000 ? price/2 :  0 
: price + 100;
