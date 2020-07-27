import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APPLICATION;

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

export const getCurrentOffer = (state) => {
  return state[NAME_SPACE].currentOffer;
};

export const getPage = (state) => {
  return state[NAME_SPACE].page;
};
