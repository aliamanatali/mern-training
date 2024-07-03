import React, { useEffect, useRef, useState } from 'react'

const UseRefPractice = () => {
    // Case 1: Creates a variable whose value persists irrespective of the re renders caused by any other hooks
    // Case 2: Hooks into an html element and can change it's properties without refreshing the page
    const [count, setCounter]=useState(0);
    function handleIncr()
    {
        setCounter(count+1);
    }

    // let a = useRef(0);
    let btnRef = useRef();
    

    useEffect(()=>{
        // a.current= a.current + 1;
        // console.log(`rerenderred value of a is ${a.current}`)
        btnRef.current.style.backgroundColor= "red";
        console.log('re rendered')
    })

  return (
    <div>
      <h1>Use Ref Hook Practice </h1>
      <button ref={btnRef} onClick={handleIncr}>Count {count}</button>
    </div>
  )
}

export default UseRefPractice
