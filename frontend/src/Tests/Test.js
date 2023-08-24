import React from 'react'



import './Test.css'
import { useProductContext } from '../context/productcontext';

const Test = () => {

  const { myName } = useProductContext();

  return (

    <>
      <div className='Test'>

        <h1>
          {myName}
        </h1>
        <span>This data is came from contextAPI</span>

      </div>

    </>
  );
}

export default Test