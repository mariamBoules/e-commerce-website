import React from "react";
import { Row } from "react-bootstrap";

const SideFilter = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">Category</div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">all</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">Tops</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">Bottoms</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">Shoes</div>
        </div>
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-2">Brand</div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">Aerie</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">American Eagle</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">aeropostale</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub ms-2">adidas</div>
        </div>
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-2">Price Range</div>
        <div className="d-flex mt-2">
          <p className="filter-sub my-2">From</p>

          <input
            type="number"
            className="m-2 text-center"
            style={{ height: "25px", width: "50px" }}
            value=""
          />
        </div>
        <div className="d-flex mt-2">
          <p className="filter-sub my-2">To</p>
          <input
            type="number"
            className="mx-4 mt-1 text-center"
            style={{ height: "25px", width: "50px" }}
            value=""
          />
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
