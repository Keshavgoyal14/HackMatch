import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Profile from './profile.js';
import UpcomingHackathons from './events.js';
import HomePage from './homepage.js';
import Dashboard from './dashboard.js';
import TeamFinder from './TeamFinder.js';

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/team-finder" element={<TeamFinder/>} />
                <Route path="/events" element={<UpcomingHackathons/>} />
                <Route path="/user/login" element={<Login/>} />
                <Route path="/user/signup" element={<Signup/>} />
                <Route path="/user/profile" element={<Profile/>} />
            </Routes>
        </Router>
    );
}

export default App;
