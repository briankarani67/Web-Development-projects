import React from 'react'
import { useState } from 'react';
// import './index.css'

function Square({value, onSquareClick}) {
    // const [value, setValue] = useState(null)
    // function handleclick(){
    //     setValue("X");
    // }
  return (
    <button style={{width:90, height:90, color:"#FFA500", background:"white", fontSize:34, fontWeight:600, borderColor:"#FFA500"}} className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square