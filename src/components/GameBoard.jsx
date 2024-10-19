import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSymbol(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const newGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       newGameBoard[rowIndex][colIndex] = activePlayer;
  //       return newGameBoard;
  //     });
  //     onSelectSquare();
  //   }

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
    console.log(player);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li id={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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