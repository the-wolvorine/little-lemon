import React from 'react';
import './Card.css'; // Import your CSS file

const Card = ({ imageUrl, title, price, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">${price}</p>
        <p className="card-description">{description}</p>
        <button className="order-button">
          Order Online
        </button>
      </div>
    </div>
  );
};

export default Card;
