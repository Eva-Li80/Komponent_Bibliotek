import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      <p>Laddar...</p>
    </div>
  );
};

export default Loader;
