import React from 'react'

const NavigationBar = ({links, className, classNamee}) => {
  return (
    <div>
      <nav>
        <ul className={className}>
        {links.map((link, index) => (
          <li className={classNamee} key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
      
    </div>
  )
}

export default NavigationBar
