// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>RISE OF THE</h1>
        <h1>ELEMENTS</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/performance">PERFORMANCE</Link></li>
        <li><Link to="/activities">ACTIVITIES</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/feedback">FEEDBACK</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;