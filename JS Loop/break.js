// Break: End the loop

// For loop
for(let i = 0; i < 15; i++){
    console.log(i);
    if(i >= 10){
        break;
    }
}

console.log('life after break')



// While loop
let n = 55;
while(n > 25){
    console.log(n);
    n--;
    if(n < 50){
        break;
    }
}
