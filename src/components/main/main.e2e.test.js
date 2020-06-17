import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should offer title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main data={data} onTitleClick={onTitleClick} />
  );

  const titles = main.find(`a.place-card__name-link`);

  titles.forEach((title) => {
    title.props().onClick();
  });

  expect(onTitleClick.mock.calls.length).toBe(data.offerNames.length);
});
