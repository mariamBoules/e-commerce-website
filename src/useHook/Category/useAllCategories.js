import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllCategoriesPage,
} from "../../Redux/Actions/AllCategoriesAction";

export const UseAllCategories = () => {
  const dispatch = useDispatch();
  let limit = 12
  useEffect(() => {
    dispatch(getAllCategories(limit));
  }, []);

  const getPage = async (page) => {
    await dispatch(getAllCategoriesPage(page, limit));
  };

  const categories = useSelector((state) => state.allcategories.categories);
  const loading = useSelector((state) => state.allcategories.loading);

  var pageCount = 0;
  if (categories.data) {
    pageCount = categories.paginationResult.numberOfPages;
  }
  return [getPage, loading, categories, pageCount];
};
export default UseAllCategories;
