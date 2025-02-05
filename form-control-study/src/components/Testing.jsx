import React, { useEffect, useState } from 'react'

export default function Testing() {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log(count)
        return()=>{
            console.log("cleaning up")
        }
    },[count])

    return (
        <div>
            <h1>COUNT: {count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count+1)}> update</button>
        </div>
  )
}
