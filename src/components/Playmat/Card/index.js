import "./styles.scss";

import PropTypes from "prop-types";

// Here we recieved the card needed and found with the map
// and we put in <img> informations needed from the card card.img, card.name

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.img} alt={card.name} />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
Card.defaultProps = {
  card: "",
};

export default Card;
