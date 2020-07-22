import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentCity, handler} = props;

  return (
    <React.Fragment>
      {cities.map((city, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a href="#"
            className={city.name === currentCity.name
              ? `locations__item-link tabs__item tabs__item--active`
              : `locations__item-link tabs__item`}
            onClick={handler(city)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    })
  ),
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default CitiesList;
