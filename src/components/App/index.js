import "./styles.scss";

import Playmat from "../Playmat";
import Footer from "../Footer";

function App() {
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
