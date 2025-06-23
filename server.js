// require('dotenv').config();
import fetch from 'node-fetch';

const token = process.env.ACCESS_TOKEN;
async function getRequest() {
    //Fetch request using Bear token
    const url = 'https://api.themoviedb.org/3/movie/11';
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }
    catch (error) {
        console.error(error);
    }


}
getRequest();