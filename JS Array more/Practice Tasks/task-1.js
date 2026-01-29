// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColors = [];
for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    revColors.unshift(color);
}
console.log(revColors);
