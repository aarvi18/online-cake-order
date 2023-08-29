import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


import '../styles/Productcard.css'
import Veg from '../images/veg.svg'


const Productcard = (curElem) => {
    const { id, name, image, price, rating } = curElem;

    return (

        <NavLink to={`/SingleProduct/${id}`}>

            <div className='card'>

                <div>
                    <img className='product-img' src={image} name='Cake' />
                </div>

                <div className='card-details'>

                    <div className='product-name '>
                        <h2>{name}</h2> <img src={Veg} />

                    </div>


                    <div className='product-price flex'>

                        <div className='card-price'>
                            <span>₹ {price} </span>
                            <s> ₹ 499 </s>
                        </div>

                        <div>
                            <span className='offer-sec'>{rating}</span>
                        </div>

                    </div>

                    <div className='card-about'>
                        <p>Earlist Delivery : <span >Today</span> </p>
                    </div>


                    <div className='flex justify-around card-btn'>
                        <button className='btn1'>Buy Now</button>
                        <button className='btn2'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /> </button>
                    </div>

                </div>

            </div>
        </NavLink>


    )
}

export default Productcard