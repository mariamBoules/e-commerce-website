import { CREATE_PRODUCT, GET_PRODUCTS, GET_SPECIFIC_PRODUCT } from "../type";

const initial = {
  products: [],
  allProducts: [],
  specificProduct: [],
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
    case CREATE_PRODUCT:
      return {
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
