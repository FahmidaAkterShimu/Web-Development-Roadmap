const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Hello world from node server')
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('About is here from node server')
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})