import React from 'react'
import { useState } from 'react'
const UseStatePractice = () => {
    const [count, setCounter] = useState(4);
    function handleDecrement()
    {
        setCounter(count-1);
    }
    function handleIncrement()
    {
        setCounter(count+1);
    }
      return (
        <div>
          <button onClick={handleDecrement}>-</button>
          <h2>{count}</h2>
          <button onClick={handleIncrement}>+</button>
        </div>
      )
    }

export default UseStatePractice
