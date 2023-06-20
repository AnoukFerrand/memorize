import "./styles.scss";
import { useState } from "react";

import Playmat from "../Playmat";
import Footer from "../Footer";

// Add state here, needed to change our card value
// Cards are buttons ?

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <div className="titleBar">
          <h1 className="title">Memorize</h1>
        </div>
      </header>
      <main className="playmat">
        <button type="button" className="buttonNewGame">
          New Game
        </button>
        <Playmat />
        <button
          type="button"
          className="buttonMoves"
          onClick={() => setState(state + 1)}
        >
          Moves
        </button>
        <p>{state}</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
