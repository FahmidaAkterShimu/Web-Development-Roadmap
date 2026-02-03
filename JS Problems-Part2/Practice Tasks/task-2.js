// Find the friend with the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let smallName = names[0];
    for (let name of names) {
        if (name.length < smallName.length) {
            smallName = name;
        }
    }
    return smallName;
}

console.log("The smallest name:", smallestName(names));
