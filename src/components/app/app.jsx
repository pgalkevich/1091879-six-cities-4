import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offers} = props;

  return (
    <Main offers={offers} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired
};

export default App;
