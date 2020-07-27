import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from "./offers-list.jsx";

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
      avatarUrl: `img/1.jpg`,
      id: 1,
      isPro: false,
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
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    },
    maxAdults: 5,
    previewImage: `img/apartment-01.jpg`,
    price: 10,
    rating: 5,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    bedrooms: 5,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
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
      avatarUrl: `img/1.jpg`,
      id: 2,
      isPro: false,
      name: `Name`
    },
    id: 2,
    images: [
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
      `apartment-01.jpg`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    },
    maxAdults: 5,
    previewImage: `img/apartment-01.jpg`,
    price: 10,
    rating: 5,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }
];
it(`OffersList is rendered correctly`, () => {
  const tree = renderer.create(
      <OffersList offers={offers} onTitleClick={() => {}} handler={() => () => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
