import { postNewSubCategory } from "../../Redux/Actions/SubCategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/AllCategoriesAction";
import notify from "../../useHook/useNotify";
import { useEffect, useState } from "react";

const useCreateSubcategory = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!navigator.onLine) {
      notify("Check your internet connection", "warn");
      return;
    }
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allcategories.categories);
  const subcategories = useSelector(
    (state) => state.allsubcategories.subCategories
  );

  const chooseCategory = (e) => {
    setId(e.target.value);
  };

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    if (id === "0") {
      notify("Choose Category", "warn");
      return;
    }
    if (name === "") {
      notify("Enter sub-category Name", "warn");
      return;
    }
    setLoading(true);

    await dispatch(
      postNewSubCategory({
        name,
        category: id,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subcategories) {
        console.log(subcategories.status);
        console.log(subcategories);

        if (subcategories.status === 201) {
          notify("Created Successfully", "success");
        } else if (
          subcategories ===
          "Error AxiosError: Request failed with status code 400"
        ) {
          notify("Duplicate name", "error");
        } else {
          notify("An Error Occured", "error");
        }
      }
      setLoading(true);
    }
  }, [loading]);

  return [name, id, categories, chooseCategory, changeName, saveChanges];
};

export default useCreateSubcategory;
