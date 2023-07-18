import "./styles.scss";
import backCard from "../../../../public/images/00.png";

import PropTypes from "prop-types";

// Here we recieved the card needed and found with the map
// and we put in <img> informations needed from the card card.img, card.name

function Card({ card, index, clickHandler }) {
  return (
    <div className="cardsFlip">
      <div
        className={`card ${card.status}`}
        onClick={() => clickHandler(index)}
      >
        <img src={card.img} alt={card.name} />
      </div>

      {/* // ADD A BACK IMAGE : */}
      {/* 
      <div className={`card ${card.status}`}>
        <img src="/images/00.png" alt="backCard" className="frontImage" />
      </div> */}
    </div>
  );
}

// PropTypes needed cause of the use of es-lint, but not necessary in this project

// Card.propTypes = {
//   card: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }),
// };
// Card.defaultProps = {
//   card: "",
// };

export default Card;
