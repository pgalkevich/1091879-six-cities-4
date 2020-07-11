import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map.jsx";

it(`Map is rendered correctly`, () => {
  const tree = renderer.create(
      <Map refLink={null} />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
