import useGetData from "../../Hooks/useGetData";
import { usePostDataImage } from "../../Hooks/usePostData";

import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  GET_ERROR,
  GET_SPECIFIC_PRODUCT,
} from "../type";

export const postNewProduct = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataImage("/api/v1/products", formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificProduct = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_SPECIFIC_PRODUCT,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
