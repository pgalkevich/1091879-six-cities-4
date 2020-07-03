import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentCity, onMenuItemClick} = props;

  return (
    <React.Fragment>
      {cities.map((city, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a href="#"
            className={city === currentCity
              ? `locations__item-link tabs__item tabs__item--active`
              : `locations__item-link tabs__item`}
            onClick={() => onMenuItemClick(city)}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
};

export default CitiesList;
