import useDeleteData from "../../Hooks/useDeleteData";
import useGetData from "../../Hooks/useGetData";
import { usePostDataImage } from "../../Hooks/usePostData";
import { usePutDataImage } from "../../Hooks/usePutData";

import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  GET_ERROR,
  GET_SPECIFIC_PRODUCT,
  GET_RECOMMENDED_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
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

export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}`);
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

export const getRecommendedProduct = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_RECOMMENDED_PRODUCTS,
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

export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSearchedProducts = (query) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?${query}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
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

export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const res = await usePutDataImage(`/api/v1/products/${id}`, formData);

    dispatch({
      type: UPDATE_PRODUCT,
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
