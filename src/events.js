import React, { useEffect, useState } from 'react';

const MLH_API_URL = 'https://mlh.io/seasons/2024-fall/events';

const UpcomingHackathons = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch(MLH_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data from MLH');
        }
        const data = await response.json();
        setHackathons(data);  
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Upcoming Hackathons</h1>
      <ul>
        {hackathons.map((hackathon) => (
          <li key={hackathon.id}>
            <h2>{hackathon.name}</h2>
            <p>Date: {hackathon.start_date} - {hackathon.end_date}</p>
            <p>Location: {hackathon.location}</p>
            <a href={hackathon.url} target="_blank" rel="noopener noreferrer">More Info</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingHackathons;