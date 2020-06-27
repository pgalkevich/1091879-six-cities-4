import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._onTitleClick = this._onTitleClick.bind(this);

    this.state = {
      offerProperty: null,
      page: `main`
    };
  }

  _onTitleClick(offer) {
    this.setState({offerProperty: offer, page: `offer`});
  }

  _renderMainScreen() {
    const {offers} = this.props;
    const {offerProperty, page} = this.state;

    if (page === `offer`) {
      return <Property offer={offerProperty}/>;
    }

    return <Main offers={offers} onTitleClick={this._onTitleClick}/>;
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-offer">
            <Property offer={offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
            PropTypes.string.isRequired
        ).isRequired,
        features: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired
      }).isRequired
  ).isRequired
};

export default App;
