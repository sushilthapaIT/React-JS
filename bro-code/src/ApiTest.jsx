// import React, {useState, useEffect} from "react";

// function ApiTest() {

//     const URL = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`

//     async function handleApi(){
//         const response = await fetch(URL);
//         const data = response.json();
//         console.log(data)
//     }

//     handleApi()

//     return (
//         <>
//             <h1>{data.joke}</h1>
//         </>
//     );
// }

// export default ApiTest


import React, { useState, useEffect } from "react";

function ApiTest() {
    const URL = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    const [joke, setJoke] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(URL);
            const data = await response.json();
            setJoke(data.joke);
        }

        fetchData();
    }, []);

    return (
        <>
            <h1>{joke}</h1>
        </>
    );
}

export default ApiTest;
