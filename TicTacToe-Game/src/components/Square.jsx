import React from 'react'
import { useState } from 'react';
// import './index.css'

function Square({value, onSquareClick}) {
    // const [value, setValue] = useState(null)
    // function handleclick(){
    //     setValue("X");
    // }
  return (
    <button style={{width:90, height:90}} className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square