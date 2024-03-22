import React from 'react';
import './SideBtn.css';

const SideButton = ({ svg, text, isSelected, onClick }) => {
  return (
    <div className="sidebar-btn">
      <button className={isSelected ? 'selected' : ''} onClick={onClick}>
        {svg}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default SideButton;
