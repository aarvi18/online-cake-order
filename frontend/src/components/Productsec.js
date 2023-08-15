import React from 'react'

import Data from './Data/ProductDatas'
import Productcard from '../components/Productcard'

const Productsec = () => {
    return (
        <>
            <div className="product">
                {Data.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Productsec