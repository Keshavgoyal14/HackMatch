import React from 'react';
import './HomePage.css'; 
import Navbar from './navbar';

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar/>
            <header className="header">
                <h1>Welcome to HackMatch</h1>
                <p>Your ultimate platform to find hackathon teammates and explore upcoming events.</p>
            </header>
            <section className="features">
                <div className="feature">
                    <h3>Find Your Perfect Team</h3>
                    <p>Use our team finder to connect with students and developers who complement your skills and interests.</p>
                </div>
                <div className="feature">
                    <h3>Collaborate with Ease</h3>
                    <p>Leverage built-in chat tools to ensure success.</p>
                </div>
                </section>
            </div>
            )}
           
export default HomePage;
