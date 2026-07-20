const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
    console.log("Data in the  request: ", req.body);
    const newUser = req.body;
    
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send({ success: true, data: newUser, message: 'Post method is working' });
})

app.get('/about', (req, res) => {
    res.send('about users');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
