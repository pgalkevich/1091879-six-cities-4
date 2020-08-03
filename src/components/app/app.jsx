import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import Login from "../login/login.jsx";
import {ActionCreator} from "../../reducers/application/application.js";
import {getCurrentCity, getCurrentOffer} from "../../reducers/application/selectors.js";
import {getAuthStatus} from "../../reducers/user/selectors.js";
import {getOffers, getCities} from "../../reducers/data/selectors.js";
import history from "../../history";

class App extends PureComponent {
  render() {
    const {
      offers,
      cities,
      currentCity,
      authStatus,
      onMenuItemClick
    } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Main
              offers={offers}
              authStatus={authStatus}
              cities={cities}
              currentCity={currentCity}
              onMenuItemClick={onMenuItemClick}
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/offer/:id" render={ () => <Property authStatus={authStatus} offer={offers[0]}/> } />
          {/* <Route exact path="/offer/:id">*/}
          {/*  <Property authStatus={authStatus} offer={offers[0]}/>*/}
          {/* </Route>*/}
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
  }),
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
  currentOffer: getCurrentOffer(state),
  currentCity: getCurrentCity(state),
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardHover(offer) {
    dispatch(ActionCreator.setCurrentOffer(offer));
  },
  onMenuItemClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
