import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import image from "../../images/laptop.png";
import Pagination from "../Utilities/Pagination";
const UserFavorites = () => {
  return (
    <div>
      <Row className="admin-content-text mt-3 mx-3">My Favorites</Row>
      <Row className="justify-content-start">
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
        <ProductCard
          img={image}
          description="Gamed Gamooda"
          rating="1.3"
          price="400"
        />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavorites;
