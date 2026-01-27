// Continue: skip rest of the code for this iteration

for(let i = 1; i < 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}


console.log("Using while loop:")

let n = 1;
while(n < 50){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}
