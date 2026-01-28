const school = 'Mirpur Bangla School';
console.log(school);
console.log(school.toLocaleLowerCase());

const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()) {
    console.log("I am reading the book.");
}
else {
    console.log("I won't read.");
}


const drink = 'water ';
const liquid = '   water '

if (drink.trim() === liquid.trim()) {
    console.log("Panir opor nam life.");
}
else {
    console.log("Somudre pani ase khaowa jay na.")
}
