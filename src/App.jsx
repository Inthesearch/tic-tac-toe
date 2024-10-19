import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function derivedActivePlayer(gameturns) {
  let currentActivePlayer = "X";

  if (gameturns.length > 0 && gameturns[0].player === "X") {
    currentActivePlayer = "O";
  }

  return currentActivePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = derivedActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentActivePlayer = derivedActivePlayer(prevTurns);
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
          <Player name="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
