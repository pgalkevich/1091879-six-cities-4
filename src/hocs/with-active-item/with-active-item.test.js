import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";

const MockComponent = () => <div />;

const MockComponentWrapped = withActiveItem(MockComponent);

it(`With active item is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      handler={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
