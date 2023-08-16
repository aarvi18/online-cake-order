import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Cart.css'
import EmptyCart  from '../images/empty-cart.svg'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="empty-cart-container">
                <div className="empty-cart-content">
                    <img src={EmptyCart} />
                    <h2>Your Cart is Empty</h2>
                    <p>Add some items to your cart and start shopping!</p>
                    <Link to='/'>Back to shopping</Link>
                </div>
            </div>
        </>
    )
}

export default Cart