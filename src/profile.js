import React, { useState, useEffect } from 'react';
import { updateProfile } from './api.js';

const Profile = () => {
    const [profile, setProfile] = useState({ name: '', skills: '', portfolio: '' });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('profile'));
        if (user) {
            setProfile(user);
        }
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const {data} = await updateProfile(profile);
            console.log(data);
            localStorage.setItem('profile', JSON.stringify(data));
            setProfile(data);
        } catch (error) {
            console.error('Update profile error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="skills">Skills:</label>
                    <input
                        type="text"
                        id="skills"
                        placeholder="Skills"
                        value={profile.skills}
                        onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Location"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    />
                </div>
                
                <div>
    <label htmlFor="hackathonParticipation">Hackathon Participation:</label>
    <select
        id="hackathonParticipation"
        value={profile.hackathonParticipation}
        onChange={(e) => setProfile({ ...profile, hackathonParticipation: e.target.value })}
    >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;