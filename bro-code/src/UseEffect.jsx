// useEffect() = React Hook that tells react do some code when (pick one):
//               This component re-renders
//               This component mounts 
//               The state of a value


// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() = {}, [value,]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function UseEffect() {
    return(<>
    <h2>I am useEffect</h2>
    </>);
}

export default UseEffect