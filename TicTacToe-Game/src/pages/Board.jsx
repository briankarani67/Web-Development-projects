import React from 'react'
import Square from '../components/Square'
import CalculateWinner from '../components/CalculateWinner';
import { useState } from 'react';
import '../css/Board.css'
// import './index.css'


function Board() {
    const [xIsNext, setxIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleclick(i){

        if(squares[i] || CalculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();

        if (xIsNext){
            nextSquares[i] ='X'
        }
        else {
            nextSquares[i] = 'O'
        }
         setSquares(nextSquares);
        setxIsNext(!xIsNext);
    }

    const winner = CalculateWinner(squares);
    let status;
    if (winner){
        status = "Winner is " + winner;
    }
    else {
        status = 'Next Player is: ' + (xIsNext ? "X": "O");
    }
  return (
    <>
    <div className='tic-table'>

    <div className='board'>
    <div className='board-row'>
        <Square style={{borderRadius:"15px 0 0 0"}} value={squares[0]} onSquareClick={() => {handleclick(0)}}/>
        <Square value={squares[1]} onSquareClick={() => {handleclick(1)}}/>
        <Square style={{borderRadius:"0 15px 0 0"}} value={squares[2]} onSquareClick={() => {handleclick(2)}}/>
    </div>
    <div className='board-row'>
        <Square  value={squares[3]} onSquareClick={() => {handleclick(3)}}/>
        <Square value={squares[4]} onSquareClick={() => {handleclick(4)}}/>
        <Square value={squares[5]} onSquareClick={() => {handleclick(5)}}/>
    </div>
    <div className='board-row'>
        <Square style={{borderRadius:"0 0 0 15px"}} value={squares[6]} onSquareClick={() => {handleclick(6)}}/>
        <Square value={squares[7]} onSquareClick={() => {handleclick(7)}}/>
        <Square style={{borderRadius:"0 0 15px 0"}} value={squares[8]} onSquareClick={() => {handleclick(8)}}/>
    </div>
    </div>
    <div className='status'>{status}</div>
    </div>
    </>
  )
}

export default Board