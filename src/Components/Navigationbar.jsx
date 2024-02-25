import React from 'react'

const NavigationBar = ({links}) => {
  return (
    <div>
      <nav>
        <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
      
    </div>
  )
}

export default NavigationBar
