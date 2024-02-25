import React, { useState } from 'react';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <div onClick={() => toggleSection(index)} className="accordion-header">
            <h3>{section.title}</h3>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
