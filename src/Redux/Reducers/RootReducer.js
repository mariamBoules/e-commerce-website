import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import brandReducer from "./BrandsReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import productReducer from "./ProductReducer";

export default combineReducers({
  allcategories: categoryReducer,
  allbrands: brandReducer,
  allsubcategories: SubCategoryReducer,
  allproducts: productReducer,
});
