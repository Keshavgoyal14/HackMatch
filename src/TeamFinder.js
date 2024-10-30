import React, { useState, useEffect } from 'react';
import './TeamFinder.css';

const TeamFinder = () => {
    const [users, setUsers] = useState([]);       
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        skills: '',
        location: '',
        hackathonParticipation: ''
    });

    useEffect(() => {
        const fetchUsers = async () => {
            const response = [
                { id: 1, name: 'Alice', skills: 'Frontend, React', location: 'New Jersey', hackathonParticipation: 'Yes' },
                { id: 2, name: 'Boby', skills: 'Backend, Node.js', location: 'New York', hackathonParticipation: 'No' },
                { id: 3, name: 'Charlie', skills: 'Full Stack, Python', location: 'London', hackathonParticipation: 'Yes' }
            ];
            setUsers(response);
            setFilteredUsers(response); 
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const filterUsers = () => {
            let filtered = users.filter(user => {
                return (
                    (searchCriteria.skills === '' || user.skills.toLowerCase().includes(searchCriteria.skills.toLowerCase())) &&
                    (searchCriteria.location === '' || user.location.toLowerCase().includes(searchCriteria.location.toLowerCase())) &&
                    (searchCriteria.hackathonParticipation === '' || user.hackathonParticipation === searchCriteria.hackathonParticipation)
                );
            });
            setFilteredUsers(filtered);
        };

        filterUsers();
    }, [searchCriteria, users]);

    const handleInputChange = (e) => {
        setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
    };

    return (
        <div className="team-finder">
            <h2>Find Your Teammates</h2>

            <div className="filters">
                <input
                    type="text"
                    name="skills"
                    placeholder="Filter by skills (e.g.React)"
                    value={searchCriteria.skills}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Filter by location"
                    value={searchCriteria.location}
                    onChange={handleInputChange}
                />
                <select
                    name="hackathonParticipation"
                    value={searchCriteria.hackathonParticipation}
                    onChange={handleInputChange}
                >
                    <option value="">Hackathon Participation</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="user-list">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Skills:</strong> {user.skills}</p>
                        <p><strong>Location:</strong> {user.location}</p>
                        <p><strong>Hackathon Participation:</strong> {user.hackathonParticipation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamFinder;
