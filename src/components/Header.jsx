// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isHome }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isHome ? 'home-header' : 'light-header'}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <h1>RISE OF THE</h1>
          <h1>ELEMENTS</h1>
        </div>

        {/* Navigation Icon (Hamburger Menu) */}
        <div className={`nav-icon ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Menu */}
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
      </div>
    </header>
  );
};

export default Header;