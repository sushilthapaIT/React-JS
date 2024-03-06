function ListGroup() {
    let items = ["New York", "Nepal", "Canada", "India", "London"];
    
    return (
    <>
    <h1>List</h1>
    <ul className="list-group">
    {/* {items.length === 0 ? <p>No data found</p> : null} */}
    {items.length === 0 && <p>No dataa Found</p>}
    {items.map((item) => (
    <li
    className="list-group-item"
    key={item}
    onClick={() => console.log("Clicked")}
    >
    {item}
    </li>
    ))}
    </ul>
    </>
    );
    }
    
    export default ListGroup;