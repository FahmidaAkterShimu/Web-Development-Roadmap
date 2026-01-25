/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 60;
let students = false;
let ticketPrice = 800;
var discount;

if(age < 10){
    //Free
    ticketPrice = 0;    
    console.log("Free for children.")
}

else if(age > 10 && students){
    //50% discount
    discount = ticketPrice * 50/100;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice);
}

else if(age >= 60){
    //15% discount
    discount = ticketPrice * 15/100;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice);
}
else{
    //Regular ticket fare
    console.log(ticketPrice);
}
