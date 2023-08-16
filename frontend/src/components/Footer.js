import React from 'react'
import '../styles/Footer.css'
import Logo from '../images/logo.webp'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <p className="footer-copy">&#169; 2023 Delicious Cakes. All rights reserved.</p>
        </footer>
    )
}

export default Footer