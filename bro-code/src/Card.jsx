import profilePic from './assets/Capture.PNG';

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="my image"></img>
            <h2>Sushil</h2>
            <p>I am studying full stack software developer</p>
        </div>
    );
}

export default Card