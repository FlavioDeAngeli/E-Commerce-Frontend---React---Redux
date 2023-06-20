import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Badge } from "react-bootstrap";
import "./style.css";

function CategoriesList() {
  const isMobile = useSelector((state) => state.ui.isMobile);

  const categories = useSelector((state) => state.categories.categories);
  let navigate = useNavigate();

  function handleClick(e, category) {
    e.preventDefault();
    navigate(`/categories/${category}`);
  }

  return !isMobile ? (
    <div className="CategoriesList d-flex flex-column ms-2 me-4">
      {categories.map((category) => {
        return (
          <Badge
            className="category-badge ms-1 me-1 mb-2"
            key={`badge-${category}`}
            onClick={(e) => handleClick(e, category)}
          >
            {category.toUpperCase()}
          </Badge>
        );
      })}
    </div>
  ) : (
    <div className="ms-4"></div>
  );
}

export default CategoriesList;
