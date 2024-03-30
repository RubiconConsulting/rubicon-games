import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const img = "./src/assets/rubiconImage.png"
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const facebook = <FontAwesomeIcon icon={faFacebook} />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const phone = <FontAwesomeIcon icon={faPhone} />


function Footer(){


    return(
        <div className='realFooter'>
            <div className="footer">
                <div className='logo'>
                    <img src={img} alt="Rubicon Logo" />
                    <p>At Rubicon, we are committed to <br/>translating web3 ideas into reality</p>
                </div>
                <div className="footer-services">
                    <p className="lead">SERVICES</p>
                    <p className='services-p'>Blockchain and Software Consulting</p>
                    <p className='services-p'>AI in Blockchain</p>
                    <p className='services-p'>Marketing</p>
                    <p className='services-p'>Brand Building and Management</p>
                    <p className='services-p'>Marketing Solutions</p>
                    <p className='services-p'>Strategic Business Guidance</p>
                    <p className='services-p'>Security and Auditing Services</p>
                    <p className='services-p'>Education and Training</p>
                </div>
                <div className="company">
                        <p className='company-lead'>COMPANY</p>
                        <p><a href='#'> Blog</a></p>
                        <p>< a href='#'> Contact us</a></p>
                        <p><a href='#'> About us</a></p>
                        <p><a href='#'> Why Rubicon?</a></p>
                        <p><a href='#'>FAQs</a></p>
                </div>
                <div className="contact-us">
                    <p className='contact-lead'>CONTACT US</p>
                    <p>{phone} +2345 678 9102</p>
                    <p>{envelope} rubicon@gmail.com</p>
                    <p className='media'>Social media</p>
                    <div className='socials'>
                        <small><a href=""> {instagram}</a></small>
                        <small><a href=''>{facebook}</a></small>
                        <small><a href=''>{linkedIn}</a> </small>
                        <small><a href='https://www.twitter.com/themax28' target='_blank'>{twitter}</a> </small>
                    </div>
                </div>
            </div>
            <p className='copy'>&copy; Rubicon 2024 — All Rights Reserved.</p>
        </div>
        
    )
}

export default Footer