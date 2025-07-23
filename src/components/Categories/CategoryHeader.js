import React from "react";
import { Nav } from "react-bootstrap";

const CategoryHeader = () => {
  return (
    <div className="cat-header p-2">
      <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item className="cat-text-header">Category 1</Nav.Item>
        <Nav.Item className="cat-text-header">Category 2</Nav.Item>
        <Nav.Item className="cat-text-header">Category 3</Nav.Item>
        <Nav.Item className="cat-text-header">Category 4</Nav.Item>
        <Nav.Item className="cat-text-header">Category 5</Nav.Item>
      </Nav>
    </div>
  );
};

export default CategoryHeader;
