import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentCity, handler} = props;

  return (
    <React.Fragment>
      {cities.map((city, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a href="#"
            className={city === currentCity
              ? `locations__item-link tabs__item tabs__item--active`
              : `locations__item-link tabs__item`}
            onClick={handler(city)}
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
  handler: PropTypes.func.isRequired,
};

export default CitiesList;
