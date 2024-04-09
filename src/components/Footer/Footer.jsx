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
        </div>
    )
}

export default Footer
