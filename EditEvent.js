import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/events/${id}`, event);
    alert("✅ Event updated!");
    navigate('/manage'); // or wherever you list events
  };

  return (
    <div className="container">
      <h2>✏️ Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={event.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={event.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditEvent;
