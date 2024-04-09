import React from 'react'
import '../../STYLESHEET/footer.css'
import { HeaderIcons } from '../../assets'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-navbar">
                <div className="navbar-item">
                    <a href=""><h2>Giving</h2></a>
                </div>
                <div className="navbar-item">
                    <a href=""><h2>Contact</h2></a>
                </div>
                <div className="navbar-item">
                    <a href=""><h2>About Us</h2></a>
                </div>
                <div className="navbar-item-last">
                    <a href=""><h2>Virtial Tour</h2></a>
                </div>
            </div>

            <div className='footer-icon'>
                <div>
                    <img src={HeaderIcons.headericon} />
                </div>
            </div>
            <div className="footer-adress">
                <div className="adress">
                    <p>29 and 46 Tipu Block,</p>
                    <p>New Garden Town, Lahore.</p>
                    <a href="#"><p>+92 423 583 1801</p></a>
                    <a href="#"><p>+92 423 583 1801</p></a>
                </div>
                <div className="adress">

                    <a href="#"><p>News</p></a>
                    <a href="#"><p>Event</p></a>
                    <a href="#"><p>Media Content</p></a>
                </div>
                <div className="adress">
                    <a href="#"><p>Offices and Services</p></a>
                    <a href="#"><p>Law and library</p></a>
                    <a href="#">
                        <p>Consumer Information <br /> (ABA Required Disclosures)</p>
                    </a>
                </div>
                <div className="adress">
                    <a href="#"><p>Emergency Info</p></a>
                    <a href="#">Directory</a>
                    <a href="#"><p>University Page</p></a>
                </div>
            </div>
            <div className="footer-social-media">
                <div className="footer-right">
                    <div className="PCL ">
                        <a href="#"><p>© PCL </p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Contact</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>WebMaster</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Web Accessbility</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Privacy Policy</p></a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="PCL">
                        <a href="#"><p>Twitetr</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Instagram</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Linkedln</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Facebook</p></a>
                    </div>
                    <div className="ptcl">
                        <a href="#"><p>Youtube</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
