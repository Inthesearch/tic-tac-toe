import { useState } from "react";

export default function GameBoard({ onSelectSquare, turns }) {
  return (
    <ol id="game-board">
      {turns.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li id={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                  {console.log(playerSymbol)}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
