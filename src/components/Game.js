import React, { useState } from "react";
import Board from "./Board";
import Footer from "./layout/Footer";
import { calculateWinner } from "../helper";
import PlayerForm from "./layout/PlayerForm.js";
import M from "materialize-css/dist/js/materialize";

const Game = () => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(true);
  const [players, setPlayers] = useState([]);
  const winner = calculateWinner(board[count]);
  const xo = turn ? "X" : "O";

  //logic for the game to get the X & O
  const onClick = (i) => {
    const boardPoint = board.slice(0, count + 1);
    const current = board[count];
    const squares = [...current];

    if (squares[i] || winner) {
      M.toast({ html: `Square taken`, classes: "rounded" });
      return;
    }

    squares[i] = xo;
    setBoard([...boardPoint, squares]);
    setCount(boardPoint.length);
    setTurn(!turn);
  };

  //Get player names
  const setPlayer = (name1, name2) => {
    setPlayers([...players, name1, name2]);
  };

  //Reset button function
  const resetBoard = () =>{
      setBoard([Array(9).fill(null)])
      setCount(0)
      setTurn(true)
  }

  return (
    <div>
      <div className="game">
        {players.length === 0 ? (
          <PlayerForm setPlayer={setPlayer} />
        ) : (
          <Board squares={board[count]} onClick={onClick} />
        )}
      </div>
      <Footer players={players} winner={winner} count={count} reset={resetBoard}/>
    </div>
  );
};

export default Game;
