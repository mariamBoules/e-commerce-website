import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/AllCategoriesAction";
import { getAllBrands } from "../../Redux/Actions/AllBrandsAction";
import useViewShopProducts from "../Products/useViewShopProducts";

const useSideBarFilter = () => {
  const dispatch = useDispatch();
  const [items, pageCount, getPage, getProduct, totalNumberofItems] =
    useViewShopProducts();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategories());
      await dispatch(getAllBrands());
    };
    run();
  }, []);

  const allCategories = useSelector((state) => state.allcategories.categories);
  const allBrands = useSelector((state) => state.allbrands.brands);

  //console.log(allCategories.data);
  let categories = [];
  if (allCategories?.data) {
    categories = allCategories.data;
  }

  let brands = [];
  if (allBrands?.data) {
    brands = allBrands.data;
  }

  const [chosenCategories, setChosenCategories] = useState([]);

  const onChangeCategory = (e) => {
    let value = e.target.value;

    if (value === "0") {
      setChosenCategories([]);
    } else if (e.target.checked === true) {
      setChosenCategories([...chosenCategories, value]);
    } else {
      const newArray = chosenCategories.filter((e) => e !== value);
      setChosenCategories(newArray);
    }
  };

  let categoryQuery = "";

  useEffect(() => {
    categoryQuery = chosenCategories
      .map((category) => "category[in][]=" + category)
      .join("&");

    localStorage.setItem("categoryQuery", categoryQuery);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [chosenCategories]);

  const [chosenBrands, setChosenBrands] = useState([]);

  const onChangeBrand = (e) => {
    let value = e.target.value;

    if (value === "0") {
      setChosenBrands([]);
    } else if (e.target.checked === true) {
      setChosenBrands([...chosenBrands, value]);
    } else {
      const newArray = chosenBrands.filter((e) => e !== value);
      setChosenBrands(newArray);
    }
  };

  let brandsQuery = "";

  useEffect(() => {
    brandsQuery = chosenBrands.map((brand) => "brand[in][]=" + brand).join("&");

    localStorage.setItem("brandsQuery", brandsQuery);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [chosenBrands]);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const onChangePriceFrom = (e) => {
    setPriceFrom(e.target.value);
  };
  const onChangePriceTo = (e) => {
    setPriceTo(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("priceFrom", priceFrom);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [priceFrom]);
  useEffect(() => {
    localStorage.setItem("priceTo", priceTo);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [priceTo]);
  return [
    categories,
    brands,
    onChangeCategory,
    onChangeBrand,
    chosenCategories,
    chosenBrands,
    onChangePriceFrom,
    onChangePriceTo,
    priceFrom,
    priceTo
  ];
};

export default useSideBarFilter;
