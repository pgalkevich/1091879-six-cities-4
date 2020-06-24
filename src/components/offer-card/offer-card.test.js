import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  imgSrc: `img/apartment-01.jpg`,
  premium: true,
  price: 120,
  rating: 4.8,
  type: `Apartment`,
  bedroomsCount: 3,
  maxCapacity: 4,
  photos: [
    `room.jpg`,
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `apartment-03.jpg`,
    `studio-01.jpg`,
    `apartment-01.jpg`
  ],
  features: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ]
};

it(`OfferCard is rendered correctly`, () => {
  const tree = renderer.create(
      <OfferCard offer={offer} onCardHover={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
