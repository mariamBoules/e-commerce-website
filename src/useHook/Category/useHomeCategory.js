import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/Actions/AllCategoriesAction';

const useHomeCategory = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allcategories.categories);
  const loading = useSelector((state) => state.allcategories.loading);


  const colors = ["pink", "blue", "yellow", "red", "orange", "brown"];

  return [categories, loading, colors]
}

export default useHomeCategory