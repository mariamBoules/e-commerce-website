import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";

const initial = {
  subCategories: [],
  loading: true,
};

const SubCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategories: action.payload,
        loading: false,
      };
    case GET_SUB_CATEGORY:
      return {
        subCategories: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        subCategories: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default SubCategoryReducer;
