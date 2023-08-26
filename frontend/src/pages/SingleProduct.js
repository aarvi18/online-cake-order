import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/SingleProduct.css'

// import Cake from 'https://imgcdn.floweraura.com/hearty-anniversary-cake-9831540ca-A_0.jpg'

const SingleProduct = () => {
    return (
        <>
            <Navbar />
            <div className="product-container">
                <div className="product-image">
                    <img src='https://imgcdn.floweraura.com/truffle-bliss-birthday-cake-9814560ca-A_0.jpg' alt="Cake" />
                </div>
                <div className="product-details">
                    <h1>Laptop Model XYZ</h1>
                    <p className="product-price">₹ 399 /-</p>
                    <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor euismod sem, eget luctus felis fermentum a.
                    </p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default SingleProduct