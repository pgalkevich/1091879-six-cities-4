import {reducer, ActionType} from "./application.js";

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
const currentCity = {
  name: `Amsterdam`,
  location: {
    longitude: 10,
    latitude: 10,
    zoom: 16
  }
};
const cityToChange = {
  name: `Cologne`,
  location: {
    longitude: 10,
    latitude: 10,
    zoom: 16
  }
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentCity: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    currentOffer: null,
    page: `main`,
  });
});

it(`Reducer should change the city by a given value`, () => {
  expect(reducer({
    currentCity,
    offers,
    currentOffer: null,
    page: `main`,
    cities
  }, {
    type: ActionType.CHANGE_CITY,
    payload: cityToChange,
  })).toEqual({
    currentCity: cityToChange,
    offers,
    currentOffer: null,
    page: `main`,
    cities
  });
});


it(`Reducer should set current offer`, () => {
  const offer = offers[0];

  expect(reducer({
    currentCity,
    offers,
    currentOffer: null,
    page: `main`,
    cities
  }, {
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer,
  })).toEqual({
    currentCity,
    offers,
    currentOffer: offer,
    page: `main`,
    cities
  });
});

it(`Reducer should set current page`, () => {
  expect(reducer({
    currentCity,
    offers,
    currentOffer: null,
    page: `main`,
    cities
  }, {
    type: ActionType.SET_CURRENT_PAGE,
    payload: `offer`,
  })).toEqual({
    currentCity,
    offers,
    currentOffer: null,
    page: `offer`,
    cities
  });
});

