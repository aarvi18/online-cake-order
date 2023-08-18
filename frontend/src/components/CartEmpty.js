import React from 'react'
import '../styles/CartEmpty.css'

import { Link } from 'react-router-dom'

import CartEmptyImage from '../images/empty-cart.svg'


const CartEmpty = () => {
    return (
        <>
            <div className="empty-cart-container flex">
                <div className="empty-cart-content">
                    <img src={CartEmptyImage} />
                    <h2>Your Cart is Empty</h2>
                    <p>Add some items to your cart and start shopping!</p>
                    <Link to='/'>Back to shopping</Link>
                </div>
            </div>
        </>
    )
}

export default CartEmpty