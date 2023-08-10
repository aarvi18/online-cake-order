import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound'

const Rout = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="*" element={<Notfound />} /> {/* This acts as a fallback for 404 */}
                </Routes>
            </Router>

        </>
    )
}

export default Rout