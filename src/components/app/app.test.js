import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const data = {
  offersCount: 312,
  offerNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App data={data}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
