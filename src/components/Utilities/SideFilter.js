import { useState } from "react";
import useSideBarFilter from "../../useHook/Search/useSideBarFilter";

const SideFilter = () => {
  const [
    categories,
    brands,
    onChangeCategory,
    onChangeBrand,
    chosenCategories,
    chosenBrands,
    onChangePriceFrom,
    onChangePriceTo,
    priceFrom,
    priceTo,
  ] = useSideBarFilter();

  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const toggleShowingAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
  const toggleShowingAllBrands = () => {
    setShowAllBrands(!showAllBrands);
  };
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">Category</div>
        <div className="d-flex mt-2">
          <input
            onChange={onChangeCategory}
            checked={chosenCategories.length === 0}
            type="checkbox"
            value="0"
          />
          <div className="filter-sub ms-2">All</div>
        </div>
        {visibleCategories
          ? visibleCategories.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    onChange={onChangeCategory}
                    checked={chosenCategories.includes(item._id)}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub ms-2">{item.name}</div>
                </div>
              );
            })
          : null}
        {categories.length > 5 ? (
          <button
            style={{
              background: "none",
              border: "none",
              color: "#6c757d",
              textAlign: "left",
              padding: "0",
              marginTop: "5px",
              cursor: "pointer",
              fontFamily: "Lato",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#5a6268")}
            onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
            onClick={toggleShowingAllCategories}
            className="filter-sub ms-2"
          >
            {showAllCategories ? "See Less" : "See More"}
          </button>
        ) : null}
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-2">Brand</div>
        <div className="d-flex mt-2">
          <input
            onChange={onChangeBrand}
            checked={chosenBrands.length === 0}
            type="checkbox"
            value="0"
          />
          <div className="filter-sub ms-2">All</div>
        </div>
        {visibleBrands
          ? visibleBrands.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    onChange={onChangeBrand}
                    checked={chosenBrands.includes(item._id)}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub ms-2">{item.name}</div>
                </div>
              );
            })
          : null}

        {brands.length > 5 ? (
          <button
            style={{
              background: "none",
              border: "none",
              color: "#6c757d",
              textAlign: "left",
              padding: "0",
              marginTop: "5px",
              cursor: "pointer",
              fontFamily: "Lato",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#5a6268")}
            onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
            onClick={toggleShowingAllBrands}
            className="filter-sub ms-2"
          >
            {showAllBrands ? "See Less" : "See More"}
          </button>
        ) : null}
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-2">Price Range</div>
        <div className="d-flex mt-2">
          <p className="filter-sub my-2">From</p>

          <input
            type="number"
            className="m-2 text-center"
            style={{ height: "25px", width: "70px" }}
            value={priceFrom}
            onChange={onChangePriceFrom}
          />
        </div>
        <div className="d-flex mt-2">
          <p className="filter-sub my-2">To</p>
          <input
            type="number"
            className="mx-4 mt-1 text-center"
            style={{ height: "25px", width: "70px" }}
            value={priceTo}
            onChange={onChangePriceTo}
          />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
