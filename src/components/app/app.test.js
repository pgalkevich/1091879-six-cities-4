import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    premium: true,
    price: 120,
    rating: 4.8,
    type: `Apartment`,
    bedroomsCount: 3,
    maxCapacity: 4,
    coords: [52.3909553943508, 4.85309666406198],
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
  },
  {
    name: `Wood and stone place`,
    imgSrc: `img/room.jpg`,
    premium: false,
    price: 80,
    rating: 4.4,
    type: `Private room`,
    bedroomsCount: 3,
    maxCapacity: 4,
    coords: [52.369553943508, 4.85309666406198],
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
  },
  {
    name: `Canal View Prinsengracht`,
    imgSrc: `img/apartment-02.jpg`,
    premium: false,
    price: 132,
    rating: 4.6,
    type: `Apartment`,
    bedroomsCount: 3,
    maxCapacity: 4,
    coords: [52.3909553943508, 4.929309666406198],
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
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    imgSrc: `img/apartment-03.jpg`,
    premium: true,
    price: 180,
    rating: 5,
    type: `Apartment`,
    bedroomsCount: 3,
    maxCapacity: 4,
    coords: [52.3809553943508, 4.939309666406198],
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
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App offers={offers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
