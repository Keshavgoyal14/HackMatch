import React from 'react';
import './nav.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>HackMatch</h1>
            </div>
            <div className="navbar-links">
                <a href="/user/login">Login</a>
                <a href="/user/signup">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;