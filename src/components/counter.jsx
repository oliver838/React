import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MyImagee } from './MyImagee';
import Toggle from './Toggle';

 
export const Counter = () => {
  const [nr,setNr] = useState(10)
  
  const kiVon = () =>{
    
    setNr(nr-1);
  }
  const hozzaAd = () =>{
    setNr(nr+1);
  }
  return (
    <>
    <div className='gombok' style={{backgroundColor:'#F4FAFF', padding:'1rem'}}>
      <button onClick={kiVon} disabled={nr==1} style={{cursor:nr==1 && 'crosshair'}}><FaMinus/></button>
      <div className='szam'>{nr}</div>
      <button onClick={hozzaAd}><FaPlus/></button>
    </div>
    <MyImagee nr={nr} name={'Gyula'} id={111}/>

    <Toggle/>
    </>
  )
}

