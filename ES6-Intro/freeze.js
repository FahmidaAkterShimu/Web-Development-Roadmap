const king = { name: 'Musa', age: 55, kingdom: 'pride lands' };
// Object.freeze(king);   ----> add, delete, modify kora jabena

Object.seal(king);   //----> add, delete kora jabena but modify kora jabe

delete king.age;
console.log(king);

delete king.kingdom;
console.log(king);

king.queen = 'Queen';
king.name = "King"
console.log(king);

