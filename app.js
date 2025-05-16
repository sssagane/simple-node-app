const http = require('http');

describe('Basic HTTP Server Test', () => {
let server;

beforeAll((done) => {
    const app = require('./app');
    server = http.createServer(app);
    server.listen(3001, done); // Use test port
});

afterAll((done) => {
    server.close(done);
});

test('GET / should return Hello World', (done) => {
    http.get('http://localhost:3001', (res) => {
let data = '';
res.on('data', chunk => data += chunk);
res.on('end', () => {
        expect(data).toContain('Hello World from Node.js');
        done();
});
    });
});
});


