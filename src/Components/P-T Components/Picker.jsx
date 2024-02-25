import React, { useState } from 'react';

const Picker = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div>
        Picker
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Picker;
