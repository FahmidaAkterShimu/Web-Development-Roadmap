function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

console.log("Feet:", inchToFeet(62));

function inchToFeet2(inch) {
    const feet = parseInt(inch / 12);
    const inchRemaining = inch % 12;
    const result = feet + ' ft ' + inchRemaining + ' inch ';
    return result;
}

console.log("Feet:", inchToFeet2(62));

function mileToKm(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

console.log("Kilometer:", mileToKm(120),"km");
