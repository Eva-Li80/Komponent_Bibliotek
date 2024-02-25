import React, { useState } from 'react'
import Sliderground from './Sliderground'

const Slider = () => {
    const [sliderValue, setSliderValue] = useState(50)

    const handleSliderChange = (newValue) => {
        setSliderValue(newValue)
    }

  return (
    <div>
        <p>Slider value: {sliderValue}</p>
        <Sliderground min={0} max={100} step={1} onChange={handleSliderChange}/>
      
    </div>
  )
}

export default Slider
