// export default function ToDo({ task, isDone }) {
//     return (
//         <li>Task: {task}, {isDone}</li>
//     )
// }

// ----------- Two ways of conditional rendering -----------

// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task} </li>
//     }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//     if (isDone === true) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }



// ======== Conditional rendering- 3: Ternary ======== //
// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone
//         ? <li>Done: {task}, Duration:{time} </li>
//         : <li>Not Done: {task}</li>
// }


// ======== Conditional rendering - 4: && ========= //

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done Tasks: {task}, time: {time}</li>
// }


// ======== Conditional rendering - 5: || ========= //

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone || <li>Not Done Tasks: {task}, time: {time}</li>
// }


// ======== Conditional rendering - 6: use variable ========= //

export default function ToDo({ task, isDone, time }) {
    // const displayTime = time ? time : 100
    let listItem;
    if (isDone === true) {
        listItem = <li>Done: {task}, time: {time ? 'I am done' : 'Not done yet'} </li>
    }
    else {
        listItem = <li>Pending: {task} </li>
    }
    return listItem;
}
