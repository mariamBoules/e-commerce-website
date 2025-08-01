import React, { useEffect, useState } from "react";
import useViewShopProducts from "../Products/useViewShopProducts";

const useNavBarSearch = () => {
  const [items, pageCount, getPage, getProduct, totalNumberofItems] =
    useViewShopProducts();
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    localStorage.setItem("keyword", e.target.value);

    let path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [keyword]);

  return [onChangeKeyword];
};

export default useNavBarSearch;
