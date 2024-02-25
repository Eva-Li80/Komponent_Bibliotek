import React, { useState } from 'react'
import './styles/toggle.css';

const Toggle = ({messageone, messagetwo}) => {
    const [message, setMessage] = useState(messageone)

    const handleMessage = () => {
        setMessage(message === messageone ? messagetwo : messageone)
    }


  return (
    <div className='toggle-container'>
      <h2 className='message'>{message}</h2>
      <button className='toggle-btn' onClick={handleMessage}>Toggle message</button>  
    </div>
  )
}

export default Toggle
