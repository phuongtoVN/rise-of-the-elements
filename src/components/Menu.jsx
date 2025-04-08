import React from 'react';
import Header from './Header';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      name: "EGGROLL",
      description: "Vegetables, tofu and mushroom - vegan."
    },
    {
      name: "SHAVED ICE",
      description: "Strawberry Mango Sago and Lilikoi Pog. Traditional flavors: blue vanilla, strawberry, orange dreamsicle, and watermelon."
    },
    {
      name: "MACARONS",
      description: "Flavor: blueberry, birthday cake, vanilla, matcha, and thai tea."
    },
    {
      name: "HOT CHIPS",
      description: "Seaweed and hot cheetos."
    },
    {
      name: "TEA AND REFRESHMENT",
      description: "Boba can and water."
    }
  ];

  return (
    <div className="menu-page">
      
      
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