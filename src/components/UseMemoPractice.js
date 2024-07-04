import React, { useState, useMemo } from 'react'

export default function UseMemoPractice() {
    // Basically what happens is, when a state changes in functional components the whole component is re rendered and in this case we have slow function whose
    //value is gonna be the same but it will impact the overall speed for the component to re render. That is the reaosn we use useMemo so that we don't 
    // have to re render the un required function again and again it's value persists

    //gpt:
    //When a state changes in a functional component, the entire component re-renders. If there are slow computations or expensive functions whose 
    //results do not change between renders (unless their dependencies change), this can negatively impact performance. 
    //The useMemo hook is used to memoize the result of such computations, ensuring that the function is only re-executed when its dependencies change.

    // aik memo bhi hai jo - usmein yeh hot ahai ke jab props change hote hein tou hi component re render hoga nai tou nahi hoga iske liye apko export
    // krte hue memo(UsememoPractice) use krna prega taa ke wou component ko memoize krle
const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)
const doubleNumber = useMemo (() => {
return slowFunction (number)
}, [number])
const themeStyles = {
backgroundColor: dark? 'black': 'white',
color: dark? 'white' : 'black'
}
return (
    <>
<input type="number" value={number} onChange={e => setNumber (parseInt
(e.target.value))} />
<button onClick={() => setDark (prevDark => !prevDark)}>Change Theme</button>
<div style={themeStyles}>{doubleNumber}</div>
</>
)
}
function slowFunction (num) {
console.log('Calling Slow Function')
for (let i = 0; i <= 1000000000; i++) {}
return num * 2
}
