import React from 'react'

const Card = ({title, subtitle, children}) => {
  return (
    <div className='card-container'>
        <h2 className='title'>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
      
    </div>
  )
}

export default Card
