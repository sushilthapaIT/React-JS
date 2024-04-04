import React, { useState } from "react";

function UpdateArrayInState(){

    const [foods, setFood] = useState(["apple", "banana", "pineapple", "watermelon"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value = "";



    }

    function handleRemoveFood(){

    }

    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => [<li key={index}>{food}</li>])}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter the food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );

}

export default UpdateArrayInState