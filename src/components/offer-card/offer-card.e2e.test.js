import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

configure({adapter: new Adapter()});

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
  }
];

it(``, () => {
  const onCardHover = jest.fn();
  const onTitleClick = jest.fn();
  const offerCard = shallow(<OfferCard offer={offers[0]} onCardHover={onCardHover} onTitleClick={onTitleClick} />);

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseEnter`, offers[0]);

  expect(onCardHover).toHaveBeenCalledTimes(1);
  expect(onCardHover).toBeCalledWith(offers[0]);

  const title = offerCard.find(`.place-card__name-link`);
  title.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
