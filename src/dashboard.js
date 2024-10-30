import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('profile');
        navigate('/');
    };

    return (
        <div className="dashboard">
            <nav className="dashboard-navbar">
                <h2>HackMatch</h2>
                <ul>
                    <li><Link to="/team-finder">Find Team</Link></li>
                    <li><Link to="/user/profile">Profile</Link></li>
                    <li><Link to="/events">Event List</Link></li>
                    <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                </ul>
            </nav>

            <div className="dashboard-content">
                <h3>Welcome! </h3>
                <p>Navigate to find your team, view events, and manage your profile.</p>
            </div>
        </div>
    );
};

export default Dashboard;
