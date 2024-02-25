import React from 'react'
import './header.css'

const Header = ({title}) => {
  return (
    <div className='header-container'>
      <h1 className='rubrik'>{title}</h1>
    </div>
  )
}

export default Header
