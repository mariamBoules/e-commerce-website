import {
  ALL_CATEGORIES,
  CREATE_CATEGORY,
  GET_SPECIFIC_CATEGORY,
} from "../type";

const initial = {
  categories: [],
  specificCategory: [],
  loading: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_CATEGORY:
      return {
        specificCategory: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
