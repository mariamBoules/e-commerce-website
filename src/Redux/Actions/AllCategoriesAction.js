import useGetData from "../../Hooks/useGetData";
import { usePostDataImage } from "../../Hooks/usePostData";
import {
  ALL_CATEGORIES,
  CREATE_CATEGORY,
  GET_ERROR,
  GET_SPECIFIC_CATEGORY,
} from "../type";

export const getAllCategories = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: ALL_CATEGORIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllCategoriesPage = (page,limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
    dispatch({
      type: ALL_CATEGORIES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_SPECIFIC_CATEGORY,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const postNewCategory = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataImage("/api/v1/categories", formData);
    dispatch({
      type: CREATE_CATEGORY,
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
