// Conditional rendering = allows you to control what gets rendered in your
//                         application based on certain conditions
//                         (show, hide, or change components) 


import PropTypes from 'prop-types'

function ConditionalRendering(props){
    return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username} </h2>: <h2 className="login-prompt">Please Login to continue</h2>);
}

export default ConditionalRendering

ConditionalRendering.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

ConditionalRendering.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}