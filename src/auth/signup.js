import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await signup(formData);
            localStorage.setItem('profile', JSON.stringify(data));
            navigate('/user/login');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
