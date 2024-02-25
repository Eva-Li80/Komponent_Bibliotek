import React from 'react';
import Accordion from './Accordion';

const AccordionUse = () => {
  // Anta att du har några sektioner med titlar och innehåll
  const sections = [
    { title: 'Sektion 1', content: 'Innehåll för sektion 1' },
    { title: 'Sektion 2', content: 'Innehåll för sektion 2' },
    { title: 'Sektion 3', content: 'Innehåll för sektion 3' },
  ];

  return (
    <div>
      <Accordion sections={sections} />
    </div>
  );
};

export default AccordionUse;
