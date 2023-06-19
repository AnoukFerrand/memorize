import "./styles.scss";

import Card from "./Card/index";

import card2 from "../../assets/images/CarteCocktail.png";
import card3 from "../../assets/images/CarteGlace.png";
import card4 from "../../assets/images/CartePalmier.png";
import card5 from "../../assets/images/CartePasteque.png";
import card6 from "../../assets/images/CarteSoleil.png";

function Playmat() {
  return (
    <div className="playmat">
      <section className="Cards">
        <Card />
        <div className="card2">
          <img alt="card2" src={card2} />
        </div>
        <div className="card3">
          <img alt="card3" src={card3} />
        </div>
        <div className="card4">
          <img alt="card4" src={card4} />
        </div>
        <div className="card5">
          <img alt="card5" src={card5} />
        </div>
        <div className="card6">
          <img alt="card6" src={card6} />
        </div>
      </section>
    </div>
  );
}

export default Playmat;
