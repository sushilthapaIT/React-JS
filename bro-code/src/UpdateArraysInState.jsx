import React, { useState } from "react";

function UpdateArrayInState(){

    const [foods, setFood] = useState(["apple", "banana", "pineapple", "watermelon"]);

    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => [<li key={index}>{food}</li>])}
            </ul>

            <input />
            <button>Add Food</button>
        </>
    );

}

export default UpdateArrayInState