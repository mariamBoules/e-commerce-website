import useGetData from "../../Hooks/useGetData";
import { usePostDataImage } from "../../Hooks/usePostData";
import {
  CREATE_BRANDS,
  GET_BRANDS,
  GET_ERROR,
  GET_SPECIFIC_BRAND,
} from "../type";

export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_BRANDS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificBrand = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GET_SPECIFIC_BRAND,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllBrandsPage = (page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=3&page=${page}`);
    dispatch({
      type: GET_BRANDS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const postNewBrand = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataImage("/api/v1/brands", formData);
    dispatch({
      type: CREATE_BRANDS,
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
