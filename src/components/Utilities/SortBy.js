import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
import useViewShopProducts from "../../useHook/Products/useViewShopProducts";

const SortBy = ({ itemsLength }) => {
  const handler = () => {};

  const sortClicked = (key) => {
    localStorage.setItem("sortType", key);
    getProduct();
  };

  const [items, pageCount, getPage, getProduct, totalNumberofItems] =
    useViewShopProducts();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="search-count-text">Showing {itemsLength} Products</h3>
      <UnopDropdown
        onAppear={handler}
        onDisappearStart={handler}
        trigger={
          <div>
            <p
              className="mx-1 d-flex align-items-center"
              style={{
                fontSize: "18px",
                fontFamily: "Lato",
                fontWeight: "normal",
              }}
            >
              <img
                src={sort}
                alt="sort"
                width="20px"
                height="20px"
                className="my-4 mx-1"
              />
              Sort by
            </p>
          </div>
        }
        delay={300}
        align="CENTER"
        hover
      >
        <div className="card-filter">
          <div
            className="card-filter-item"
            onClick={() => sortClicked("Newely Added")}
          >
            Newely Added
          </div>
          <div
            className="card-filter-item"
            onClick={() => sortClicked("Bestsellers")}
          >
            Bestsellers
          </div>
          <div
            className="card-filter-item"
            onClick={() => sortClicked("Most Rating")}
          >
            Most Rating
          </div>
          <div
            className="card-filter-item"
            onClick={() => sortClicked("Price from Low to High")}
          >
            Price from Low to High
          </div>
          <div
            className="card-filter-item"
            onClick={() => sortClicked("Price from High to Low")}
          >
            Price from High to Low
          </div>
        </div>
      </UnopDropdown>
    </div>
  );
};

export default SortBy;
