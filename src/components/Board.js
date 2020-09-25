import React from "react";
import Square from "./Square";

export const Board = (arr, onClick) => {
  return (
    <div className="board">
      {arr.map((val, i) => (
        <Square
          key={i}
          value={val}
          onClick={() => {
            onClick[i];
          }}
        />
      ))}
    </div>
  );
};
