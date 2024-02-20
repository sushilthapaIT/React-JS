function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!!`)
    //     }
    // }


    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    // return(
    //     <button onClick={() => handleClick("Bro")}>Click me</button> //if we add parenthesis after a call back it will invoke right away so to prevent this we use arrow function
    // );

    const handleClick = (e) => {
        e.target.textContent = "Oops!!";
    }

    return(
        <button onClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button