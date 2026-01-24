/* 
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
*/
var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

console.log(totalMarks.toFixed(2));

var avg = totalMarks/5;

console.log(avg.toFixed(2));