/*
first 100 --> 100
101 to 200 --> 90
above 200 --> 70
*/

function layerDiscountedTotal(quantity) {
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;
    if (quantity <= 100) {
        const total = quantity * first100price;
        return total;
    }
    else if (quantity <= 200) {
        const total = (100 * first100price) + (quantity - 100) * second100price;
        return total;
    }
    else {
        const total = (100 * first100price) + (100 * second100price) + (quantity - 200) * above200price;
        return total;
    }
}

console.log("Total price with discount:", layerDiscountedTotal(250));
