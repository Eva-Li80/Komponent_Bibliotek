import React from 'react';

const ScrollBox = ({ height, children }) => {
  return (
    <div style={{ overflowY: 'auto', maxHeight: height }}>
      {children}
    </div>
  );
};

export default ScrollBox;
