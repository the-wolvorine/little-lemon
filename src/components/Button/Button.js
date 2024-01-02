import React from 'react';
import './Button.css'; // Import your CSS file

const Button = ({ onClick, children }) => {
  return (
    <button className="hero-button" onClick={onClick}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
