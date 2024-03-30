

function Hero(){
    const heroImage = "./src/assets/outstanding.png"
    const groupImages = "./src/assets/hero-section-content.png"
    return(
        <>
        <div className="hero-section">
            <div className="oustanding">
                <img className="oustanding-image"src={heroImage} alt="Outstanding" />
                <p>We are a blockchain consulting startup that helps you as a visionary, <br/>
                    business leader, entrepreneur or founder translate web3 ideas into <br/>functional products 
                    for global use.
                </p>
                <button className="hero-section-btn">Contact Us</button>
                <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="hero-images">
                <img src={groupImages} alt="Group of Images"  className="group-images"/>
            </div>
        </div>
        <div className="values">
            <img src="./src/assets/values.png" alt="Our Core Values" className="value-image"/>
        </div>
        <hr />
            
        </>
       
    )
}

export default Hero