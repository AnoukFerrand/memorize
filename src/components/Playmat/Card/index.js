import "./styles.scss";

import PropTypes from "prop-types";

// Here we recieved the card needed and found with "map"
// and we put in <img> informations needed from the card card.img, card.name

function Card({ card, index, clickHandler }) {
  return (
    <div className="cardsFlip">
      <div className="cardsFront">
        <div
          className={`card ${card.status}`}
          onClick={() => clickHandler(index)}
        >
          <img src={card.img} alt={card.name} />
        </div>
      </div>
    </div>
  );
}

// PropTypes needed cause of the use of es-lint, but not necessary in this project
Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};
Card.defaultProps = {
  card: "",
};

export default Card;
