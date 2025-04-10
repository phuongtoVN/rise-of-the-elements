import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = ({ isHome }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsNavOpen(false);
  };

  return (
    <>
      {/* Fixed Header with Overlay */}
      <header className={`header-container ${isHome ? 'home-header' : 'light-header'}`}>
        {/* Banner Image (homepage only) */}
        {isHome && (
          <div className="banner-image">
            <div className="banner-overlay"></div>
          </div>
        )}

        {/* Fixed Navigation Bar */}
        <div className="fixed-nav">
          <div className="nav-content">
            {/* Clickable Logo */}
            <div className="logo" onClick={handleLogoClick}>
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
      </header>

      {/* Slide-out Navigation Menu */}
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

      {/* Content spacer for fixed nav */}
      {!isHome && <div className="nav-spacer"></div>}
    </>
  );
};

export default Header;