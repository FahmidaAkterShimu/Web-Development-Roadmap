// console.log('External file');

// option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeBlue() {
    document.body.style.backgroundColor = 'skyblue';
}

// option 3 to handle event: get element by Id and then set onclick
const btnMakePink = document.getElementById('btn-make-pink');
// console.log(btnMakePink);
btnMakePink.onclick = function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 3: different version
const btnMakePurple = document.getElementById('btn-makePurple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

