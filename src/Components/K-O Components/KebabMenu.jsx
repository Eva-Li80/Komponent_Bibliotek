import React, { useState } from 'react';
import "./styles/kebabmenu.css"

const KebabMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="kebab-menu">
      <button className="kebab-icon" onClick={toggleMenu}>
        &#8942;
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li>Alternativ 1</li>
          <li>Alternativ 2</li>
          <li>Alternativ 3</li>
        </ul>
      )}
    </div>
  );
};

export default KebabMenu;
