import "./styles.scss";
import { useState } from "react";

import Playmat from "../Playmat";
import Footer from "../Footer";

function App() {
  const [counter, setCounter] = useState(0);

  const refreshGame = () => window.location.reload(true);

  const increaseCounter = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="wave">
          <div className="titleBar">
            <h1 className="title">Memorize</h1>
          </div>
        </div>
      </header>
      <main className="main">
        <button type="button" className="buttonNewGame" onClick={refreshGame}>
          New Game
        </button>
        <Playmat
          className="playmat"
          counter="counter"
          increaseCounter={increaseCounter}
        />
        <span className="counterMoves">
          <p className="moves">Moves</p>
          <p className="count">{counter}</p>
        </span>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
