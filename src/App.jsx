import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Pradeep" symbol="X" />
          <Player initialName="Pramod" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
