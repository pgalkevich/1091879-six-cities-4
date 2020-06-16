import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const data = {
  offersCount: 312,
  offerNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

ReactDOM.render(
    <App data={data} />,
    document.querySelector(`#root`)
);
