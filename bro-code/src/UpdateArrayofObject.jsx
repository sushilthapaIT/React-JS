import React, {useState} from "react";
import { MdDelete } from "react-icons/md";

function UpdateArrayofObject() {

    const [car, setCar] = useState({model: "hurrican", year: 2023, naam: "lamborghini" })

    const [bikes, setBikes] = useState(["k9", "r1", "r2"])

    function addBike(){
        const addd = document.getElementById("addBike").value;
        document.getElementById("addBike").value = "";

        setBikes(b => [...b, addd])

    }

    function deleteBike() {

    }

    return(
        <>
            {/* <h3>list of cars</h3>
            <input type="text" value={car.model}/><br/>
            <input type="number" value={car.year}/> <br/>
            <input type="text" value={car.naam}/> <br/>
            <button>Add Car</button> */}

            <p>List of bikes</p>
            <ul>
                {bikes.map((bike, index) => (<li key={index}>{bike} <MdDelete /></li>))} 
            </ul>
            <input id="addBike"/>
            <br />
            <button onClick={addBike}>Add Bike</button>
        </>
    );
}


export default UpdateArrayofObject