import React from 'react'
import { useState } from 'react'
import "./styles/tooltip.css"


const ToolTip = ({text, btntext}) => {
    const [show, setShow] = useState(false)

    const handleShowTooltip = () =>  {
        setShow(true)
    }

    const handleHideTooltip = () => {
        setShow(false)
    }

  return (
    <div className='tool-container'>
        {show && <div className='text'>{text}</div>}
        <div onMouseEnter={handleShowTooltip} onMouseLeave={handleHideTooltip}>
            <button className="hoverBtn">{btntext}</button>
        </div>
      
    </div>
  )
}

export default ToolTip
