import {reducer, ActionCreator, ActionType} from "./reducer.js";

const offers = [
  {
    city: `Paris`,
    cityCoords: [48.8566, 2.3522],
    offers: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        imgSrc: `img/apartment-01.jpg`,
        premium: true,
        price: 120,
        rating: 4.8,
        type: `Apartment`,
        bedroomsCount: 3,
        maxCapacity: 4,
        coords: [48.8566, 2.3522],
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
    ]
  },
  {
    city: `Cologne`,
    cityCoords: [50.9375, 6.9603],
    offers: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        imgSrc: `img/apartment-01.jpg`,
        premium: true,
        price: 120,
        rating: 4.8,
        type: `Apartment`,
        bedroomsCount: 3,
        maxCapacity: 4,
        coords: [50.9375, 6.9603],
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
      }
    ]
  },
  {
    city: `Brussels`,
    cityCoords: [50.8503, 4.3517],
    offers: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        imgSrc: `img/apartment-01.jpg`,
        premium: true,
        price: 120,
        rating: 4.8,
        type: `Apartment`,
        bedroomsCount: 3,
        maxCapacity: 4,
        coords: [50.8503, 4.3517],
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
      }
    ]
  },
  {
    city: `Amsterdam`,
    cityCoords: [52.38333, 4.9],
    offers: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        imgSrc: `img/apartment-01.jpg`,
        premium: true,
        price: 120,
        rating: 4.8,
        type: `Apartment`,
        bedroomsCount: 3,
        maxCapacity: 4,
        coords: [52.38333, 4.9],
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
    ]
  },
  {
    city: `Hamburg`,
    cityCoords: [53.5511, 9.9937],
    offers: [
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
        coords: [53.5511, 9.9937],
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
    ]
  },
  {
    city: `Dusseldorf`,
    cityCoords: [51.2277, 6.7735],
    offers: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        imgSrc: `img/apartment-01.jpg`,
        premium: true,
        price: 120,
        rating: 4.8,
        type: `Apartment`,
        bedroomsCount: 3,
        maxCapacity: 4,
        coords: [51.2277, 6.7735],
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
    ]
  },
];

const filterCity = (city) => {
  const filteredOffers = offers.filter((it) => it.city === city);
  if (filteredOffers.length > 0) {
    return filteredOffers.pop();
  } else {
    throw new Error(`Неверный город!`);
  }
};

const getOffers = (city) => {
  return filterCity(city).offers;
};

const getCoords = (city) => {
  return filterCity(city).cityCoords;
};

const getCities = () => {
  return offers.map((city) => city.city);
};

const DEFAULT_CITY = getCities()[0];

const initialState = {
  currentCity: DEFAULT_CITY,
  cityCoords: getCoords(DEFAULT_CITY),
  offers: getOffers(DEFAULT_CITY),
  currentOffer: null,
  page: `main`,
  cities: getCities()
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  });
});

it(`Reducer should change the city by a given value`, () => {
  expect(reducer({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Cologne`,
  })).toEqual({
    currentCity: `Cologne`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  });
});

it(`Reducer should load offers by current city`, () => {
  expect(reducer({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: getOffers(`Cologne`),
  })).toEqual({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Cologne`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  });
});

it(`Reducer should set current offer`, () => {
  const offer = {
    name: `Beautiful & luxurious apartment at great location`,
    imgSrc: `img/apartment-01.jpg`,
    premium: true,
    price: 120,
    rating: 4.8,
    type: `Apartment`,
    bedroomsCount: 3,
    maxCapacity: 4,
    coords: [50.9375, 6.9603],
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

  expect(reducer({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  }, {
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer,
  })).toEqual({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: offer,
    page: `main`,
    cities: getCities()
  });
});

it(`Reducer should set current page`, () => {
  expect(reducer({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  }, {
    type: ActionType.SET_CURRENT_PAGE,
    payload: `offer`,
  })).toEqual({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `offer`,
    cities: getCities()
  });
});

it(`Reducer should change city coords`, () => {
  expect(reducer({
    currentCity: `Paris`,
    cityCoords: getCoords(`Paris`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  }, {
    type: ActionType.CHANGE_CITY_COORDS,
    payload: getCoords(`Brussels`),
  })).toEqual({
    currentCity: `Paris`,
    cityCoords: getCoords(`Brussels`),
    offers: getOffers(`Paris`),
    currentOffer: null,
    page: `main`,
    cities: getCities()
  });
});
