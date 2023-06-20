/* eslint-disable object-curly-newline */
import "./styles.scss";

import { useState } from "react";

import Card from "./Card/index";

// Test on cards, need to see how I can display them.
// Need to use State for the flip ? import UseState
// Need to Create an array of cards object ? with Id, name, status, img emplacement
// After that, used map to find de card needed
// And will pass the card find with a prop in the component Card

function Playmat() {
  // Array of objects with each card twice
  const [cards, setCards] = useState([
    { id: 0, name: "boue", status: "", img: "/images/01.png" },
    { id: 1, name: "boue", status: "", img: "/images/01.png" },
    { id: 2, name: "cocktail", status: "", img: "/images/02.png" },
    { id: 3, name: "cocktail", status: "", img: "/images/02.png" },
    { id: 4, name: "glace", status: "", img: "/images/03.png" },
    { id: 5, name: "glace", status: "", img: "/images/03.png" },
    { id: 6, name: "palmier", status: "", img: "/images/04.png" },
    { id: 7, name: "palmier", status: "", img: "/images/04.png" },
    { id: 8, name: "pasteque", status: "", img: "/images/05.png" },
    { id: 9, name: "pasteque", status: "", img: "/images/05.png" },
    { id: 10, name: "soleil", status: "", img: "/images/06.png" },
    { id: 11, name: "soleil", status: "", img: "/images/06.png" },
  ]);

  return (
    <div className="playmat">
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Playmat;
