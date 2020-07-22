import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {ActionCreator} from "../../reducers/application/application.js";
import {getCurrentCity, getCurrentOffer, getPage} from "../../reducers/application/selectors.js";
import {getAuthStatus} from "../../reducers/user/selectors.js";
import {getOffers, getCities} from "../../reducers/data/selectors.js";

class App extends PureComponent {
  _renderMainScreen() {
    const {
      offers,
      currentOffer,
      page,
      cities,
      currentCity,
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
});

App.propTypes = {
  onTitleClick: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
  }),
  page: PropTypes.string.isRequired,
  currentOffer: offerShape,
  offers: PropTypes.arrayOf(
      offerShape
  ).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoom: PropTypes.number,
        })
      })
  )
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state),
  page: getPage(state),
  currentOffer: getCurrentOffer(state),
  currentCity: getCurrentCity(state),
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
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
