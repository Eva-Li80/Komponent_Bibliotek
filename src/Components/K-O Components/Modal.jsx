import React from 'react';
import './styles/modal.css';

const Modal = ({ onClose, texth2, content }) => {
  return (
    <div>
      <div className="modal">
        <button className="open-button" onClick={onClose}>close</button>
        <h2>{texth2}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
  