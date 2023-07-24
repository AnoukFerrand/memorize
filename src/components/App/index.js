import "./styles.scss";
import { useState } from "react";

import Playmat from "../Playmat";
import Footer from "../Footer";

// Add state here, needed to change our card value
// Cards are buttons ?

function App() {
  const [state, setState] = useState(0);
  const refreshGame = () => window.location.reload(true);

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
        <Playmat className="playmat" />
        <span className="counterMoves">
          <p className="moves">Moves</p>
          <p className="count">{state}</p>
        </span>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
