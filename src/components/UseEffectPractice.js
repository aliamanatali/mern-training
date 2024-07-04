import React, { useEffect, useState } from 'react'

const UseEffectPractice = () => {
    const [count, setCounter]=useState(0);
    
    //Case 1: Runs on every render

    // useEffect(()=>{
    //     console.log("Render");
    // })

    //Case 2: Runs on initial render and when count

    // useEffect(()=>{
    //     console.log("Render");
    // },[count])

    //Case 3: Gets Rerendered only once

    // useEffect(()=>{
    //     console.log("Render");
    // },[])

    //Case 4: CleanUp Functiongit 
  
    useEffect(()=>{
        console.log("Render");
        return () => {
            console.log("Cleanup on unmount or dependency change");
        }
    },[count])

    function handleDecrement()
    {
        setCounter(count-1);
    }
    function handleIncrement()
    {
        setCounter(count+1);
    }
    //https://jsonplaceholder.typicode.com/posts
  return (
    <div>
      <h1>Use Effect Practice</h1>
      <h2>Counter</h2>
      <button onClick={handleDecrement}>-</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default UseEffectPractice

