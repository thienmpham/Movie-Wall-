// const http = require('http'); 
import http from 'http';
import 'dotenv/config';
import * as fs from 'fs';
import { getTrending } from './trending.js';


getTrending.then(function (data) {
    console.log('Data:', data);
})

function createServer() {
    const server = http.createServer((req, res) => {
        //Routing
        if (req.url === '/trending') {
            // res.setHeader('Content-Type', 'text/javascript');
            try {
                // const jsData = fs.readFileSync('trending.js');

                res.write(getTrending())
                res.end()
            } catch (error) {
                res.statusCode = 404;
                res.write('Error: Bad Request');
                console.log(error)
                res.end();
            }

        } else {
            res.setHeader('Content-Type', 'text/plain');
            res.write('Hello World');
            res.end();
        }
    });

    const port = process.env.PORT;
    server.listen(port, () => {
        console.log('Server listening');
    });
};
createServer();