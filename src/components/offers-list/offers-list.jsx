import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardHover = this._handleCardHover.bind(this);
    this._onTitleClick = this._onTitleClick.bind(this);

    this.offers = props.offers;
    this.state = {
      activeOffer: null
    };
  }

  _handleCardHover(offer) {
    return () => {
      this.setState({activeOffer: offer});
    };
  }

  _onTitleClick() {
    const {onTitleClick} = this.props;
    onTitleClick(this.state.activeOffer);
  }

  render() {
    return (
      <React.Fragment>
        {this.offers.map((offer, i) => (
          <OfferCard offer={offer} onCardHover={this._handleCardHover(offer)} onTitleClick={this._onTitleClick} key={offer.type + i} />
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
  onTitleClick: PropTypes.func.isRequired
};

export default OffersList;
