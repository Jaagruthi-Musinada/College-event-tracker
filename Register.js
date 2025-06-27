import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Register() {
  const { id } = useParams(); // Get event ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Fixed API endpoint
      await axios.post(`/api/events/${id}/register`, user);
      alert('✅ Registered successfully!');
      navigate('/');
    } catch (error) {
      console.error('❌ Registration failed:', error);
      alert('❌ Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-card">
      <span className="register-card__title">Register</span>
      <p className="register-card__content">
        Join this awesome college event 🎉
      </p>
      <form className="register-card__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={user.name}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={user.email}
          required
          onChange={handleChange}
        />
        <button type="submit" className="register-card__button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
