import React from 'react';

const DropDown = ({handleChanges, valuetvå, valuetre}) => {
    const valuea = "detta är lite text för a"

  return (
    <div>
      <select onChange={handleChanges}>
        <option value={valuea}>Option A</option>
        <option value={valuetvå}>Option B</option>
        <option value={valuetre}>Option C</option>
        <option value="svar D">Option D</option>
      </select>
    </div>
  );
};

export default DropDown;
