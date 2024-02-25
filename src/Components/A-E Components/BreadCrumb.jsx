import React from 'react';

const Breadcrumb = ({ steps }) => {
  return (
    <div className="breadcrumb">
      {steps.map((step, index) => (
        <span key={index}>
          {step}
          {index < steps.length - 1 && <span> {'>'} </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
