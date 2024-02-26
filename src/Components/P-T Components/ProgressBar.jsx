import React from 'react';

const ProgressBar = ({ percent }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', borderRadius: '4px', height: '20px' }}>
      <div style={{ width: `${percent}%`, backgroundColor: '#007bff', borderRadius: '4px', height: '100%' }}></div>
    </div>
  );
}

export default ProgressBar;
