import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {offers, handler} = props;

  return (
    <React.Fragment>
      {offers.length > 0 && offers.map((offer) => (
        <OfferCard offer={offer} onCardHover={handler(offer)} key={offer.id} />
      ))}
    </React.Fragment>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number,
        city: PropTypes.shape({
          name: PropTypes.string,
          location: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            zoom: PropTypes.number
          })
        }),
        description: PropTypes.string,
        goods: PropTypes.arrayOf(
            PropTypes.string
        ),
        host: PropTypes.shape({
          avatarUrl: PropTypes.string,
          id: PropTypes.number,
          isPro: PropTypes.bool,
          name: PropTypes.string
        }),
        id: PropTypes.number,
        images: PropTypes.arrayOf(
            PropTypes.string
        ),
        isFavorite: PropTypes.bool,
        isPremium: PropTypes.bool,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoom: PropTypes.number
        }),
        maxAdults: PropTypes.number,
        previewImage: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
      })
  ).isRequired,
  handler: PropTypes.func.isRequired
};

export default OffersList;
