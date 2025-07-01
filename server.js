// require('dotenv').config();
import fetch from 'node-fetch';
import 'dotenv/config';

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

    // fetch(url, options)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.error(err));

    let results = await fetch(url, options)
    console.log(results)


}
getTrending();