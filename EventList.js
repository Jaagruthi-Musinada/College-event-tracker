import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>📅 College Events</h1>
      {events.map(event => (
        <div key={event._id} className="event-card">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p><b>Date:</b> {event.date}</p>
          <Link to={`/register/${event._id}`}>Register</Link>
        </div>
      ))}

      <br />
      <Link to="/create" className="btn">➕ Create Event (Admin)</Link>
      <br /><br />
      <Link to="/manage" className="btn">🛠️ Manage Events</Link> {/* 👈 Add this line */}
    </div>
  );
}

export default EventList;
