import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

function UpdateArrayInState(){

    const [foods, setFood] = useState([]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        setFood(s => [...s, newFood]) //spread operator

        document.getElementById("foodInput").value = "";



    }

    function handleRemoveFood(index){
        setFood(foods.filter((element, i) => {i !== index}))
    }

    return(
        <>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => [<li key={index}>{food} <MdDeleteSweep key={index} onClick={() => handleRemoveFood(index)}/></li> ])}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter the food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );

}

export default UpdateArrayInState



