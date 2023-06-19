import "./styles.scss";

import Navbar from "../Navbar";
import Playmat from "../Playmat";
import Footer from "../Footer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <main className="playmat">
        <Playmat />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
