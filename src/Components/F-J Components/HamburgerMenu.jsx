import React, { useState } from 'react';
import './hamburgermenu.css'; // Styling för hamburgermenyn

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        <div className={isOpen ? 'line line1' : 'line'}></div>
        <div className={isOpen ? 'line line2' : 'line'}></div>
        <div className={isOpen ? 'line line3' : 'line'}></div>
      </button>
      {isOpen && (
        <div className="menu-items">
          {/* Här kan du placera dina navigeringslänkar eller andra menyelement */}
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
