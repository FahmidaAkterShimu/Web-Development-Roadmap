// parent node
const mainContainer = document.getElementById('main-container');

// create child node
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Bandorbon';
const li2 = document.createElement('li');
li2.innerText = 'Kuakata';

ul.appendChild(li1);
ul.appendChild(li2);

placesSection.appendChild(ul);


// append placeSection to the main-container
mainContainer.appendChild(placesSection)

// Easier to create HTML
const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1> Books I need to read </h1>
<ul>
    <li> Physics </li>
    <li> Chemistry </li>
    <li> Math </li>
    <li> Biology </li>
</ul>
`
mainContainer.appendChild(booksSection);
