// Home.jsx
import React from 'react';
import Header from './Header';
import './Home.css'; // Import the CSS for styling
import { FaInstagram } from 'react-icons/fa6'; // For Instagram icon
import eventBanner from '../assets/images/event-banner.png'; // Background image
import logo from '../assets/images/logo.png'; // Logo image

const Home = () => {
  return (
    <div className="home">
     
      {/* Event Description Section */}
      <section className="event-description">
        <h1>RISE OF THE ELEMENTS</h1>
        <p>
          Rise of the Elements is an immersive event inspired by Avatar: The Last Airbender, where you'll discover your own elemental identity. Experience fun activities, cultural performances, and delicious food representing Water, Earth, Fire, and Air. Each element comes to life through exciting challenges and interactive experiences. Join us for a day of adventure, self-discovery, and cultural celebration.
        </p>
      </section>

      {/* Event Info Section */}
      <section className="event-info">
        <h2>Event Details</h2>
        <p><strong>Date:</strong> Thursday, April 24th, 2025</p>
        <p><strong>Time:</strong> 5:00 PM - 8:00 PM</p>
        <p><strong>Location:</strong> ARC Overlook, University of Washington, Bothell</p>
        <p><strong>Hosted by:</strong> Campus Events Board (CEB)</p>
      </section>

      {/* Instagram Icon */}
      <div className="instagram-link">
        <a href="https://www.instagram.com/uwb_ceb/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} color="#E1306C" />
        </a>
      </div>
    </div>
  );
};

export default Home;