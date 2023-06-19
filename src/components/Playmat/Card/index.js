import "./styles.scss";

import card1 from "../../../assets/images/CarteBoue.png";

// Here we recieved the card needed and found with the map
// and we put in <img> informations needed from the card card.img, card.name

function Card() {
  return (
    <div className="card1">
      <img alt="card1" src={card1} />
    </div>
  );
}

export default Card;
