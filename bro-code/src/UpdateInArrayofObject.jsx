import React, { useState } from "react";

function UpdateInArrayofObject() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function addCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };

        setCars((c) => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function removeCar(index) {
        setCars((c) => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <>
            <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => (
                        <li onClick={() => removeCar(index)} key={index}>
                            {car.year} {car.make} {car.model}
                        </li>
                    ))}
                </ul>

                <input type="number" value={carYear} onChange={handleYearChange} /> <br />
                <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make" /> <br />
                <input type="text" value={carModel} onChange={handleModelChange} placeholder="enter car model" /> <br />
                <button onClick={addCar}>Add Car</button>
            </div>
        </>
    );
}

export default UpdateInArrayofObject;
