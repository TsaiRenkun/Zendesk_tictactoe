import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {

    const [board, setBoard] = useState([Array(9).fill(null)])
    const [count, setCount] = useState(0)
    const [turn, setTurn] = useState(true)
    const winner = calculateWinner(board[count])
    const xo = turn ? "X" : "O";

    const onClick = (i) =>{
        const boardPoint = board.slice(0, count + 1);
        console.log(boardPoint)
        const current = board[count]
        console.log(current)
        const squares = [...current]
        console.log(squares , i)
        
        if(winner || squares[i]) return;
        
        squares[i] = xo;
        setBoard([...boardPoint, squares]);
        setCount(boardPoint.length);
        setTurn(!turn);
    }
    return (
        <div>
            <h1>React Tic Tac Toe</h1>
            <Board squares={board[count]} onClick={onClick} />
        </div>
    )
}

export default Game
