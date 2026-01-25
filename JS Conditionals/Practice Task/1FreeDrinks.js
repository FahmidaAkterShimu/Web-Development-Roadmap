/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burger = 501;
var cokePrice;

if(burger > 500){
    cokePrice = 0;
    console.log("You got free coke");
}
else{
    cokePrice = 30;
    console.log("Coke price is 30 taka");
}
