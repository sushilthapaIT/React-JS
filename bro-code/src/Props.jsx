// props = read-only properties that are share between components.
//         A parent component can send data to a child component.
//         <Component key=value />


// propTypes = a mechanism that ensures that the passed value is of
//          the correct datatype.
//          age: PropTypes.number


// defaultProps = default values for props in case they are not passed
//                the parent component
//                name: "Guest"

import propTypes from 'prop-types'

function Props(props) {
    return(
        <>
            <div className="student">
                <p>Hi {props.name} How are you?</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "yes" : "no"}</p>
            </div>
        </>
    );
}

Props.propTypes = {
    name :propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

Props.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Props