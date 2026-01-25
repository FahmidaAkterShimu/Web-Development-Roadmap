const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = false;

if(salary > 20000 && height > 66){
    console.log("Best groom")
}
else{
    console.log('Find another one')
} 

//=====================================

if(salary >= 25000 || height > 72 || isBCS == true){
    console.log("Good groom")
}
else{
    console.log('Find another one')
} 

//================Complex Condition===============

if((salary >= 25000 && hasCar == true) || isBCS == true){
    console.log("Good groom")
}
else{
    console.log('Find another one')
} 
