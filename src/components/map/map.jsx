import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Map extends PureComponent {
  render() {
    const styles = {width: `100%`, height: `100%`};

    return (
      <div id="map" ref={this.props.refLink} style={styles}/>
    );
  }
}


Map.propTypes = {
  refLink: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired
};

export default Map;
