import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedProducts } from "../../Redux/Actions/ProductAction";

const useViewShopProducts = () => {
  const dispatch = useDispatch();

  let limit = 9;
  let sortType = "";
  const handleSort = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    switch (sortType) {
      case "Bestsellers":
        return "-sold";
      case "Most Rating":
        return "-ratingsQuantity";
      case "Price from Low to High":
        return "+price";
      case "Price from High to Low":
        return "-price";
      default:
        return "";
    }
  };
  let word = "",
    categories = "",
    brands = "",
    priceTo = "",
    priceToQuery = "",
    priceFrom = "",
    priceFromQuery = "";

  const getLocalStorage = () => {
    if (localStorage.getItem("keyword")) word = localStorage.getItem("keyword");
    if (localStorage.getItem("categoryQuery"))
      categories = localStorage.getItem("categoryQuery");
    if (localStorage.getItem("brandsQuery"))
      brands = localStorage.getItem("brandsQuery");
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
      priceFromQuery = `&price[gt]=${priceFrom}`;
    }

    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
      priceToQuery = `&price[lte]=${priceTo}`;
    }
  };
  const getProduct = async () => {
    getLocalStorage();
    const sortKeyword = handleSort();
    await dispatch(
      getSearchedProducts(
        `sort=${sortKeyword}&limit=${limit}&keyword=${word}&${categories}&${brands}${priceFromQuery}${priceToQuery}`
      )
    );
  };
  useEffect(() => {
    getProduct("");
  }, []);

  const products = useSelector((state) => state.allproducts.allProducts);

  let items = [];

  if (products?.data) {
    items = products?.data?.data;
  } else items = [];

  let pagination = [];
  if (products?.data) {
    pagination = products.data.paginationResult;
  } else {
    pagination = [];
  }
  let totalNumberofItems = 0;
  if (products?.data) {
    totalNumberofItems = products?.data?.results;
  } else totalNumberofItems = [];
  var pageCount = 0;
  if (pagination) pageCount = pagination.numberOfPages;

  const getPage = async (page) => {
    getLocalStorage();
    const sortKeyword = handleSort();
    await dispatch(
      getSearchedProducts(
        `sort=${sortKeyword}&limit=${limit}&keyword=${word}&page=${page}&${categories}&${brands}${priceFromQuery}${priceToQuery}`
      )
    );
  };

  return [items, pageCount, getPage, getProduct, totalNumberofItems];
};

export default useViewShopProducts;
