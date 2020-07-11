import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);

      this._mapRef = createRef();

      this.offers = this.props.offers;
      this.city = this.props.cityCoords;
      this._zoom = 12;
      this._icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      this._map = null;
    }

    componentDidMount() {
      this._map = leaflet.map(this._mapRef.current, {
        center: this.city,
        zoom: this._zoom,
        zoomControl: false,
        marker: true
      });
      this._map.setView(this.city, this._zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
            })
        .addTo(this._map);

      this.offers.forEach((offer) => {
        leaflet.marker(offer.coords, this._icon).addTo(this._map);
      });
    }

    componentDidUpdate(prevProps) {
      if (this.props.cityCoords !== prevProps.cityCoords) {
        this._map.flyTo(this.props.cityCoords);
      }

      if (this.props.offers !== prevProps.offers) {
        this.props.offers.forEach((offer) => {
          leaflet.marker(offer.coords, this._icon).addTo(this._map);
        });
      }
    }

    componentWillUnmount() {
      this.offers = null;
      this.city = null;
      this._zoom = null;
      this._icon = null;
      this._map = null;
    }

    render() {
      return (
        <Component {...this.props} refLink={this._mapRef}/>
      );
    }
  }

  WithMap.propTypes = {
    cityCoords: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
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
  };

  return WithMap;
};

export default withMap;
