import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from "./cities-list";

const cities = [
  {
    name: `Amsterdam`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Hamburg`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Paris`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Brussels`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Cologne`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
];

const currentCity = {
  name: `Amsterdam`,
  location: {
    longitude: 10,
    latitude: 10,
    zoom: 10
  }
};

it(`CitiesList is rendered correctly`, () => {
  const tree = renderer.create(
      <CitiesList cities={cities} currentCity={currentCity} handler={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
