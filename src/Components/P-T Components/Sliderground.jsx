import React, { useState } from 'react'

const Sliderground = ({min, max, step, onChange}) => {
    const [value, setValue] = useState(min)

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value)
        setValue(newValue)
        onChange(newValue)
    }

  return (
    <div>
        <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        />
      
    </div>
  )
}

export default Sliderground
