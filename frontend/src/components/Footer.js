import React from 'react'
import '../styles/Footer.css'
import Logo from '../images/logo.webp'
// import Payment from '../images/payment.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <p className="footer-copy">&#169; 2023 Delicious Cakes. All rights reserved.</p>
            {/* <img className='payment-logo' src={ Payment } /> */}
        </footer>
    )
}

export default Footer