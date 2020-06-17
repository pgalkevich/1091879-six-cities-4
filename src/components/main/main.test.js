import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const data = {
  offersCount: 312,
  offerNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main data={data} onTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
