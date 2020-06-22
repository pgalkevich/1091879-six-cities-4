import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);

    this.offers = props.offers;
    this.state = {
      activeOffer: null
    };
  }

  handleCardHover(offer) {
    return () => {
      this.setState({activeOffer: offer});
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.offers.map((offer, i) => (
          <OfferCard offer={offer} onCardHover={this.handleCardHover(offer)} key={offer.type + i} />
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
      }).isRequired
  ).isRequired
};

export default OffersList;
