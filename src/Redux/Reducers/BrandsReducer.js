import { CREATE_BRANDS, GET_BRANDS, GET_SPECIFIC_BRAND } from "../type";

const initial = {
  brands: [],
  specificBrand: [],
  loading: true,
};

const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_BRAND:
      return {
        specificBrand: action.payload,
        loading: false,
      };
    case CREATE_BRANDS:
      return {
        brands: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default brandReducer;
