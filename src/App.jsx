import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Pradeep" symbol="X" />
          <Player name="Pramod" symbol="O" />
        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
