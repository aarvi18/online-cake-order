import React from 'react'
import CartEmpty from '../components/CartEmpty'
import OrderSummary from '../components/OrderSummary'
import Navbar from '../components/Navbar'

import '../styles/AddtoCart.css'

const AddtoCart = () => {
    return (
        <>
        <Navbar />
            <div className='AddtoCart'>
                <div className='Cart-Empty-Cnt'>
                    <CartEmpty />
                </div>
                <div className='Order-Cnt'>
                    <OrderSummary />
                </div>
            </div>
        </>

    )
}

export default AddtoCart