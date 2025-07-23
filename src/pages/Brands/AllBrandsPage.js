import React from "react";
import AllBrandsContainer from "../../components/Brands/AllBrandsContainer";
import Pagination from "../../components/Utilities/Pagination";
import UseAllBrands from "../../useHook/Brands/useAllBrands";

const AllBrandsPage = () => {
  const [getPage, loading, brands, pageCount] = UseAllBrands();
  return (
    <div>
      <AllBrandsContainer brands={brands} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  );
};

export default AllBrandsPage;
