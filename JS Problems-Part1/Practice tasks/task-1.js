// Write a function to convert temperature from Celsius to Fahrenheit.

// F = C x 9/5 + 32
// C = (F - 32) x 5/9

function celsiusToFahrenheit(celsius) {
    let F;
    F = (celsius * 9 / 5) + 32;
    return F;
}

console.log(celsiusToFahrenheit(100));
