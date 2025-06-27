import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import Register from './components/Register';
import ManageEvents from './components/ManageEvents'; 
import EditEvent from './components/EditEvent'; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/manage" element={<ManageEvents />} />
        <Route path="/edit/:id" element={<EditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
