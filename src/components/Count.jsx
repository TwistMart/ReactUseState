import React from 'react'
import { useState } from 'react';
const Count = () => {

    const[count,setCount]=useState(0) // count is to = 0 and then setCount function increases count with 1 and renders the component and count becomes 1
  return (
    <div>
    <button onClick={()=> setCount(count+1)}> 
     Count {count} 
    </button> 
      
    </div>
  )
}

export default Count
