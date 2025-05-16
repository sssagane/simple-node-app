const http = require('http');

const handler = (req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World from Node.js  shyam sanjay sagane!\n');
};

if (require.main === module) {
const port = 3000;
const hostname = '0.0.0.0';
const server = http.createServer(handler);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}

module.exports = handler;



