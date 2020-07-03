import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  _handleCardHover(offer) {
    const {onCardHover} = this.props;
    return () => {
      onCardHover(offer);
    };
  }

  render() {
    const {offers, onTitleClick} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer, i) => (
          <OfferCard offer={offer} onCardHover={this._handleCardHover(offer)} onTitleClick={onTitleClick} key={offer.type + i} />
        ))}
      </React.Fragment>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        bedroomsCount: PropTypes.number.isRequired,
        maxCapacity: PropTypes.number.isRequired,
        photos: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        features: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
      }).isRequired
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default OffersList;
