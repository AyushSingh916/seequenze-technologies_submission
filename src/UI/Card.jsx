import React from 'react';
import './Card.css'; // Assuming you have a separate CSS file for styling

const Card = ({ imageUrl, title}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
