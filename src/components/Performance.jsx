// Performance.jsx
import React from 'react';
import './Performance.css'; // Import the CSS for styling
//import logo from '../assets/images/logo.png'; // Logo image
import lionDance from '../assets/images/lion-dance-1.jpg'; // Lion Dance image
import firebending from '../assets/images/firebending.jpg'; // Firebending image
import tinikling from '../assets/images/tinikling-1.jpg'; // Tinikling image
import avatarDance from '../assets/images/avatar-dance-1.jpg'; // Avatar Dance image

const Performance = () => {
  return (
    <div className="performance">
      {/* Performances Section */}
      <section className="performances">
        <h1>Performances</h1>
        <div className="performance-item red-bg">
          <img src={lionDance} alt="Lion Dance" />
          <div className="performance-description">
            <h2>Lion Dance</h2>
            <h2>6:00 PM</h2>
            <p>Enjoy a thrilling Lion Dance performance by Mak Fai Kung Fu Club, inspired by Aang and Zuko’s Dance of the Dragons in their firebending training.</p>
          </div>
          <img src={firebending} alt="Firebending Dance" />
        </div>
        
        <div className="performance-item brown-bg">
          <img src={tinikling} alt="Tinikling Dance" />
          <div className="performance-description">
            <h2>Tinikling Dance</h2>
            <h2>6:30 PM</h2>
            <p>Experience the vibrant Tinikling dance performed by FASA SA, inspired by Aang and Katara’s fire school dance in Avatar: The Last Airbender</p>
            <img src={avatarDance} alt="Avatar Dance" />
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Performance;