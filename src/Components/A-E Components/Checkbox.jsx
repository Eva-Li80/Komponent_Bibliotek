import React, { useState } from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
