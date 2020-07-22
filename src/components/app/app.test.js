import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

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
const cities = [
  {
    name: `Amsterdam`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Hamburg`,
    location: {
      longitude: 10,
      latitude: 10,
      zoom: 16
    }
  },
  {
    name: `Paris`,
    location: {
      longitude: 10,
      latitude: 10,
        zoom: 16
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      longitude: 10,
      latitude: 10,
        zoom: 16
    }
  },
  {
    name: `Brussels`,
    location: {
      longitude: 10,
      latitude: 10,
        zoom: 16
    }
  },
  {
    name: `Cologne`,
    location: {
      longitude: 10,
      latitude: 10,
        zoom: 16
    }
  },
];
const currentCity =  {
  name: `Amsterdam`,
  location: {
    longitude: 10,
    latitude: 10,
    zoom: 16
  }
};

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    page: `main`,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentCity={currentCity}
            offers={offers}
            page={`main`}
            currentOffer={null}
            onCardHover={() => {}}
            onTitleClick={() => {}}
            onMenuItemClick={() => {}}
            cities={cities}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Current Offer`, () => {
  const store = mockStore({
    page: `offer`,
  });

  const offer = {
    bedrooms: 5,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.8566,
        longitude: 2.3522
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
  };

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentCity={currentCity}
            offers={offers}
            page={`offer`}
            currentOffer={offers[0]}
            onCardHover={() => {}}
            onTitleClick={() => {}}
            onMenuItemClick={() => {}}
            cities={cities}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
