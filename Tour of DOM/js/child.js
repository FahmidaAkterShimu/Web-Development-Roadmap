// Create element and set innerText
const newChild = document.createElement('li');
console.log(newChild);
newChild.innerText = 'New born baby footballer';

// Find the parent where you will add the child

const playersList = document.getElementById('player-list');

// append the child to the parent

playersList.appendChild(newChild);
