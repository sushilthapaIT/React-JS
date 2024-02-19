import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student"> 
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}



// to access prop type must import proptypes
//prop types
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


// default props
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student 
