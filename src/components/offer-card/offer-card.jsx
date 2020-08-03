import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {offer: {title, previewImage, isPremium, price, rating, type, id}} = props;

  return (
    <article className="cities__place-card place-card">
      <Link to={`/offer/${id}`}>
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <span>
            <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
          </span>
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
            <span className={`place-card__name-link`}>{title}</span>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
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
  }),
};

export default OfferCard;
