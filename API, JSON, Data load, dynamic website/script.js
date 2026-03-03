const loadData = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Promise of response
        .then((response) => response.json())
        // Promise of json data
        .then((data) => console.log(data));
};

