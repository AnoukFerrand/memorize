/* eslint-disable brace-style */
/* eslint-disable object-curly-newline */
import { useState, useRef } from "react";

import "./styles.scss";
import Card from "./Card/index";

function Playmat() {
  // Array of objects with each card twice
  const [cards, setCards] = useState(
    [
      { id: 0, name: "boue", status: "", img: "/images/01.png" },
      { id: 0, name: "boue", status: "", img: "/images/01.png" },
      { id: 1, name: "cocktail", status: "", img: "/images/02.png" },
      { id: 1, name: "cocktail", status: "", img: "/images/02.png" },
      { id: 2, name: "glace", status: "", img: "/images/03.png" },
      { id: 2, name: "glace", status: "", img: "/images/03.png" },
      { id: 3, name: "palmier", status: "", img: "/images/04.png" },
      { id: 3, name: "palmier", status: "", img: "/images/04.png" },
      { id: 4, name: "pasteque", status: "", img: "/images/05.png" },
      { id: 4, name: "pasteque", status: "", img: "/images/05.png" },
      { id: 5, name: "soleil", status: "", img: "/images/06.png" },
      { id: 5, name: "soleil", status: "", img: "/images/06.png" },
    ].sort(() => Math.random() - 0.5)
  );

  // state of the previous card
  const [previousCardState, setPreviousCardState] = useState(-1);
  // index of the previous card
  const previousIndex = useRef(-1);

  // Function to check if cards matches, if they do we change status
  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  // this function is used to tell wich index had been click on and if they match
  // FIRST check if index clicked is equal to previous index clicked,
  // if not is not the same card so we continue
  // SECOND check if the card is face up or face down, if not up we continue
  // THIRD check both cards if they match
  const clickHandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else if (previousCardState === -1) {
        previousIndex.current = index;
        cards[index].status = "active";
        setCards([...cards]);
        setPreviousCardState(index);
      } else {
        matchCheck(index);
        previousIndex.current = -1;
      }
    } else {
      alert("card currently seleted");
    }
  };

  return (
    <div className="playmat">
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Playmat;
