import React from 'react';
import './styles/modal.css';

const Modal = ({ onClose }) => {
  return (
    <div>
      <div className="modal">
        <button className="open-button" onClick={onClose}>close</button>
        <h2>Modalrubrik</h2>
        <p>Här kan du lägga till innehåll som ska visas i modalen.</p>
      </div>
    </div>
  );
};

export default Modal;
  