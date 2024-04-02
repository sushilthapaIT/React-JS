import React, {useState} from "react";

function UpdateArrayInState() {

    const [foods, setFoods] = useState([]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";

        setFoods(f => [...f, newFood]);

    } 

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index)) //parameter with _ indicate to ignore
    }


     return(
        <>
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
            <button>Remove Food</button>
        </div>

        </>
    );
}

export default UpdateArrayInState