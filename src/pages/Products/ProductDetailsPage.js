import React from "react";
import CategoryHeader from "../../components/Categories/CategoryHeader";
import ProductDetails from "../../components/Products/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import ProductCardContainer from "../../components/Products/ProductCardContainer";
import { useParams } from "react-router-dom";
import useViewSpecificProduct from "../../useHook/Products/useViewSpecificProduct";

const ProductDetailsPage = () => {
  const id = useParams();
  const [item, images, category, brands, recommended] = useViewSpecificProduct(id)
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <ProductDetails/>
      <RateContainer />
      <ProductCardContainer title="You would also like" products={recommended}/>
    </div>
  );
};

export default ProductDetailsPage;
