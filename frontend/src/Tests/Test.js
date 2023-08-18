import React, { useState } from 'react'
import './Test.css'



const Test = () => {

    const [blogs, setSetblogs] = useState([
        {
            title: 'Rakesh Kumar',
            book: 'c++',
            id: 1
        },
        {
            title: 'Rahul Kumar',
            book: 'c',
            id: 2
        },
        {
            title: 'Ronit Jaiswal',
            book: 'Java',
            id: 3
        },
    ]
    );



    return (
        <div className='Test'>
            {
            blogs.map((blogs) => (
                <div className='blog-preview' key={blogs.id}>
                    <h2>Name : {blogs.title}</h2>
                    <p>Books : {blogs.book} </p>
                </div>
            ))
            }
        </div>

    )
}

export default Test