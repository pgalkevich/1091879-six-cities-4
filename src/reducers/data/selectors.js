// import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

// export const getFirstCityOffers = createSelector(
//     getOffers,
//     (resultOne, resultTwo) => {
//       return resultOne.filter((it) => resultTwo && it.type === `artist`);
//     }
// );
