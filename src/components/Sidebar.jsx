import React, { useState } from 'react';
import "./Sidebar.css";

function Sidebar(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [food, setFood] = useState({});

  const handleDetails = id => {
    setShowDetails(!showDetails);
    let foodIndex = props.foods.findIndex(food => food.id === id);
    setFood(props.foods[foodIndex]);
  }

  return (
    <header>
      <nav>
        <div className="nav-closed">
          <h3 data-testid="title">Food App</h3>
          <ul className="nav-links">
            <li className="nav-button" onClick={props.coverImgToggle}>Foods</li>
          </ul>
        </div>
        <div className="nav-open">
          {!showDetails ? (
            <div className="nav-images">
              { props.foods.map((food, index) => (
                <div key={index}>
                  <img 
                    src={food.image} 
                    alt={food.title} 
                    className="food_image" 
                    onClick={() => handleDetails(food.id)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="food-details">
              <button 
                onClick={() => setShowDetails(false)}
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  color: "white",
                  padding: "7px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginBottom: "8px"
                }}
              >Back</button>
              <div className="image">
                <img 
                  src={food.image}
                  style={{ width: "100%"}}
                  alt={food.title}
                />
              </div>
              <div>
                <h2 style={{ textAlign: "center" }}>{food.title}</h2>
                <p>{food.desc}</p>
              </div>
            </div>
          ) }
        </div>
      </nav>
    </header>
  )
}

export default Sidebar;