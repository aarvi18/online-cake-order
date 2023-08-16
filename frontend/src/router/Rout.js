import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound'
import LoginPage from '../pages/Loginpage'
import Cart from '../pages/Cart'
import SignupPage from '../pages/SignupPage'
// import Productsec from '../Test/Productsec'

const Rout = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/SignupPage" element={<SignupPage />} />
                    <Route path="/Cart" element={<Cart />} />
                    {/* <Route path="/Productsec" element={<Productsec/>} /> */}
                    <Route path="*" element={<Notfound />} /> {/* This acts as a fallback for 404 */}
                </Routes>
            </Router>

        </>
    )
}

export default Rout