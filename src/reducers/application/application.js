import {extend} from "../../utils.js";

const initialState = {
  currentCity: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  currentOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setCurrentOffer: (offer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offer,
  })
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
