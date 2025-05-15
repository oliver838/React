import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

 
export const Counter = () => {
  let nr = 10
  function kiVon() {
    nr--;
  }
  function hozzaAd() {
    nr++;
  }
  
  
  return (
    <div className='gombok' style={{backgroundColor:'#F4FAFF', padding:'1rem'}}>
      <button onClick={kiVon}><FaMinus/></button>
      <div className='szam'>{nr}</div>
      <button onClick={hozzaAd}><FaPlus/></button>
    </div>
  )
}

