import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const selectCities = (offers) => {
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
  return uniqueCities;
};

export const getCities = createSelector(
    getOffers,
    (resultOne) => {
      return selectCities(resultOne);
    }
);
