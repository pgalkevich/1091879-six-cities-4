import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {getOfferCoords} from "../../utils";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.offers = this.props.offers;
    this.city = [this.props.currentCity.location.latitude, this.props.currentCity.location.longitude];
    this._zoom = this.props.currentCity.location.zoom;
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    this._map = null;

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    this._map = leaflet.map(this._mapRef.current, {
      center: this.city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true,
    });

    if (this.city.length > 0) {
      this._map.setView(this.city, this._zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
            })
        .addTo(this._map);

      this.offers.forEach((offer) => {
        leaflet.marker(getOfferCoords(offer), this._icon).addTo(this._map);
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentCity !== prevProps.currentCity) {
      const coords = [this.props.currentCity.location.latitude, this.props.currentCity.location.longitude];
      this._map.flyTo(coords);
    }

    if (this.props.offers !== prevProps.offers) {
      this.props.offers.forEach((offer) => {
        leaflet.marker(getOfferCoords(offer), this._icon).addTo(this._map);
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
      <div id="map" ref={this._mapRef} style={{width: `100%`, height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
  }).isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number,
      city: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      }),
      description: PropTypes.string,
      goods: PropTypes.arrayOf(
        PropTypes.string
      ),
      host: PropTypes.shape({
        avatar: PropTypes.string,
        id: PropTypes.number,
        is_pro: PropTypes.bool,
        name: PropTypes.string
      }),
      id: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.string
      ),
      is_favorite: PropTypes.bool,
      is_premium: PropTypes.bool,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      max_adults: PropTypes.number,
      preview_image: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
};

export default Map;
