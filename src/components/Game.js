import React, {useState} from 'react';
import Board from './Board';

const Game = () => {

    const [board, setBoard] = useState([Array(9).fill(null)])
    const [turn, setTurn] = useState(true)
    const xo = turn ? "X" : "O";

    const onClick = (i) =>{
       
    }
    return (
        <div>
            <h1>React Tic Tac Toe</h1>
            <Board squares={board}/>
        </div>
    )
}

export default Game
