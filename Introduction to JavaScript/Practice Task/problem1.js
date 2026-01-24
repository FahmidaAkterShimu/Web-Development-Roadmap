/*
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
*/

var cash = 1000;
var orangePrice = 350;
var applePrice = 350;

var totalCost = orangePrice + applePrice;
var returnMoney = cash - totalCost;
console.log(returnMoney);