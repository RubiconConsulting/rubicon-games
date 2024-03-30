
function Navbar(){
    const img = "./src/assets/rubiconImage.png"
    return(
        <>
        <div className="navbar">
            <div>
                <img src={img} alt="Rubicon Logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <button className="nav-btn">Contact Us</button>
        </div>
        
        </>

    )
}



export default Navbar