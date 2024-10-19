import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentActivePlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentActivePlayer = "O";
      }
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
