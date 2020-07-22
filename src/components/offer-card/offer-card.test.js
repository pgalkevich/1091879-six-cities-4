import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";

const offers = [
  {
    bedrooms: 5,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 16
      }
    },
    description: `Some description`,
    goods: [
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
    ],
    host: {
      avatar: `img/1.jpg`,
      id: 1,
      is_pro: false,
      name: `Name`
    },
    id: 1,
    images: [
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`
    ],
    is_favorite: false,
    is_premium: false,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    },
    max_adults: 5,
    preview_image: `img/apartment-01.jpg`,
    price: 10,
    rating: 5,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }
];

it(`OfferCard is rendered correctly`, () => {
  const tree = renderer.create(
      <OfferCard offer={offers[0]} onCardHover={() => {}} onTitleClick={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
