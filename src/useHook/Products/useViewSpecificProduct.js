import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecommendedProduct,
  getSpecificProduct,
} from "../../Redux/Actions/ProductAction";
import default_img from "../../images/default_img.jpg";
import { getSpecificCategory } from "../../Redux/Actions/AllCategoriesAction";
import { getSpecificBrand } from "../../Redux/Actions/AllBrandsAction";

const useViewSpecificProduct = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificProduct(id.id));
  }, []);

  const product = useSelector((state) => state.allproducts.specificProduct);
  const specificCategory = useSelector(
    (state) => state.allcategories.specificCategory
  );
  const specificBrand = useSelector((state) => state.allbrands.specificBrand);
  const recommendedProducts = useSelector(
    (state) => state.allproducts.recommendedProducts
  );

  let item = [];

  if (product.data) {
    item = product.data.data;
  } else item = [];

  useEffect(() => {
    if (item?.category) dispatch(getSpecificCategory(item.category));
    if (item?.brand) dispatch(getSpecificBrand(item.brand));
    if (item?.category) dispatch(getRecommendedProduct(item.category));
  }, [item]);

  let category = [];
  if (specificCategory?.data) {
    category = specificCategory.data.name;
  } else {
    category = [];
  }

  let brands = [];
  if (specificBrand?.data) {
    brands = specificBrand.data.name;
  } else {
    brands = [];
  }

  let recommended = [];
  if (recommendedProducts?.data) {
    recommended = recommendedProducts.data.data.slice(0,4);

  } else {
    recommended = [];
  }

  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [
      {
        original: `${default_img}`,
      },
    ];
  }
  return [item, images, category, brands, recommended];
};

export default useViewSpecificProduct;
