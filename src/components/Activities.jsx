// Activities.jsx
import React from 'react';
import Header from './Header';
import './Activities.css'; // Import the CSS for styling
import logo from '../assets/images/logo.png'; // Logo image
import diyPlant from '../assets/images/diy-plant.jpg'; // DIY Plant Cup image
import fortuneTeller from '../assets/images/fortune-teller.jpg'; // Fortune Teller image
import photoBooth from '../assets/images/photo-booth.jpg'; // Photo Booth image
import tshirtPainting from '../assets/images/tshirt-painting.jpg'; // T-shirt Painting image
import elementQuiz from '../assets/images/element-quiz.jpg'; // Find Your Element Quiz image

const Activities = () => {
  return (
    <div className="activities">
      {/* Header Section */}
      <Header isHome={false} />

      {/* Activities Section */}
      <section className="activities-list">
        <h1>Activities</h1>

        {/* Activity 1: DIY Plant Cup */}
        <div className="activity-item">
          <div className="activity-image">
            <img src={diyPlant} alt="DIY Plant Cup" />
          </div>
          <div className="activity-description">
            <h2>DIY Plant Cup</h2>
            <p>Create your own DIY plant cup and connect with the Earth element by nurturing life with your own hands.</p>
          </div>
        </div>

        {/* Activity 2: Fortune Teller */}
        <div className="activity-item reverse">
          <div className="activity-description">
            <h2>Fortune Teller</h2>
            <p>Discover your destiny with our Fortune Teller, inspired by Aunt Wu from Avatar: The Last Airbender, Book One: Water, Episode 14.</p>
          </div>
          <div className="activity-image">
            <img src={fortuneTeller} alt="Fortune Teller" />
          </div>
        </div>

        {/* Activity 3: Photo Booth */}
        <div className="activity-item">
          <div className="activity-image">
            <img src={photoBooth} alt="Photo Booth" />
          </div>
          <div className="activity-description">
            <h2>Photo Booth</h2>
            <p>Capture unforgettable moments with your friends at our themed photobooth and take home a piece of the adventure!</p>
          </div>
        </div>

        {/* Activity 4: T-shirt Painting */}
        <div className="activity-item reverse">
          <div className="activity-description">
            <h2>T-shirt Painting</h2>
            <p>Unleash your creativity with T-shirt painting at the ABC 210 Metallurgy Room, inspired by the peaceful Temples.</p>
          </div>
          <div className="activity-image">
            <img src={tshirtPainting} alt="T-shirt Painting" />
          </div>
        </div>

        {/* Activity 5: Find Your Element Quiz */}
        <div className="activity-item">
          <div className="activity-image">
            <img src={elementQuiz} alt="Find Your Element Quiz" />
          </div>
          <div className="activity-description">
            <h2>Find Your Element Quiz</h2>
            <p>Complete the Find Your Element quiz at the Elements Board to discover your element and receive a Shaved Ice ticket!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;