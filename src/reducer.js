import {extend} from "./utils.js";
import offers from "./mocks/offers";

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

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_CURRENT_PAGE: `SET_CURRENT_PAGE`,
  CHANGE_CITY_COORDS: `CHANGE_CITY_COORDS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadOffers: (city) => ({
    type: ActionType.LOAD_OFFERS,
    payload: getOffers(city),
  }),
  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer,
  }),
  setCurrentPage: (page) => ({
    type: ActionType.SET_CURRENT_PAGE,
    payload: page,
  }),
  changeCityCoords: (city) => ({
    type: ActionType.CHANGE_CITY_COORDS,
    payload: getCoords(city),
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CITY):
      return extend(state, {
        currentCity: action.payload
      });

    case (ActionType.LOAD_OFFERS):
      return extend(state, {
        offers: action.payload,
      });

    case (ActionType.SET_CURRENT_OFFER):
      return extend(state, {
        currentOffer: action.payload,
      });

    case (ActionType.SET_CURRENT_PAGE):
      return extend(state, {
        page: action.payload,
      });

    case (ActionType.CHANGE_CITY_COORDS):
      return extend(state, {
        cityCoords: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
