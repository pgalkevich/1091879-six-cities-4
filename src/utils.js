export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOfferCoords = (offer) => {
  return [offer.location.latitude, offer.location.longitude];
};
