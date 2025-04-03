import React from 'react';
import Header from './Header';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      name: "EGGROLL",
      description: "vegetables, tofu and mushroom - vegan"
    },
    {
      name: "SHAVED ICE",
      description: ""
    },
    {
      name: "HOT CHIPS",
      description: ""
    },
    {
      name: "TEA AND REFRESHMENT",
      description: ""
    }
  ];

  return (
    <div className="menu-page">
      {/* Use your existing Header component */}
      <Header isHome={false} />
      
      <main className="menu-content">
        <h1 className="menu-title">Menu</h1>
        
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <h2>{item.name}</h2>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;