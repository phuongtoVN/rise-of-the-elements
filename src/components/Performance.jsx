// Performance.jsx
import React from 'react';
import Header from './Header';
import './Performance.css'; // Import the CSS for styling
//import logo from '../assets/images/logo.png'; // Logo image
import lionDance from '../assets/images/lion-dance.jpg'; // Lion Dance image
import firebending from '../assets/images/firebending.jpg'; // Firebending image
import tinikling from '../assets/images/tinikling.jpg'; // Tinikling image
import avatarDance from '../assets/images/avatar-dance.jpg'; // Avatar Dance image

const Performance = () => {
  return (
    <div className="performance">
      {/* Header Section */}
      <Header isHome={false} />

      {/* Performances Section */}
      <section className="performances">
        <h1>Performances</h1>
        <div className="performance-item">
          <img src={lionDance} alt="Lion Dance" />
          <div className="performance-description">
            <h2>Lion Dance</h2>
            <p>Enjoy a thrilling Lion Dance performance by Mak Fai Kung Fu Club, inspired by Zuko's firebending training.</p>
          </div>
        </div>
        <div className="performance-item">
          <img src={firebending} alt="Firebending Dance" />
          <div className="performance-description">
            <h2>Firebending Dance</h2>
            <p>Experience the intensity of firebending through a dynamic dance performance.</p>
          </div>
        </div>
        <div className="performance-item">
          <img src={tinikling} alt="Tinikling Dance" />
          <div className="performance-description">
            <h2>Tinikling Dance</h2>
            <p>Watch the vibrant Tinikling dance performed by Frank SA, inspired by Aang and Sokka's fire school dance in Avatar.</p>
          </div>
        </div>
        <div className="performance-item">
          <img src={avatarDance} alt="Avatar Dance" />
          <div className="performance-description">
            <h2>Avatar Dance</h2>
            <p>A mesmerizing performance inspired by the elemental dances from Avatar: The Last Airbender.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;