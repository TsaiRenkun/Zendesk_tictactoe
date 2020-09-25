import React, {useState} from 'react';
import Board from './Board';

export const Game = () => {

    const [board, SetBoard] = useState([Array(9).full(null)])

    return (
        <div>
            <h1>React Tic Tac Toe</h1>
        </div>
    )
}
