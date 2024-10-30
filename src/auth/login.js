import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const checkProfileAndNavigate = () => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {
            navigate('/dashboard');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            checkProfileAndNavigate();
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    useEffect(() => {
        checkProfileAndNavigate();
    }, []);
    
    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/user/signup">Sign up</a></p>
        </div>
    );
};

export default Login;
