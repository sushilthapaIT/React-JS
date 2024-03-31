// render list


function List(){

    const fruit =["apple", "orange", "banana", "pineapple"]

    fruit.sort();

    const listItems = fruit.map(fruit => <li>{fruit}</li>)

    return(<ol>{listItems}</ol>)
}

export default List