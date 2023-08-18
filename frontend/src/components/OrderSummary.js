import React from 'react'
import '../styles/OrderSummary.css'

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className='flex justify'>
                <p>Subtotal</p>
                <p>₹0.00</p>
            </div>
            <div className='flex justify'>
                <p>Shipping + Tax</p>
                <p>₹0.00</p>
            </div>
            <div className='flex justify'>
                <p>Total</p>
                <p>₹0.00</p>
            </div>
            <button className='btn1'>Checkout</button>
        </div>
    )
}

export default OrderSummary