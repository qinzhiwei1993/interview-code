const http = require('http')

const host = '127.0.0.1'
const port = 3008

const server = http.createServer((req, res) => {
    console.log('req', req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})