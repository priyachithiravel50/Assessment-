import React from "react";
import "../App.css";

const itemsData = {
  m1: { description: "Chicken Fried Rice", name: "FriedRice", price: 150.0 },
  m2: { description: "Mutton Briyani", name: "Briyani", price: 175.0 },
  m3: { description: "Idly with Vada", name: "Idly", price: 50.0 },
  m4: { description: "Dosai with potato masala", name: "Dosai", price: 55.0 },
};

const App = () => {
  const itemsArray = Object.entries(itemsData);

  return (
    <div className="creative-container">
      <h2 className="menu-title">Our Menu</h2>
      <div className="card-grid">
        {itemsArray.map(([id, item]) => (
          <div key={id} className="menu-card">
            <div className="card-header">
              <h3>{item.name}</h3>
              <span className="price-tag">₹{item.price.toFixed(2)}</span>
            </div>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
