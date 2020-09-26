import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {

    const [board, setBoard] = useState([Array(9).fill(null)])
    const [count, setCount] = useState(0)
    const [turn, setTurn] = useState(true)
    const [players, setPlayers] = useState([Array(2).fill(null)])
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
    return (
        <div className = "game">
            <Board squares={board[count]} onClick={onClick} />
        </div>
    )
}

export default Game
