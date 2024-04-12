import propTypes from 'prop-types'

function PropsExample(props){
    return(
        <div className="props-css">
            <p>Name: {props.name}</p>
            <p>Age: {props.age >= 16 ? "He can watch the movie" : "He cannot watch the movie"}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

PropsExample.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

PropsExample.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default PropsExample