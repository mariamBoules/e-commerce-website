import React from "react";
import { Link } from "react-router-dom";

const Subtitle = ({ title, btnTitle, path }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      {btnTitle ? (
        <Link to={`${path}`}>
          {" "}
          <button className="shopping-now">{btnTitle}</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Subtitle;
