// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = ({ isHome }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isHome ? 'home-header' : 'light-header'}`}>
      {/* Translucent bar only under logo/menu */}
      <div className="header-overlay">
        <div className="header-content">
          {/* Logo and Title */}
          <div className="logo">
            <img src={logo} alt="Element Icons" className="logo-image" />
            <div className="logo-text">
              <h1>RISE OF THE</h1>
              <h1>ELEMENTS</h1>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className={`nav-icon ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* Slide-out Navigation */}
      <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleNav}>HOME</Link></li>
          <li><Link to="/performance" onClick={toggleNav}>PERFORMANCE</Link></li>
          <li><Link to="/activities" onClick={toggleNav}>ACTIVITIES</Link></li>
          <li><Link to="/menu" onClick={toggleNav}>MENU</Link></li>
          <li>
            <a
              href="https://gather.uwb.edu/survey?survey_uid=f3580b26-03a2-11f0-86f3-0ea371ea8909"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleNav}
            >
              FEEDBACK
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
