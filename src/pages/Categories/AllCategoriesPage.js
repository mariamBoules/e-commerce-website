import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Pagination from "../../components/Utilities/Pagination";
import UseAllCategories from "../../useHook/Category/useAllCategories";

const AllCategoriesPage = () => {
  const [getPage, loading, categories, pageCount] = UseAllCategories();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoriesContainer data={categories.data} loading={loading} />

      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoriesPage;
