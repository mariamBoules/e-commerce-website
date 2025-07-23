import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getAllBrandsPage,
} from "../../Redux/Actions/AllBrandsAction";

export const UseAllBrands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands(3));
  }, []);

  const getPage = (page) => {
    dispatch(getAllBrandsPage(page));
  };

  const brands = useSelector((state) => state.allbrands.brands);
  const loading = useSelector((state) => state.allbrands.loading);

  var pageCount = 0;
  if (brands.data) {
    pageCount = brands.paginationResult.numberOfPages;
  }
  return [getPage, loading, brands, pageCount];
};
export default UseAllBrands;
