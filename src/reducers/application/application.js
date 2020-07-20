import {extend} from "../../utils.js";

const getCityCoords = (city) => ([city.location.latitude, city.location.longitude]);
// const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
// const DEFAULT_CITY = CITIES[0];

const initialState = {
  currentCity: {},
  cityCoords: [],
  currentOffer: null,
  page: `main`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_CURRENT_PAGE: `SET_CURRENT_PAGE`,
  CHANGE_CITY_COORDS: `CHANGE_CITY_COORDS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city.name,
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
    payload: getCityCoords(city),
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CITY):
      return extend(state, {
        currentCity: action.payload
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
