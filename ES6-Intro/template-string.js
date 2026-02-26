const firstName = "Fahmida";
const lastName = "Akter";

const aboutMe = `My name is ${firstName} ${lastName}`
console.log(aboutMe);

const giveMe = `give me ${10 + 20 + 30} taka`;
console.log(giveMe);

function getCardHTML(name, description, price) {
    const div = `
    <div class ="card">
    <h2>${name.toUpperCase()}</h2>
    <p>Price: $ ${price}</p>
    <p>${description}</p>
</div>
    `
};

