const jim = 62;
const tim = 65;
const kim = 45;

if (jim > tim && jim > kim) {
    console.log("Jim get the highest marks");
}
else if (tim > jim && tim > kim) {
    console.log("Tim get the highest marks")
}
else {
    console.log("Kim get the highest marks")
}

// Using default object and method
const max = Math.max(12, 4, 5, 34, 66, 5, 54);
console.log("Max using Math.max", max);
