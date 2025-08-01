import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductAction";

const useViewProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.allproducts.allProducts);

  let items = [];

  if (products.data) {
    items = products.data.data.slice(0,4)
  }
  else items = [];

  

  return [items];
};

export default useViewProducts;
