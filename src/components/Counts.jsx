import React, { useState } from 'react'

const Counts = () => {
    const initialCount=0;
    const [count,setCount]=useState(initialCount)

    const IncreamentFive = ()=>{
        for (let i=0; i<5; i++){
            setCount(prevCount=>prevCount+2)
        }
    }
  return (
    <div>
    Count {count}
    <button onClick={()=> setCount(initialCount)}>Reset</button>
    <button onClick={() => setCount(prevCount=>prevCount+1)}>Increase</button>
    <button onClick={() => setCount(prevCount=>prevCount-1)}>Decrease</button>
    <button onClick={IncreamentFive}>IncreamentFive</button>
      
    </div>
  )
}

export default Counts
