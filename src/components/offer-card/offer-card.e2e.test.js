import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

configure({adapter: new Adapter()});

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  imgSrc: `img/apartment-01.jpg`,
  premium: true,
  price: 120,
  rating: 4,
  type: `Apartment`,
};

it(``, () => {
  const onCardHover = jest.fn();
  const offerCard = shallow(<OfferCard offer={offer} onCardHover={onCardHover} />);

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseEnter`, onCardHover);

  expect(onCardHover).toHaveBeenCalledTimes(1);

  expect(onCardHover.mock.calls[0][0]).toMatchObject(offer);
});
