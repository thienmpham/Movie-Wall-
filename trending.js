// require('dotenv').config();
import fetch from 'node-fetch';
import 'dotenv/config';
import http from 'node:http';


const token = process.env.ACCESS_TOKEN;
async function getTrending() {
    //Fetch request using Bear token
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    let data = await fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error(err));



    // console.log(results)
    console.log(data.results[0].title)

    // create endpoints to transfer data from backend to frontend
}
getTrending();

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