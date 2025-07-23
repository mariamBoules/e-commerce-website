import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/AllCategoriesAction";
import { getAllBrands } from "../../Redux/Actions/AllBrandsAction";
import { getSubCategory } from "../../Redux/Actions/SubCategoryAction";
import notify from "../useNotify";
import { postNewProduct } from "../../Redux/Actions/ProductAction";
import keywords from "ajv-keywords";

const useCreateProduct = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [Pbd, setPbd] = useState("");
  const [Pad, setPad] = useState("");
  const [ProductCategoryId, setProductCategoryId] = useState("0");
  const [SelectedSubCategory, setSelectedSubCategory] = useState("");
  const [BrandId, setBrandId] = useState("0");
  const [ProductQuantity, setProductQuantity] = useState("");

  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);

  const [options, setOptions] = useState([]);

  const categories = useSelector((state) => state.allcategories.categories);
  const brands = useSelector((state) => state.allbrands.brands);
  const subcategories = useSelector(
    (state) => state.allsubcategories.subCategories
  );
  const products = useSelector((state) => state.allproducts.products);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
  }, []);

  useEffect(() => {
    if (ProductCategoryId && ProductCategoryId !== "0") {
      const subData = subcategories?.data;

      const normalizedData = Array.isArray(subData)
        ? subData
        : Array.isArray(subData?.data)
        ? subData.data
        : [];

      const formattedOptions = normalizedData.map((item) => ({
        value: item._id,
        label: item.name,
      }));

      setOptions(formattedOptions);
    }
  }, [ProductCategoryId, subcategories]);

  const handleSetProductName = (name) => {
    setProductName(name);
  };

  const handleSetDescription = (desc) => {
    setProductDescription(desc);
  };

  const handlePad = (Pad) => {
    setPad(Pad);
  };

  const handlePbd = (Pbd) => {
    setPbd(Pbd);
  };

  const handleProductQuantity = (q) => {
    setProductQuantity(q);
  };

  const handleReverseShowColor = () => {
    setShowColor(!showColor);
  };

  const handleSubCategory = (sub) => {
    setSelectedSubCategory(sub);
  };

  const handleChoosingColor = (color) => {
    setShowColor(!showColor);
    if (!colors.includes(color.hex)) {
      setColors([...colors, color.hex]);
    }
  };

  const handleRemovingColor = (color) => {
    const newList = colors.filter((e) => e !== color);
    setColors(newList);
  };
  const onChangeImages = (imageList) => {
    setImages(imageList);
  };

  const selectCategory = async (e) => {
    setSelectedSubCategory([]);
    const selectedId = e.target.value;
    setProductCategoryId(selectedId);

    if (selectedId !== "0") {
      await dispatch(getSubCategory(selectedId));
    }
  };

  const selectBrand = (e) => {
    setBrandId(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      ProductName === "" ||
      !images[0] ||
      ProductCategoryId === 0 ||
      ProductQuantity === ""
    ) {
      notify("Some fields are missing", "warn");
      return;
    }
    if (Number(Pad) <= 0 || Number(Pbd) <= 0 || Number(Pad) > Number(Pbd)) {
      notify("Wrong pricing", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("title", ProductName);
    formData.append("imageCover", images[0].file);
    formData.append("category", ProductCategoryId);
    formData.append("description", ProductDescription);
    formData.append("quantity", Number(ProductQuantity));
    formData.append("price", Number(Pad));
    formData.append("brand", BrandId);

    colors.forEach((color) => formData.append("availableColors", color));
    SelectedSubCategory.map((sub) => {
      formData.append("subcategory", sub.value);
    });
    images.map((img) => formData.append("images", img.file));

    setLoading(true);
    await dispatch(postNewProduct(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setProductName("");
      setProductDescription("");
      setProductQuantity("");
      setBrandId("0");
      setPad("");
      setPbd("");
      setProductCategoryId("0");
      setSelectedSubCategory("");
      setColors([]);
      setImages([]);

      if (products.status === 201) {
        notify("Added Successfully", "success");
      } else {
        notify("An error occured", "error");
      }
    }
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, [loading]);

  return [
    handleChoosingColor,
    handlePad,
    handlePbd,
    handleProductQuantity,
    handleRemovingColor,
    handleSetDescription,
    handleSetProductName,
    handleSubCategory,
    onChangeImages,
    selectBrand,
    selectCategory,
    submitForm,
    options,
    categories,
    brands,
    ProductName,
    ProductCategoryId,
    ProductDescription,
    Pad,
    Pbd,
    BrandId,
    ProductQuantity,
    SelectedSubCategory,
    images,
    colors,
    showColor,
    handleReverseShowColor,
  ];
};

export default useCreateProduct;
