import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../Redux/Actions/ProductAction";

const useViewAdminProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(12));
  }, []);
  const products = useSelector((state) => state.allproducts.allProducts);

  let items = [];

  if (products?.data) {
    items = products.data?.data;
  } else items = [];

  let pagination = [];
  if (products?.data) {
    pagination = products.data.paginationResult;
  } else {
    pagination = [];
  }
  var pageCount = 0;
  if (pagination) pageCount = pagination.numberOfPages;
  const getPage = async (page) => {
    await dispatch(getAllProductsPage(page, 12));
  };

  return [items, pageCount, getPage];
};

export default useViewAdminProducts;
