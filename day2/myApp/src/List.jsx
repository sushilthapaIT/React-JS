
function List(){
    // // const fruits = [{id: 1, name: "apple", calories: 96}, 
    // //                 {id: 2, name: "banana", calories: 87}, 
    // //                 {id: 3, name: "orange", calories: 76}, 
    // //                 {id: 4, name: "coconut", calories: 55}];

    // const trys = ["ok", "okk", "okkk"];
    // const items = trys.map(item=>item);


    // return(
    //     items
    // );

    // // // fruits.sort();

    // // //This line uses the map method to iterate over each element of the fruits array. 
    // // const listItems = fruits.map(fruits => <li>{fruits.name}</li>);

    // // return(
    // //     <ol>{listItems}</ol>
    // // );



    // const fruits = ["apple", "banana", "orange", "litchi", "mango"];
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // return(
    //     <ol>{listItems}</ol>
    // );


    const fruits = [{id: 1, name: "apple", calories: 96}, 
                    {id: 2, name: "banana", calories: 187}, 
                    {id: 3, name: "orange", calories: 76}, 
                    {id: 4, name: "coconut", calories: 55}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical sort
    // fruit.sort((a, b) => a.calories - b.calories); //numeric order


    // filter object

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;
                                            <b>{lowCalFruit.calories}</b></li>);

    return(
        <ol>{listItems}</ol>
    );

}


export default List