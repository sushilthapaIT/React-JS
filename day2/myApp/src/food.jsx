function Food(){
    const food = "Apple";
    const food1 = "Banana";
    return(
        <ul>
            <li>Litchi</li>
            <li>{food}</li>
            <li>{food1.toUpperCase()}</li>
        </ul>
    );
}

export default Food