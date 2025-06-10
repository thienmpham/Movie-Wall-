require('dotenv').config();


const token = process.env.ACCESS_TOKEN;
async function getRequest() {
    //Fetch request using Bear token
    const url = 'https://api.themoviedb.org/3/movie/11';
    try {
        const response = await fetch(url, {
            headers: {
                "AUTHORIZATION": token,
            },


        });
        if (!response.ok) {
            throw new Error("Could not fetch resource!");
        }
        const data = await response.json;
        console.log(data)
    }
    catch (error) {
        console.error(error);
    }


}
getRequest();