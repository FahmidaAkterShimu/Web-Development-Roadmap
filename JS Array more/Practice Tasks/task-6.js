// Given an array of student objects, print each student’s name and marks.

const stuInfo = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];

for (let i = 0; i < stuInfo.length; i++) {
    console.log(stuInfo[i].name, "scored", stuInfo[i].marks);
}
