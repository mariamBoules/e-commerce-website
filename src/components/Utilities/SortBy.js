import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";

const SortBy = ({itemsLength}) => {
  const handler = () => {};
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
          <div className="card-filter-item">I am random</div>
          <div className="card-filter-item">I am random</div>
          <div className="card-filter-item">I am random</div>
        </div>
      </UnopDropdown>
    </div>
  );
};

export default SortBy;
