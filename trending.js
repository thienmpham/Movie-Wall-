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





    // console.log(data)
    console.log(data.results[0].title)

    sortMovieName(data)
    return data;
}

export const trendingData = getTrending();


// Organize trending data 
function sortMovieName(data) {
    //loop through object 
    for (let i = 0; i <= 10; i++) {
        console.log(data.results[i].title);
    }
}