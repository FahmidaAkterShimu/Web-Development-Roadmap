// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections) {
    // console.log(section);
    section.style.backgroundColor = 'skyblue';
    section.style.border = '3px solid blue';
    section.style.borderRadius = '12px';
    section.style.marginBottom = '10px'
    section.style.padding = '10px'
}

// Dynamic class
for (const section of sections) {
    // section.classList.add('section-card');
}

console.log(document.getElementById('players-container'));
console.log(document.getElementById('players-container').childNodes);
console.log(document.getElementById('players-container').childNodes[2]);
console.log(document.getElementById('players-container').childNodes[3].childNodes);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1]);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode);
console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode);

