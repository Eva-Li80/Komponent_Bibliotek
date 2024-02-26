import React from 'react'
import "./styles/card.css"

const Card = ({title, subtitle, children, style}) => {
  return (
    <div className={`card-container ${style}`}>
        <h2 className='title'>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
      
    </div>
  )
}

export default Card
