const http = require('http');
require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var datetime = new Date();
    console.log('Server Time :', datetime);

    console.log('Environment name :', process.env.NODE_ENV);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});