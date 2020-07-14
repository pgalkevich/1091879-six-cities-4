import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from "./cities-list";

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

it(`CitiesList is rendered correctly`, () => {
  const tree = renderer.create(
      <CitiesList cities={cities} currentCity={`Amsterdam`} handler={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
