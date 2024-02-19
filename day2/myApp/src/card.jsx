import profilePic from "./assets/OIP.jpg"
function Card() {
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Sushil Thapa</h2>
            <p className="card-text">Full Stack Software Developement</p>
        </div>
    );
}

export default Card