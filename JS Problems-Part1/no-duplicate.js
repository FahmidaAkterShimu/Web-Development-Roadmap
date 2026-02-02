function isDuplicate(array) {
    const unique = [];
    let result;
    for (let element of array) {
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
   return unique;
}

console.log("Duplicate element exist:", isDuplicate(['ami', 'tumi', 'she', 'she','tara']));
