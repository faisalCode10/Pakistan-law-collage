import React from 'react'
import '../../STYLESHEET/contact.css'
const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className="contact-card-container">
                <div className="contact-card">
                    <img src='' />
                </div>
                <div className="contact-card1">
                    <img src='' />
                </div>
                <div className="contact-card2">
                    <img src='' />
                </div>
                <div className="contact-card3">
                    <img src='data:image/png;base64,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'  className=''/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, ipsa vel libero eaque minima, corporis amet deserunt odit rem provident hic quam laboriosam accusamus nulla ipsum dolores tenetur temporibus. Aliquam?</p>
                </div>
            </div>

            <div className="contact-footer-container">
                <h1>Follow</h1>
                <h2>twitter</h2>
                <h2>Instagram</h2>
                <h2>Linkdln</h2>
                <h2>Facebook</h2>
            </div>
        </div>
    )
}

export default ContactUs
