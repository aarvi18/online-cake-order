import React from 'react'
import CartEmpty from '../components/CartEmpty'
import OrderSummary from '../components/OrderSummary'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        <Footer />    
        </>

    )
}

export default AddtoCart