import React, { useState } from 'react'

function Toggle() {
  const [isHappy, setIsHappy] = useState(true)

  const hangulatValtozas = () => {
    if(isHappy){
      setIsHappy(false)
    }else{
      setIsHappy(true)
    }
  }
  return (
    <div className='hangulat'>
      <button onClick={hangulatValtozas} > {isHappy ? '😁':'😭'}</button>
    </div>
  )
}

export default Toggle
