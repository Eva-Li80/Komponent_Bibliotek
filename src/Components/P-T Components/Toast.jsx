import React, { useEffect, useState } from 'react'

const Toast = ({message}) => {
    const [visible, setVisible] =useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

  return (
    <div style={{ 
        display: visible ? 'flex' : 'none', 
        padding: '10px', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        color: '#fff', 
        borderRadius: '5px',
        marginTop: '10px',
       
      }}>
        {message}
      </div>
  )
}

export default Toast
