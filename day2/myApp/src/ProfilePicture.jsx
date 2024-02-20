function ProfilePicture() {
    const imageUrl = './src/assets/OIP.jpg';
    const handelClick = (e) => {
        e.target.style.display = "none";
    };

    return(
        <img onClick={(e) => handelClick(e)} src={imageUrl}></img>
    );

}

export default ProfilePicture