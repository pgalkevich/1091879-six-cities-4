import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const data = {
  offersCount: 312
};

ReactDOM.render(
    <App offersCount={data.offersCount} />,
    document.querySelector(`#root`)
);
