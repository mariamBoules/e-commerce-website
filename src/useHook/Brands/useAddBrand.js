import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import notify from "../useNotify";
import { postNewBrand } from "../../Redux/Actions/AllBrandsAction";
const useAddBrand = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const res = useSelector((state) => state.allbrands.brands);

  const changeName = (event) => {
    setName(event.target.value);
  };
  const choosePhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
    event.target.value = null;
  };
  const submitBrands = async (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("Enter all fields !", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setSubmitted(true);
    await dispatch(postNewBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setSubmitted(false), 1000);
      if (res.status === 201) {
        notify("Created Successfully", "success");
      } else {
        notify("An error occured", "error");
      }
    }
  }, [loading]);

  return [choosePhoto, img, submitted, submitBrands, name, loading, changeName];
};

export default useAddBrand;
