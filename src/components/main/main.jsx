import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";

const Main = (props) => {
  const {offers, cities, currentCity, cityCoords, onTitleClick, onCardHover, onMenuItemClick} = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <CitiesList cities={cities} currentCity={currentCity} onMenuItemClick={onMenuItemClick}/>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
              {/* <select class="places__sorting-type" id="places-sorting">
                <option class="places__option" value="popular" selected="">Popular</option>
                <option class="places__option" value="to-high">Price: low to high</option>
                <option class="places__option" value="to-low">Price: high to low</option>
                <option class="places__option" value="top-rated">Top rated first</option>
              </select> */}
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList offers={offers} onTitleClick={onTitleClick} onCardHover={onCardHover}/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offers={offers} cityCoords={cityCoords}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
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
        coords: PropTypes.arrayOf(
            PropTypes.number
        ).isRequired,
        photos: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        features: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
      }).isRequired
  ).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  cityCoords: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired
};

export default Main;
