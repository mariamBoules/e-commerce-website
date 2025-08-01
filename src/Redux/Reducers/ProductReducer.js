import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  GET_RECOMMENDED_PRODUCTS,
  GET_SPECIFIC_PRODUCT,
  UPDATE_PRODUCT,
} from "../type";

const initial = {
  products: [],
  allProducts: [],
  specificProduct: [],
  recommendedProducts: [],
  deletedProduct: [],
  updatedProduct: [],
  loading: true,
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_PRODUCT:
      return {
        specificProduct: action.payload,
        loading: false,
      };
    case GET_RECOMMENDED_PRODUCTS:
      return {
        ...state,
        recommendedProducts: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        products: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deletedProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updatedProduct: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
