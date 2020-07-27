import {extend} from "../../utils.js";

const convertOffers = (offers) => {
  return offers.map((item) => {
    return {
      bedrooms: item.bedrooms,
      city: item.city,
      description: item.description,
      goods: item.goods,
      host: {
        avatarUrl: item.host.avatar_url ? item.host.avatar_url : item.host.avatarUrl,
        id: item.host.id,
        isPro: item.host.is_pro ? item.host.is_pro : item.host.isPro,
        name: item.host.name
      },
      id: item.id,
      images: item.images,
      isFavorite: item.is_favorite ? item.is_favorite : item.isFavorite,
      isPremium: item.is_premium ? item.is_premium : item.isPremium,
      location: item.location,
      maxAdults: item.max_adults ? item.max_adults : item.maxAdults,
      previewImage: item.preview_image ? item.preview_image : item.previewImage,
      price: item.price,
      rating: item.rating,
      title: item.title,
      type: item.type
    };
  });
};

const initialState = {
  offers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: convertOffers(offers)
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.LOAD_OFFERS):
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType};
