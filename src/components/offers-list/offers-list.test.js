import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from "./offers-list.jsx";

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    premium: true,
    price: 120,
    rating: 4,
    type: `Apartment`,
  },
  {
    name: `Wood and stone place`,
    imgSrc: `img/room.jpg`,
    premium: false,
    price: 80,
    rating: 4,
    type: `Private room`,
  },
  {
    name: `Canal View Prinsengracht`,
    imgSrc: `img/apartment-02.jpg`,
    premium: false,
    price: 132,
    rating: 4,
    type: `Apartment`,
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    imgSrc: `img/apartment-03.jpg`,
    premium: true,
    price: 180,
    rating: 5,
    type: `Apartment`,
  }
];

it(`OffersList is rendered correctly`, () => {
  const tree = renderer.create(
      <OffersList offers={offers} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
