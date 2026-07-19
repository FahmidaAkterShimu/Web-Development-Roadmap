const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello from users World!')
})

const users = [
    { id: 1, name: 'John Doe', email: 'john@xample.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@xample.com' },
    { id: 3, name: 'Jim Doe', email: 'jim@xample.com' },
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/about', (req, res) => {
    res.send('about users');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
