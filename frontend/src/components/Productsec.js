import React from 'react'
import { useProductContext } from '../context/productcontext'
import '../styles/Productcard.css'

import Data from './Data/ProductDatas'
import Productcard from '../components/Productcard'

const Productsec = () => {

    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div>...Loading</div>
    }
    return (
        <>
            <div className="product">
                {featureProducts.map((curElem) => (
                    <Productcard key={curElem.id} {...curElem} />
                ))}
            </div>
        </>
    )
}

export default Productsec