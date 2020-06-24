import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer: {name, imgSrc, premium, price, rating, type}, onCardHover, onTitleClick} = props;

  return (
    <article className="cities__place-card place-card" onMouseEnter={onCardHover}>
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imgSrc} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onTitleClick} className={`place-card__name-link`}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default OfferCard;
