
import React, { useState } from "react";

const DownMenuButton = ({ data, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        Show Persons
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {data.map((person, index) => (
            <li key={index} onClick={() => onSelect(person.name)}>
              {person.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DownMenuButton;



