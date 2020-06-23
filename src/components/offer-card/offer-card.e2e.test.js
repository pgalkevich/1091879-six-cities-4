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

it(``, () => {
  const onCardHover = jest.fn();
  const onTitleClick = jest.fn();
  const offerCard = shallow(<OfferCard offer={offer} onCardHover={onCardHover} onTitleClick={onTitleClick} />);

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseEnter`, offer);

  expect(onCardHover).toHaveBeenCalledTimes(1);
  expect(onCardHover).toBeCalledWith(offer);

  const title = offerCard.find(`.place-card__name-link`);
  title.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
