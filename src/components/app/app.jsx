import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {data} = props;

  return (
    <Main data={data}/>
  );
};

App.propTypes = {
  data: PropTypes.shape({
    offersCount: PropTypes.number.isRequired,
    offerNames: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
  }).isRequired
};

export default App;
