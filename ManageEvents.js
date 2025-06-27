import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // ✅ Import Link

function ManageEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>🛠️ Manage Events</h1>
      {events.map(event => (
        <div key={event._id} className="event-card">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>

          {/* ✅ Edit Button Link */}
          <Link to={`/edit/${event._id}`} className="edit-button">✏️ Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default ManageEvents;
