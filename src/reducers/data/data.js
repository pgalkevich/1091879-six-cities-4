import {extend} from "../../utils.js";
import {ActionCreator as ApplicationActionCreator} from "../application/application";

const getCities = (offers) => {
  const offersCities = offers.map((item) => item.city);
  const uniqueCities = [];
  const map = new Map();
  for (const item of offersCities) {
    if (!map.has(item.name)) {
      map.set(item.name, true);
      uniqueCities.push({
        name: item.name,
        location: item.location
      });
    }
  }
  console.log(`uniq cities: `, uniqueCities);
  return offersCities;
};

const initialState = {
  offers: [],
  cities: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CITIES: `LOAD_CITIES`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  loadCities: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: getCities(offers)
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        console.log(`response: `, response);
        dispatch(ActionCreator.loadOffers(response.data));
        dispatch(ActionCreator.loadCities(response.data));
        dispatch(ApplicationActionCreator.changeCity(response.data[0].city));
        dispatch(ApplicationActionCreator.changeCityCoords(response.data[0].city));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.LOAD_OFFERS):
      return extend(state, {
        offers: action.payload,
      });

    case (ActionType.LOAD_CITIES):
      return extend(state, {
        cities: action.payload,
      });
  }

  return state;
};

export {reducer, Operation};
