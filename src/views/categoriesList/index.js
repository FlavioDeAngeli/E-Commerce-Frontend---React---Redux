import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Badge } from "react-bootstrap";
import "./style.css";

function CategoriesList() {
  const categories = useSelector((state) => state.categories.categories);
  let navigate = useNavigate();

  function handleClick(e, category) {
    e.preventDefault();
    navigate(`/categories/${category}`);
  }

  return (
    // <div className="categoriesContainer">
    <div className="CategoriesList d-flex flex-column ms-2 me-4">
      {/* <div className="move move-left">left</div> */}
      {/* <div className="move move-right">right</div> */}
      {categories.map((category) => {
        return (
          <Badge
            className="category-badge ms-1 me-1 mb-2 p-2"
            key={`badge-${category}`}
            onClick={(e) => handleClick(e, category)}
          >
            {category.toUpperCase()}
          </Badge>
        );
      })}
    </div>
    // </div>
  );
}

export default CategoriesList;
