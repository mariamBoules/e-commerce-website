import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../Redux/Actions/AllBrandsAction';

const useHomeBrands = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  const brands = useSelector((state) => state.allbrands.brands);
  const loading = useSelector((state) => state.allbrands.loading);

  return [brands, loading]
}

export default useHomeBrands