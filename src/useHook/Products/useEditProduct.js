import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/AllCategoriesAction";
import { getAllBrands } from "../../Redux/Actions/AllBrandsAction";
import { getSubCategory } from "../../Redux/Actions/SubCategoryAction";
import notify from "../useNotify";
import {
  getSpecificProduct,
  updateProduct,
} from "../../Redux/Actions/ProductAction";

const useEditProduct = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategories());
      await dispatch(getAllBrands());
      await dispatch(getSpecificProduct(id));
    };
    run();
  }, []);

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

  const product = useSelector((state) => state.allproducts.specificProduct);
  const categories = useSelector((state) => state.allcategories.categories);
  const brands = useSelector((state) => state.allbrands.brands);
  const subcategories = useSelector(
    (state) => state.allsubcategories.subCategories
  );
  const updatedProduct = useSelector(
    (state) => state.allproducts.updatedProduct
  );

  useEffect(() => {
    if (product && product.data?.data) {
      setImages(product.data.data.images);
      setProductName(product.data.data.title);
      setProductDescription(product.data.data.description);
      setPad(product.data.data.price);
      setBrandId(product.data.data.brand);
      setProductCategoryId(product.data.data.category);
      setProductQuantity(product.data.data.quantity);
      setColors(product.data.data.availableColors);

      dispatch(getSubCategory(product.data.data.category));
    }
  }, [product]);

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

  useEffect(() => {
    if (subcategories && subcategories.data?.data) {
      const formatted = subcategories.data.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(formatted);

      const selectedSubs = product?.data?.data?.subcategory || [];
      const selected = formatted.filter((opt) =>
        selectedSubs.includes(opt.value)
      );
      setSelectedSubCategory(selected);
    }
  }, [subcategories, product]);

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

  const convertUrlToFileObject = async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob();

    let type = blob.type;
    if (!type.startsWith("image")) {
      const ext = url.split(".").pop().toLowerCase();
      type =
        ext === "png"
          ? "image/png"
          : ext === "jpg" || ext === "jpeg"
          ? "image/jpeg"
          : "image/*";
    }

    const filename = `image-${index}.${type.split("/")[1]}`;
    const file = new File([blob], filename, { type });

    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve({
          file,
          data_url: reader.result,
        });
      };
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    const loadProductData = async () => {
      if (product && product.data?.data) {
        const prod = product.data.data;

        const convertedImages = await Promise.all(
          prod.images.map((url, index) => convertUrlToFileObject(url, index))
        );

        //console.log(convertedImages[0].file);
        setImages(convertedImages);
        setProductName(prod.title);
        setProductDescription(prod.description);
        setPad(prod.price);
        setBrandId(prod.brand);
        setProductCategoryId(prod.category);
        setProductQuantity(prod.quantity);
        setColors(prod.availableColors);

        dispatch(getSubCategory(prod.category));
      }
    };

    loadProductData();
  }, [product]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      ProductName === "" ||
      ProductCategoryId === 0 ||
      ProductQuantity === "" ||
      images[0] == null
    ) {
      notify("Some fields are missing", "warn");
      return;
    }
    if (
      (Pad && Number(Pad) <= 0) ||
      (Pbd && Number(Pbd) <= 0) ||
      (Pad && Pbd && Number(Pad) > Number(Pbd))
    ) {
      notify("Wrong pricing", "warn");
      return;
    }

    if (!images[0]?.file) {
      notify("Image format is invalid", "warn");
      return;
    }
    //console.log(images[0].file);
    const formData = new FormData();
    formData.append("title", ProductName);
    formData.append("imageCover", images[0].file);
    formData.append("category", ProductCategoryId);
    formData.append("description", ProductDescription);
    formData.append("quantity", Number(ProductQuantity));
    formData.append("price", Number(Pad));
    formData.append("brand", BrandId);

    colors.forEach((color) => formData.append("availableColors", color));
    (Array.isArray(SelectedSubCategory) ? SelectedSubCategory : []).forEach(
      (sub) => formData.append("subcategory", sub.value)
    );
    images.map((img) => formData.append("images", img.file));

    setLoading(true);
    await dispatch(updateProduct(id, formData));
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

      if (updatedProduct && updatedProduct.status === 200) {
        notify("Updated Successfully", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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

export default useEditProduct;
