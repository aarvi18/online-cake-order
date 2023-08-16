import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 
import '../styles/SignupPage.css';
import Navbar from '../components/Navbar';

const SignupPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement signup logic here
        console.log('Signup data:', formData);
    };

    return (
        <>
            <Navbar />

            <div className="signup-container">
                <div className="signup-card">
                    <h2>Join Us Today</h2>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button className='btn1' type="submit">Sign Up</button>
                    </form>
                    <div className="signup-footer">
                        Already have an account? <Link to='/Login'> Log in </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignupPage;
