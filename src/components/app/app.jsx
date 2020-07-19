import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {ActionCreator} from "../../reducers/application/application.js";
import {getCities, getCityCoords, getCurrentCity, getCurrentOffer, getPage} from "../../reducers/application/selectors.js";
import {getAuthStatus} from "../../reducers/user/selectors.js";
import {getOffers} from "../../reducers/data/selectors.js";

class App extends PureComponent {
  _renderMainScreen() {
    const {
      offers,
      currentOffer,
      page,
      cities,
      currentCity,
      cityCoords,
      onTitleClick,
      onCardHover,
      onMenuItemClick
    } = this.props;

    if (page === `offer`) {
      return <Property offer={currentOffer}/>;
    }

    return <Main
      offers={offers}
      onTitleClick={onTitleClick}
      onCardHover={onCardHover}
      cities={cities}
      currentCity={currentCity}
      onMenuItemClick={onMenuItemClick}
      cityCoords={cityCoords}
    />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const offerShape = PropTypes.shape({
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
      PropTypes.string.isRequired
  ).isRequired,
  features: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
});

App.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  currentOffer: offerShape,
  offers: PropTypes.arrayOf(
      offerShape
  ).isRequired,
  cityCoords: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.string
  )
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  currentOffer: getCurrentOffer(state),
  page: getPage(state),
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  cityCoords: getCityCoords(state),
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick() {
    dispatch(ActionCreator.setCurrentPage(`offer`));
  },
  onCardHover(offer) {
    dispatch(ActionCreator.setCurrentOffer(offer));
  },
  onMenuItemClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeCityCoords(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
