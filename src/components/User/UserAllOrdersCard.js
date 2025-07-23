import React from "react";
import image from "../../images/laptop.png";
import del from "../../images/delete.png";
const UserAllOrdersCard = () => {
  return (
    <div className="my-3" style={{ position: "relative" }}>
      <div className="d-flex align-items-start">
        <img
          src={image}
          alt="product"
          width="170px"
          height="170px"
          className="my-4 mx-2"
        />

        <div className="d-flex flex-column justify-content-center ms-3 mt-5">
          <p className="cat-text">
            Big Big Big description <span className="cat-rate">4.3</span>
            <span className="mx-2"> (100 reviews)</span>
          </p>

          <div className="d-flex">
            <p className="cat-text my-2">Quantity :</p>
            <input type="number" className="mx-2" style={{ width: "60px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrdersCard;
