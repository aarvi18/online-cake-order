import React from 'react'

import '../styles/ProductCards.css'
import Veg from '../images/veg.svg'

const ProductCards = () => {

    const card = [
        {
            id: 1,
            name: 'Black Forest',
            tag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgaIsfDv3Deimwp0YUaW37bf4bM1_wntHJw&usqp=CAU',
            price: '399',
            rating: '4.5 *'
        },
        {
            id: 2,
            name: 'Red Volvet',
            tag: 'https://cdn.togetherv.com/red-velvet-heart-cake-main_1680775609.webp',
            price: '599',
            rating: '4.7 *'
        },
        {
            id: 3,
            name: 'Dark Chocolate',
            tag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvCRsR1Pn7jG-p8-bsTLRKBPLRnUak2w3uA&usqp=CAU',
            price: '999',
            rating: '4.8 *'
        },
        {
            id: 3,
            name: 'Dark Chocolate',
            tag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvCRsR1Pn7jG-p8-bsTLRKBPLRnUak2w3uA&usqp=CAU',
            price: '999',
            rating: '4.8 *'
        },
        {
            id: 3,
            name: 'Dark Chocolate',
            tag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvCRsR1Pn7jG-p8-bsTLRKBPLRnUak2w3uA&usqp=CAU',
            price: '999',
            rating: '4.8 *'
        },
        {
            id: 3,
            name: 'Dark Chocolate',
            tag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvCRsR1Pn7jG-p8-bsTLRKBPLRnUak2w3uA&usqp=CAU',
            price: '999',
            rating: '4.8 *'
        },
    ]


    return (


        <div className='flex product'>

            {
                card.map( (e) => (

                    <div className='card'>

                        <div>
                            <img className='product-img' src={e.tag} title='Cake' />
                        </div>

                        <div className='card-details'>

                            <div className='product-name '>
                                <h2>{e.name}</h2> <img src={ Veg } />

                            </div>


                            <div className='product-price flex'>

                                <div className='card-price'>
                                    <span>₹ {e.price} </span>
                                    <s> ₹ 499 </s>
                                </div>

                                <div>
                                    <span className='offer-sec'>{e.rating}</span>
                                </div>

                            </div>

                            <div className='card-about'>
                                <p>Earlist Delivery : <span >Today</span> </p>
                            </div>


                            <div className='flex justify-around card-btn'>
                                <button className='btn1'>Buy Now</button>
                                <button className='btn2'>Add to Cart</button>
                            </div>

                        </div>

                    </div>

                ))
            }
        </div>
    )
}

export default ProductCards

