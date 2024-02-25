import React, { useState } from 'react'

const Stepper = ({startValue, stepValue}) => {
    const [count, setCount] = useState(startValue)

    const increment = () => {
        setCount(prevCount => prevCount + stepValue)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - stepValue)
    }

  return (
    <div>
        <button onClick={decrement}>minus</button>
        <h2>{count}</h2>
        <button onClick={increment}>plus</button>
      
    </div>
  )
}

export default Stepper
