import React from 'react';
import "./styles/notification.css"

const Notification = ({title, message }) => {
  return (
    <div className="notification">
      <h1 className='title-note'>{title}</h1>
      <p className='message-note'>{message}</p>
    </div>
  );
};

export default Notification;
