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
    <div className="CategoriesList d-flex overflow-scroll mb-4 pb-3">
      {/* <div className="move move-left">left</div> */}
      {/* <div className="move move-right">right</div> */}
      {categories.map((category) => {
        return (
          <Badge
            className="category-badge m-1"
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
