import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {offers, onTitleClick, handler} = props;

  return (
    <React.Fragment>
      {offers.length > 0 && offers.map((offer, i) => (
        <OfferCard offer={offer} onCardHover={handler(offer)} onTitleClick={onTitleClick} key={offer.id} />
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
        avatar: PropTypes.string,
        id: PropTypes.number,
        is_pro: PropTypes.bool,
        name: PropTypes.string
      }),
      id: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.string
      ),
      is_favorite: PropTypes.bool,
      is_premium: PropTypes.bool,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      max_adults: PropTypes.number,
      preview_image: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired
};

export default OffersList;
