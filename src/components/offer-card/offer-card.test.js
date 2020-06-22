import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  imgSrc: `img/apartment-01.jpg`,
  premium: true,
  price: 120,
  rating: 4,
  type: `Apartment`,
};

it(`OfferCard is rendered correctly`, () => {
  const tree = renderer.create(
      <OfferCard offer={offer} onCardHover={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
