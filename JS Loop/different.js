// Even numbers:
console.log("Even numbers from 1 to 20");

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


// Odd numbers:
console.log("Odd numbers from 1 to 20");

for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


console.log("Divisible by 3 ");

for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

console.log("Divisible by 3 or 5 ");

for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

console.log("Divisible by 3 ond 5 ");

for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

// Sum
let sum = 0;

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        sum = sum + i;
    }
}

console.log("Summation of the numbers from 1 to 20 that are divisible by 3 is", sum);
