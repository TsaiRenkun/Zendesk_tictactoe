import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';
import PlayerForm from './layout/PlayerForm.js';

const Game = () => {

    const [board, setBoard] = useState([Array(9).fill(null)])
    const [count, setCount] = useState(0)
    const [turn, setTurn] = useState(true)
    const [players, setPlayers] = useState([])
    const winner = calculateWinner(board[count])
    const xo = turn ? "X" : "O";

    const onClick = (i) =>{
        const boardPoint = board.slice(0, count + 1);
        const current = board[count]
        const squares = [...current]
 
        if(winner || squares[i]) return;
        
        squares[i] = xo;
        setBoard([...boardPoint, squares]);
        setCount(boardPoint.length);
        setTurn(!turn);
    }

    const setPlayer = (name1, name2) => {
        setPlayers([...players, name1,name2])
        // setPlayers([...players, name2])
    }


    return (
        <div className = "game">
            {players ? <PlayerForm setPlayer={setPlayer}/> : <Board squares={board[count]} onClick={onClick} />}
        </div>
    )
}

export default Game
