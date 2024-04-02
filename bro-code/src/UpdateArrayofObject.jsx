import React, {useState} from "react";

function UpdateArrayofObject() {

    const [car, setCar] = useState({model: "hurrican", year: 2023, naam: "lamborghini" })

    return(
        <>
            <h3>list of cars</h3>
            <input type="text" value={car.model}/><br/>
            <input type="number" value={car.year}/> <br/>
            <input type="text" value={car.naam}/> <br/>
            <button>Add Car</button>
        </>
    );
}


export default UpdateArrayofObject