import React, { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'
import IsWinne from '../Iswinne/IsWinne';


function Grid({ numberOfCard }) {
  let [board, setBoard] = useState(Array(numberOfCard).fill(""));
  let [turn, setTurn] = useState(true);
  let [winner, setWinner] = useState(null);
  

  function play(index) {
    if (turn === true) {
      board[index] = "X";
    }
    else {
      board[index] = "O";
    }
    let win = IsWinne(board, turn ? "X" : "O")
    if (win) { setWinner(win) }
    setBoard([...board])
    setTurn(!turn)
  }
  function reSet(){
    setBoard(Array(numberOfCard).fill(""));
    setTurn(true);
    setWinner(null);
  }





  return (
   
   
      <div className="grid-wrapper">
        <h1>Tic Tac Toe</h1>
      {winner && (
        <>
        {
          <h1 className='turn'>
            {winner==="Draw"?`its a Draw!`:`winner:${winner}`}</h1>
        }
         
          <button onClick={reSet}>Reset Game</button>
          </>
      )}
      <h2>Current Turn: {turn ? "X" : "O"}</h2>
      
      <div className='grid'>
        {
          board.map((val, index) => {
            return (<Card  gameEnd={winner?true:false} key={index} player={val} onplay={play} index={index} />
          );})
        }
      </div>
    </div>
  );
};

export default Grid
