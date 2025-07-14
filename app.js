// const http = require('http'); 
import http from 'node:http';
import 'dotenv/config';

function createServer() {


    const server = http.createServer((req, res) => {
        //Routing
        if (req.url === '/trending') {
            res.write(200, { 'Content-Type': 'text/plain' });
            res.end('Hello,world!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });

    const port = process.env.PORT;
    server.listen(port, () => {
        console.log('Server listening');
    });
};
createServer();