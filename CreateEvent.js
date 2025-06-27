import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: ''
  });

  const handleChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/events', event);
      alert('✅ Event created!');
      navigate('/');
    } catch (err) {
      console.error('❌ Event creation failed:', err);
      alert('❌ Failed to create event. Try again.');
    }
  };

  return (
    <div className="container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="InputContainer">
          <input
            placeholder="Title"
            className="input"
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="InputContainer">
          <input
            placeholder="Description"
            className="input"
            type="text"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="InputContainer">
          <input
            placeholder="Date"
            className="input"
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEvent;
