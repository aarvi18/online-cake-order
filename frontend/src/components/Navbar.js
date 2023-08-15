import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

import Logo from '../images/logo.webp'


const Navbar = () => {

    const [cartItems, setCartItems] = useState(0); // Initialize cart items

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="logo">
                    <Link to="/"> <img src={Logo} /> </Link>
                </div>

                <div className="cart">
                    <span className="cart-icon">🛒</span>
                    <span className="cart-count">{cartItems}</span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar





